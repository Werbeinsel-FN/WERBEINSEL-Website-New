import type { GlobalConfig } from 'payload'

export const Einstellungen: GlobalConfig = {
  slug: 'einstellungen',
  label: 'Einstellungen (Kontakt & Social)',
  access: { read: () => true },
  fields: [
    { name: 'telefon', type: 'text', label: 'Telefon' },
    { name: 'email', type: 'text', label: 'E-Mail' },
    { name: 'whatsapp', type: 'text', label: 'WhatsApp-Nummer', admin: { description: 'Für den „Chat starten"-Deeplink.' } },
    {
      name: 'adresse', type: 'group', label: 'Adresse',
      fields: [
        { name: 'strasse', type: 'text', label: 'Straße & Nr.' },
        { name: 'plz', type: 'text', label: 'PLZ' },
        { name: 'ort', type: 'text', label: 'Ort' },
      ],
    },
    {
      name: 'socials', type: 'array', label: 'Social-Links',
      fields: [
        { name: 'plattform', type: 'text', label: 'Plattform', required: true },
        { name: 'url', type: 'text', label: 'URL', required: true },
      ],
    },
  ],
}
