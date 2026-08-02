'use server'

import {
  BEWERBUNG_ALLOWED_TYPES,
  BEWERBUNG_MAX_BYTES,
  bewerbungSchema,
  kontaktSchema,
} from '@/lib/validation'
import { verifyTurnstile } from '@/lib/turnstile'
import { sendConfirmation, sendToAgentur } from '@/lib/mail'
import { persistAnfrage } from '@/lib/anfragen'

export type FormState = {
  ok: boolean
  message?: string
  errors?: Record<string, string[] | undefined>
}

function absoluteMediaUrl(pathOrUrl: string | null | undefined): string | null {
  if (!pathOrUrl) return null
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const base = (process.env.NEXT_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SITE_URL || '').replace(
    /\/$/,
    '',
  )
  if (!base) return pathOrUrl
  return `${base}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

/** Kontaktformular: validieren → Turnstile → speichern → Resend (Agentur + Bestätigung). */
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

  await persistAnfrage({
    typ: 'kontakt',
    daten: {
      name: d.name,
      email: d.email,
      unternehmen: d.unternehmen || null,
      telefon: d.telefon,
      services: d.services || [],
      budget: d.budget || null,
      zeitraum: d.zeitraum || null,
      nachricht: d.nachricht || null,
    },
  })

  const text = [
    'Neue Kontaktanfrage über die Website',
    '',
    `Name: ${d.name}`,
    `E-Mail: ${d.email}`,
    `Unternehmen: ${d.unternehmen || '-'}`,
    `Telefon: ${d.telefon}`,
    `Services: ${(d.services || []).join(', ') || '-'}`,
    `Budget: ${d.budget || '-'}`,
    `Zeitraum: ${d.zeitraum || '-'}`,
    '',
    'Nachricht:',
    d.nachricht || '-',
  ].join('\n')

  const agency = await sendToAgentur({
    subject: `Neue Anfrage von ${d.name}`,
    text,
    replyTo: d.email,
  })
  if (!agency.ok) {
    return { ok: false, message: agency.error }
  }

  await sendConfirmation({ to: d.email, name: d.name, kind: 'kontakt' })

  return { ok: true, message: 'Danke! Ihre Anfrage ist bei uns eingegangen.' }
}

/** Bewerbungsformular: Datei prüfen → speichern (Media) → Resend inkl. Anhang. */
export async function sendApplication(_prev: FormState, formData: FormData): Promise<FormState> {
  const portfolioRaw = String(formData.get('portfolio') || '').trim()
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    telefon: formData.get('telefon'),
    position: formData.get('position'),
    verfuegbarAb: formData.get('verfuegbarAb') || undefined,
    services: formData.getAll('services') as string[],
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
    /\.(pdf|docx?|jpe?g|png|zip)$/i.test(file.name)
  if (!typeOk) {
    return { ok: false, errors: { datei: ['Erlaubt: PDF, DOC, DOCX, JPG, PNG oder ZIP.'] } }
  }

  const captchaOk = await verifyTurnstile(formData.get('cf-turnstile-response') as string | null)
  if (!captchaOk) {
    return { ok: false, message: 'Spam-Prüfung fehlgeschlagen. Bitte erneut versuchen.' }
  }

  const d = parsed.data

  const saved = await persistAnfrage({
    typ: 'bewerbung',
    daten: {
      name: d.name,
      email: d.email,
      telefon: d.telefon,
      position: d.position,
      verfuegbarAb: d.verfuegbarAb || null,
      services: d.services || [],
      portfolio: d.portfolio || null,
      nachricht: d.nachricht || null,
      dateiName: file.name,
      dateiSize: file.size,
    },
    file,
  })

  const fileLink = absoluteMediaUrl(saved.fileUrl)
  const textBody = [
    'Neue Bewerbung über die Website',
    '',
    `Name: ${d.name}`,
    `E-Mail: ${d.email}`,
    `Telefon: ${d.telefon}`,
    `Position: ${d.position}`,
    `Verfügbar ab: ${d.verfuegbarAb || '-'}`,
    `Interessen: ${(d.services || []).join(', ') || '-'}`,
    `Portfolio: ${d.portfolio || '-'}`,
    `Anhang: ${file.name} (${Math.round(file.size / 1024)} KB)`,
    fileLink ? `Datei-Link: ${fileLink}` : '',
    '',
    'Nachricht:',
    d.nachricht || '-',
  ]
    .filter(Boolean)
    .join('\n')

  let attachments: Array<{ filename: string; content: Buffer }> | undefined
  try {
    attachments = [
      {
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      },
    ]
  } catch {
    attachments = undefined
  }

  const agency = await sendToAgentur({
    subject: `Bewerbung: ${d.position} – ${d.name}`,
    text: textBody,
    replyTo: d.email,
    attachments,
  })
  if (!agency.ok) {
    return { ok: false, message: agency.error }
  }

  await sendConfirmation({ to: d.email, name: d.name, kind: 'bewerbung' })

  return { ok: true, message: 'Danke! Ihre Bewerbung ist bei uns eingegangen.' }
}
