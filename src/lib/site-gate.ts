/**
 * Temporary public site gate (coming-soon plakat).
 * Enable with SITE_GATE_ENABLED=true and SITE_PREVIEW_PASSWORD.
 * Disable for full public launch: SITE_GATE_ENABLED=false
 */

export const SITE_GATE_COOKIE = 'wi_site_access'

export function isSiteGateEnabled(): boolean {
  const flag = process.env.SITE_GATE_ENABLED
  if (flag === 'false' || flag === '0') return false
  const hasPassword = Boolean(process.env.SITE_PREVIEW_PASSWORD?.trim())
  // Gate only works when a password exists (otherwise nobody could unlock)
  if (flag === 'true' || flag === '1') return hasPassword
  // Default: gate on when a preview password is configured
  return hasPassword
}

export function getPreviewPassword(): string {
  return process.env.SITE_PREVIEW_PASSWORD?.trim() ?? ''
}

function toBase64Url(value: string): string {
  // Edge-safe (no Buffer required)
  const bytes = new TextEncoder().encode(value)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  const b64 = btoa(binary)
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

/** Opaque cookie value derived from password + secret (not the raw password). */
export function getAccessToken(): string {
  const password = getPreviewPassword()
  const secret =
    process.env.SITE_GATE_SECRET?.trim() ||
    process.env.PAYLOAD_SECRET?.trim() ||
    'werbeinsel-gate'
  return `wi.${toBase64Url(`${password}::${secret}`)}`
}

export function isValidAccessToken(token: string | undefined): boolean {
  if (!token) return false
  try {
    return token === getAccessToken()
  } catch {
    return false
  }
}
