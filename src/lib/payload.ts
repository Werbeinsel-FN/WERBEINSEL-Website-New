import type { Payload } from 'payload'

/**
 * Sichere Payload-Instanz: ohne DATABASE_URL null zurückgeben,
 * damit das Frontend mit Seed-Inhalten offline lauffähig bleibt.
 */
export async function getPayloadSafe(): Promise<Payload | null> {
  if (!process.env.DATABASE_URL) {
    return null
  }
  try {
    const { getPayload } = await import('payload')
    const config = (await import('@payload-config')).default
    return await getPayload({ config })
  } catch (err) {
    console.warn('Payload nicht verfügbar – Seed-Fallback.', err)
    return null
  }
}
