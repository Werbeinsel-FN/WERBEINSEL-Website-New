import { z } from 'zod'

/** Kontaktformular */
export const kontaktSchema = z.object({
  name: z.string().min(2, 'Bitte Namen angeben.'),
  email: z.string().email('Bitte gültige E-Mail angeben.'),
  unternehmen: z.string().optional(),
  telefon: z.string().min(4, 'Bitte Telefonnummer angeben.'),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  zeitraum: z.string().optional(),
  nachricht: z.string().optional(),
  consent: z
    .union([z.literal('on'), z.literal(true), z.literal('true')])
    .refine((v) => !!v, 'Bitte der Datenschutzerklärung zustimmen.'),
})
export type KontaktInput = z.infer<typeof kontaktSchema>

/** Bewerbungsformular */
export const bewerbungSchema = z.object({
  name: z.string().min(2, 'Bitte Namen angeben.'),
  email: z.string().email('Bitte gültige E-Mail angeben.'),
  telefon: z.string().min(4, 'Bitte Telefonnummer angeben.'),
  position: z.string().min(1, 'Bitte Position wählen.'),
  verfuegbarAb: z.string().optional(),
  services: z.array(z.string()).optional(),
  portfolio: z.union([z.literal(''), z.string().url('Bitte gültige URL angeben.')]).optional(),
  nachricht: z.string().optional(),
  consent: z
    .union([z.literal('on'), z.literal(true), z.literal('true')])
    .refine((v) => !!v, 'Bitte der Datenschutzerklärung zustimmen.'),
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
