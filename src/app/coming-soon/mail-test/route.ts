import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getPreviewPassword, isSiteGateEnabled } from '@/lib/site-gate'
import { mailConfig, normalizeEmailAddress } from '@/lib/mail'

export const runtime = 'nodejs'

/**
 * Team-only: send a test mail via Resend and return the API result.
 * POST { password }  – same as Team-Zugang
 */
export async function POST(request: Request) {
  let body: { password?: string; to?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  if (isSiteGateEnabled()) {
    const expected = getPreviewPassword()
    if (!expected || body.password?.trim() !== expected) {
      return NextResponse.json({ ok: false, error: 'Falsches Passwort.' }, { status: 401 })
    }
  }

  const key = process.env.RESEND_API_KEY?.trim()
  if (!key) {
    return NextResponse.json(
      { ok: false, error: 'RESEND_API_KEY fehlt auf Vercel.' },
      { status: 503 },
    )
  }

  const { from, toAgentur } = mailConfig()
  const to = normalizeEmailAddress(body.to) || toAgentur || 'hallo@werbeinsel.de'

  const resend = new Resend(key)
  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject: 'WERBEINSEL Website – Mail-Test',
    text: [
      'Dies ist ein Test von der Website (Resend).',
      '',
      `Zeit: ${new Date().toISOString()}`,
      `An: ${to}`,
      `Von: ${from}`,
    ].join('\n'),
  })

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message, from, to },
      { status: 502 },
    )
  }

  return NextResponse.json({
    ok: true,
    id: data?.id ?? null,
    from,
    to,
    hint: 'In Resend Dashboard unter Emails den Status (delivered/bounced) prüfen.',
  })
}
