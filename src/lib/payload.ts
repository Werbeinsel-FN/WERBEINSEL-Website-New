import type { Payload } from 'payload'

let cached: Payload | null | undefined
let failed = false

/**
 * Sichere Payload-Instanz: ohne DATABASE_URL oder bei Verbindungsfehler null,
 * damit das Frontend mit Seed-Inhalten offline lauffähig bleibt.
 */
export async function getPayloadSafe(): Promise<Payload | null> {
  if (!process.env.DATABASE_URL) return null
  if (failed) return null
  if (cached) return cached

  try {
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    cached = await getPayload({ config })
    return cached
  } catch (err) {
    failed = true
    console.warn('Payload nicht verfügbar – Seed-Fallback.', err)
    return null
  }
}
