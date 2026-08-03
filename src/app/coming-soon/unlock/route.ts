import { NextResponse } from 'next/server'
import {
  SITE_GATE_COOKIE,
  getAccessToken,
  getPreviewPassword,
  isSiteGateEnabled,
} from '@/lib/site-gate'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  if (!isSiteGateEnabled()) {
    return NextResponse.json({ ok: true, unlocked: true })
  }

  const password = getPreviewPassword()
  if (!password) {
    return NextResponse.json(
      { ok: false, error: 'Zugang ist nicht konfiguriert.' },
      { status: 503 },
    )
  }

  let body: { password?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const submitted = typeof body.password === 'string' ? body.password.trim() : ''
  if (!submitted || submitted !== password) {
    return NextResponse.json({ ok: false, error: 'Falsches Passwort.' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true, unlocked: true })
  response.cookies.set(SITE_GATE_COOKIE, getAccessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 days
  })
  return response
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true, locked: true })
  response.cookies.set(SITE_GATE_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
  return response
}
