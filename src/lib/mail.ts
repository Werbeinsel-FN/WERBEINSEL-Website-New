import { Resend } from 'resend'

export type MailResult = { ok: true } | { ok: false; error: string }

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export function mailConfig() {
  return {
    from: process.env.EMAIL_FROM || 'website@werbeinsel.de',
    toAgentur: process.env.EMAIL_TO_AGENTUR || 'hallo@werbeinsel.de',
  }
}

/** E-Mail an die Agentur (+ optionale Anhänge). */
export async function sendToAgentur(opts: {
  subject: string
  text: string
  replyTo: string
  attachments?: Array<{ filename: string; content: Buffer }>
}): Promise<MailResult> {
  const resend = getResend()
  const { from, toAgentur } = mailConfig()

  if (!resend) {
    console.warn('[mail] RESEND_API_KEY fehlt – nur geloggt:', opts.subject)
    console.info(opts.text)
    if (process.env.NODE_ENV === 'production') {
      return {
        ok: false,
        error: 'E-Mail-Versand ist nicht konfiguriert (RESEND_API_KEY fehlt).',
      }
    }
    return { ok: true }
  }
  if (!toAgentur) {
    return { ok: false, error: 'EMAIL_TO_AGENTUR ist nicht konfiguriert.' }
  }

  const { error } = await resend.emails.send({
    from,
    to: toAgentur,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
    attachments: opts.attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  })

  if (error) {
    console.error('[mail] Agentur:', error)
    return { ok: false, error: error.message || 'E-Mail an Agentur fehlgeschlagen.' }
  }
  return { ok: true }
}

/** Bestätigung an den Absender (Lastenheft 7.1 / 7.2). */
export async function sendConfirmation(opts: {
  to: string
  name: string
  kind: 'kontakt' | 'bewerbung'
}): Promise<MailResult> {
  const resend = getResend()
  const { from } = mailConfig()

  if (!resend) {
    return { ok: true }
  }

  const isKontakt = opts.kind === 'kontakt'
  const subject = isKontakt
    ? 'Wir haben Ihre Anfrage erhalten – WERBEINSEL'
    : 'Wir haben Ihre Bewerbung erhalten – WERBEINSEL'
  const text = [
    `Hallo ${opts.name},`,
    '',
    isKontakt
      ? 'vielen Dank für Ihre Anfrage. Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.'
      : 'vielen Dank für Ihre Bewerbung. Wir melden uns zeitnah bei Ihnen.',
    '',
    'Freundliche Grüße',
    'Ihr WERBEINSEL-Team',
  ].join('\n')

  const { error } = await resend.emails.send({
    from,
    to: opts.to,
    subject,
    text,
  })

  if (error) {
    // Bestätigung ist sekundär – Agentur-Mail hat Priorität
    console.warn('[mail] Bestätigung fehlgeschlagen:', error)
    return { ok: true }
  }
  return { ok: true }
}
