import type { GlobalConfig } from 'payload'
import { revalidateGlobalAfterChange } from '../hooks/revalidate'

export const Einstellungen: GlobalConfig = {
  slug: 'einstellungen',
  label: 'Einstellungen (Kontakt & Social)',
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateGlobalAfterChange],
  },
  fields: [
    { name: 'firma', type: 'text', label: 'Firmenname', defaultValue: 'WERBEINSEL' },
    {
      name: 'url',
      type: 'text',
      label: 'Website-URL',
      admin: { description: 'z. B. https://werbeinsel.de – für SEO/JSON-LD.' },
    },
    { name: 'telefon', type: 'text', label: 'Telefon' },
    { name: 'email', type: 'text', label: 'E-Mail' },
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
    {
      name: 'formServices',
      type: 'array',
      label: 'Kontaktformular: Leistungen (Chips)',
      fields: [{ name: 'label', type: 'text', label: 'Label', required: true }],
    },
    {
      name: 'formBudgets',
      type: 'array',
      label: 'Kontaktformular: Budgets',
      fields: [{ name: 'label', type: 'text', label: 'Label', required: true }],
    },
    {
      name: 'formZeitraeume',
      type: 'array',
      label: 'Kontaktformular: Zeiträume',
      fields: [{ name: 'label', type: 'text', label: 'Label', required: true }],
    },
    {
      name: 'formVerfuegbarAb',
      type: 'array',
      label: 'Bewerbung: Verfügbar ab',
      fields: [{ name: 'label', type: 'text', label: 'Label', required: true }],
    },
  ],
}
