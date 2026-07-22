import type { Block } from 'payload'

export const FormateMaterial: Block = {
  slug: 'formateMaterial',
  labels: { singular: 'Formate & Material', plural: 'Formate-Blöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    {
      name: 'formate', type: 'array', label: 'Formate', minRows: 1,
      labels: { singular: 'Format', plural: 'Formate' },
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'beschreibung', type: 'textarea', label: 'Beschreibung' },
        { name: 'bild', type: 'upload', relationTo: 'media', label: 'Bild (optional)' },
      ],
    },
  ],
}
