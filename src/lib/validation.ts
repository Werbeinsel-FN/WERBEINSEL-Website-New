import { z } from 'zod'

/** FormData liefert oft null – Zod sonst „Invalid input“. */
function asString(v: unknown): string {
  if (typeof v !== 'string') return ''
  return v.trim()
}

function asStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  return v.filter((x): x is string => typeof x === 'string' && x.length > 0)
}

function asConsent(v: unknown): boolean {
  return v === 'on' || v === true || v === 'true'
}

/** Kontaktformular */
export const kontaktSchema = z.object({
  name: z.preprocess(asString, z.string().min(2, 'Bitte Namen angeben.')),
  email: z.preprocess(asString, z.string().email('Bitte gültige E-Mail angeben.')),
  unternehmen: z.preprocess(asString, z.string().optional()),
  telefon: z.preprocess(asString, z.string().min(4, 'Bitte Telefonnummer angeben.')),
  services: z.preprocess(asStringArray, z.array(z.string()).optional()),
  budget: z.preprocess(asString, z.string().optional()),
  zeitraum: z.preprocess(asString, z.string().optional()),
  nachricht: z.preprocess(asString, z.string().optional()),
  consent: z.preprocess(asConsent, z.literal(true, { error: 'Bitte der Datenschutzerklärung zustimmen.' })),
})
export type KontaktInput = z.infer<typeof kontaktSchema>

/** Bewerbungsformular */
export const bewerbungSchema = z.object({
  name: z.preprocess(asString, z.string().min(2, 'Bitte Namen angeben.')),
  email: z.preprocess(asString, z.string().email('Bitte gültige E-Mail angeben.')),
  telefon: z.preprocess(asString, z.string().min(4, 'Bitte Telefonnummer angeben.')),
  position: z.preprocess(asString, z.string().min(1, 'Bitte Position wählen.')),
  verfuegbarAb: z.preprocess(asString, z.string().optional()),
  services: z.preprocess(asStringArray, z.array(z.string()).optional()),
  portfolio: z.preprocess(asString, z.union([
    z.literal(''),
    z.string().url('Bitte gültige URL angeben.'),
  ]).optional()),
  nachricht: z.preprocess(asString, z.string().optional()),
  consent: z.preprocess(asConsent, z.literal(true, { error: 'Bitte der Datenschutzerklärung zustimmen.' })),
})
export type BewerbungInput = z.infer<typeof bewerbungSchema>

export const BEWERBUNG_MAX_BYTES = 10 * 1024 * 1024
export const BEWERBUNG_ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
  'application/zip',
  'application/x-zip-compressed',
] as const

/** Einheitliche Feldfehler aus Zod (Zod 4 kompatibel). */
export function zodFieldErrors(
  error: z.ZodError,
): Record<string, string[] | undefined> {
  const out: Record<string, string[]> = {}
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? 'form')
    if (!out[key]) out[key] = []
    const msg = issue.message && issue.message !== 'Invalid input'
      ? issue.message
      : 'Bitte prüfen.'
    out[key].push(msg)
  }
  return out
}
