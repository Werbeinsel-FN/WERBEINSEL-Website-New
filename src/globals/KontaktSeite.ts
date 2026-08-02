import type { GlobalConfig } from 'payload'
import { revalidateGlobalAfterChange } from '../hooks/revalidate'

/** Texte der Kontakt-Seite (Kontaktdaten liegen in „Einstellungen"). */
export const KontaktSeite: GlobalConfig = {
  slug: 'kontaktSeite',
  label: 'Seite: Kontakt (Texte)',
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateGlobalAfterChange],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        { name: 'titel', type: 'textarea', label: 'Titel', required: true },
        { name: 'untertitel', type: 'textarea', label: 'Untertitel' },
      ],
    },
    { name: 'contactTitle', type: 'textarea', label: 'Überschrift Direktkontakt' },
    {
      name: 'cards',
      type: 'group',
      label: 'Karten-Labels',
      fields: [
        { name: 'telefonLabel', type: 'text', label: 'Telefon-Label' },
        { name: 'emailLabel', type: 'text', label: 'E-Mail-Label' },
        { name: 'whatsappLabel', type: 'text', label: 'WhatsApp-Label' },
        { name: 'whatsappCta', type: 'text', label: 'WhatsApp-Button' },
        { name: 'adresseLabel', type: 'text', label: 'Adresse-Label' },
      ],
    },
  ],
}
