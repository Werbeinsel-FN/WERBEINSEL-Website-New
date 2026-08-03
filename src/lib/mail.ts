import { Resend } from 'resend'

export type MailResult = { ok: true } | { ok: false; error: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Clean env / form values so Resend accepts `to` / `from`. */
export function normalizeEmailAddress(raw: string | null | undefined): string | null {
  if (!raw) return null
  let value = String(raw)
    .replace(/^\uFEFF/, '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim()

  // Strip accidental wrapping quotes from Vercel/env paste
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim()
  }

  // "Name <email@x.com>" → email@x.com
  const angled = value.match(/<([^>]+)>/)
  if (angled?.[1]) value = angled[1].trim()

  // If someone pasted "EMAIL_TO_AGENTUR=hallo@..." take the part after =
  if (value.includes('=') && value.includes('@')) {
    const afterEq = value.split('=').pop()?.trim()
    if (afterEq) value = afterEq
  }

  // First address only if comma/semicolon list
  value = value.split(/[;,]/)[0]?.trim() || ''

  if (!EMAIL_RE.test(value)) return null
  return value.toLowerCase()
}

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY?.trim()
  if (!key) return null
  return new Resend(key)
}

export function mailConfig() {
  return {
    from:
      normalizeEmailAddress(process.env.EMAIL_FROM) || 'website@werbeinsel.de',
    toAgentur:
      normalizeEmailAddress(process.env.EMAIL_TO_AGENTUR) || 'hallo@werbeinsel.de',
  }
}

function humanizeResendError(message: string): string {
  const lower = message.toLowerCase()
  if (lower.includes('invalid') && lower.includes('to')) {
    return (
      'Ungültige Empfänger-Adresse. Bitte auf Vercel prüfen: EMAIL_TO_AGENTUR=hallo@werbeinsel.de ' +
      '(ohne Anführungszeichen, Leerzeichen oder Zusatztext).'
    )
  }
  if (lower.includes('verify a domain') || lower.includes('testing emails')) {
    return (
      'E-Mail-Versand blockiert: Bitte Domain „werbeinsel.de“ bei Resend verifizieren ' +
      'und EMAIL_FROM auf eine Adresse dieser Domain setzen (z. B. website@werbeinsel.de).'
    )
  }
  if (lower.includes('invalid') && lower.includes('api')) {
    return 'E-Mail-Versand fehlgeschlagen: RESEND_API_KEY ist ungültig.'
  }
  return message || 'E-Mail an Agentur fehlgeschlagen.'
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
  const replyTo = normalizeEmailAddress(opts.replyTo)

  if (!resend) {
    console.warn('[mail] RESEND_API_KEY fehlt – nur geloggt:', opts.subject)
    console.info(opts.text)
    if (process.env.NODE_ENV === 'production') {
      return {
        ok: false,
        error: 'E-Mail-Versand ist nicht konfiguriert (RESEND_API_KEY fehlt auf Vercel).',
      }
    }
    return { ok: true }
  }
  if (!toAgentur) {
    return {
      ok: false,
      error:
        'EMAIL_TO_AGENTUR ist ungültig. Bitte auf Vercel setzen: hallo@werbeinsel.de (ohne Anführungszeichen).',
    }
  }
  if (!replyTo) {
    return { ok: false, error: 'Ungültige Absender-E-Mail. Bitte prüfen Sie das Formularfeld.' }
  }

  console.info('[mail] sending to agentur', { from, to: toAgentur })

  const { error } = await resend.emails.send({
    from,
    to: [toAgentur],
    replyTo,
    subject: opts.subject,
    text: opts.text,
    attachments: opts.attachments?.map((a) => ({
      filename: a.filename,
      content: a.content,
    })),
  })

  if (error) {
    console.error('[mail] Agentur:', error)
    return { ok: false, error: humanizeResendError(error.message || '') }
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
  const to = normalizeEmailAddress(opts.to)

  if (!resend || !to) {
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
    to: [to],
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
