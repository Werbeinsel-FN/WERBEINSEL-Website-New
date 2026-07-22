/** Serverseitige Prüfung des Cloudflare-Turnstile-Tokens (Spam-Schutz, DSGVO-freundlich). */
export async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY
  // Lokal / ohne Key: Prüfung überspringen, damit Seed-Frontend nutzbar bleibt
  if (!secret) {
    if (process.env.NODE_ENV === 'production') {
      console.warn('TURNSTILE_SECRET_KEY fehlt in Production.')
    }
    return true
  }
  if (!token) return false
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  })
  const data = (await res.json()) as { success: boolean }
  return data.success === true
}
