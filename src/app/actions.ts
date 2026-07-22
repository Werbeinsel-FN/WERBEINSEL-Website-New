'use server'

import { Resend } from 'resend'
import {
  BEWERBUNG_ALLOWED_TYPES,
  BEWERBUNG_MAX_BYTES,
  bewerbungSchema,
  kontaktSchema,
} from '@/lib/validation'
import { verifyTurnstile } from '@/lib/turnstile'

export type FormState = {
  ok: boolean
  message?: string
  errors?: Record<string, string[] | undefined>
}

/** Kontaktformular: validieren → Turnstile → E-Mail via Resend. */
export async function sendContact(_prev: FormState, formData: FormData): Promise<FormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    unternehmen: formData.get('unternehmen'),
    telefon: formData.get('telefon'),
    services: formData.getAll('services') as string[],
    budget: formData.get('budget'),
    zeitraum: formData.get('zeitraum'),
    nachricht: formData.get('nachricht'),
    consent: formData.get('consent'),
  }

  const parsed = kontaktSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors }
  }

  const captchaOk = await verifyTurnstile(formData.get('cf-turnstile-response') as string | null)
  if (!captchaOk) {
    return { ok: false, message: 'Spam-Prüfung fehlgeschlagen. Bitte erneut versuchen.' }
  }

  const d = parsed.data
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.warn('RESEND_API_KEY fehlt – Anfrage nur geloggt.')
    console.info('[Kontakt]', d)
    return { ok: true, message: 'Danke! Ihre Anfrage ist bei uns eingegangen.' }
  }

  const resend = new Resend(resendKey)

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'website@werbeinsel.de',
      to: process.env.EMAIL_TO_AGENTUR || '',
      replyTo: d.email,
      subject: `Neue Anfrage von ${d.name}`,
      text: [
        `Name: ${d.name}`,
        `E-Mail: ${d.email}`,
        `Unternehmen: ${d.unternehmen || '-'}`,
        `Telefon: ${d.telefon}`,
        `Services: ${(d.services || []).join(', ') || '-'}`,
        `Budget: ${d.budget || '-'}`,
        `Zeitraum: ${d.zeitraum || '-'}`,
        '',
        d.nachricht || '',
      ].join('\n'),
    })

    return { ok: true, message: 'Danke! Ihre Anfrage ist bei uns eingegangen.' }
  } catch (err) {
    console.error(err)
    return { ok: false, message: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }
  }
}

/** Bewerbungsformular inkl. Datei-Prüfung. */
export async function sendApplication(_prev: FormState, formData: FormData): Promise<FormState> {
  const portfolioRaw = String(formData.get('portfolio') || '').trim()
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    telefon: formData.get('telefon'),
    position: formData.get('position'),
    verfuegbarAb: formData.get('verfuegbarAb') || undefined,
    portfolio: portfolioRaw || '',
    nachricht: formData.get('nachricht'),
    consent: formData.get('consent'),
  }

  const parsed = bewerbungSchema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors }
  }

  const file = formData.get('datei')
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, errors: { datei: ['Bitte eine Datei hochladen.'] } }
  }
  if (file.size > BEWERBUNG_MAX_BYTES) {
    return { ok: false, errors: { datei: ['Datei darf maximal 10 MB groß sein.'] } }
  }
  const typeOk =
    BEWERBUNG_ALLOWED_TYPES.includes(file.type as (typeof BEWERBUNG_ALLOWED_TYPES)[number]) ||
    /\.(pdf|jpe?g|png|zip)$/i.test(file.name)
  if (!typeOk) {
    return { ok: false, errors: { datei: ['Erlaubt: PDF, JPG, PNG oder ZIP.'] } }
  }

  const captchaOk = await verifyTurnstile(formData.get('cf-turnstile-response') as string | null)
  if (!captchaOk) {
    return { ok: false, message: 'Spam-Prüfung fehlgeschlagen. Bitte erneut versuchen.' }
  }

  const d = parsed.data
  const resendKey = process.env.RESEND_API_KEY
  const textBody = [
    `Name: ${d.name}`,
    `E-Mail: ${d.email}`,
    `Telefon: ${d.telefon}`,
    `Position: ${d.position}`,
    `Verfügbar ab: ${d.verfuegbarAb || '-'}`,
    `Portfolio: ${d.portfolio || '-'}`,
    `Anhang: ${file.name} (${Math.round(file.size / 1024)} KB, ${file.type || 'unbekannt'})`,
    '',
    d.nachricht || '',
  ].join('\n')

  if (!resendKey) {
    console.warn('RESEND_API_KEY fehlt – Bewerbung nur geloggt.')
    console.info('[Bewerbung]', { ...d, datei: file.name, size: file.size })
    return { ok: true, message: 'Danke! Ihre Bewerbung ist bei uns eingegangen.' }
  }

  const resend = new Resend(resendKey)

  try {
    const attachments =
      file.size <= BEWERBUNG_MAX_BYTES
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : undefined

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'website@werbeinsel.de',
      to: process.env.EMAIL_TO_AGENTUR || '',
      replyTo: d.email,
      subject: `Bewerbung: ${d.position} – ${d.name}`,
      text: attachments
        ? textBody
        : `${textBody}\n\n(Hinweis: Anhang zu groß für Direktversand – Dateiname notiert.)`,
      attachments,
    })

    return { ok: true, message: 'Danke! Ihre Bewerbung ist bei uns eingegangen.' }
  } catch (err) {
    console.error(err)
    return { ok: false, message: 'Versand fehlgeschlagen. Bitte später erneut versuchen.' }
  }
}
