import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

/*
 * Braucht eine eigene Testdatenbank (in der CI ein Postgres-Container, siehe ci.yml).
 * Ohne DATABASE_URL wird der Test übersprungen. Zeigt DATABASE_URL auf einen anderen
 * Rechner als localhost, bricht der Test ab: nie gegen die Produktionsdatenbank testen.
 */
const databaseUrl = process.env.DATABASE_URL

function assertLocalDatabase(url: string) {
  const host = new URL(url).hostname
  if (!['localhost', '127.0.0.1', '::1', '[::1]'].includes(host)) {
    throw new Error(
      `DB-Test abgebrochen: DATABASE_URL zeigt auf „${host}“. Erlaubt ist nur eine lokale Testdatenbank.`,
    )
  }
}

let payload: Payload

describe.skipIf(!databaseUrl)('API', () => {
  beforeAll(async () => {
    assertLocalDatabase(databaseUrl!)
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('fetches users', async () => {
    const users = await payload.find({
      collection: 'users',
    })
    expect(users).toBeDefined()
  })
})
