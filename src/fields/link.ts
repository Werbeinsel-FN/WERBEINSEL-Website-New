import type { Field } from 'payload'

/** Wiederverwendbares Link-Feld (interner Pfad oder externe URL). */
export const linkField = (name = 'link', label = 'Link'): Field => ({
  name,
  type: 'group',
  label,
  fields: [
    { name: 'label', type: 'text', label: 'Beschriftung', required: true },
    {
      name: 'url',
      type: 'text',
      label: 'URL / Pfad',
      required: true,
      admin: { description: 'Interner Pfad (z. B. /kontakt) oder externe URL (https://…).' },
    },
    { name: 'neuesTab', type: 'checkbox', label: 'In neuem Tab öffnen', defaultValue: false },
  ],
})
