import type { Block } from 'payload'

export const Kategorien: Block = {
  slug: 'kategorien',
  labels: { singular: 'Kategorien (Für wen)', plural: 'Kategorien-Blöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    {
      name: 'kategorien', type: 'array', label: 'Kategorien', minRows: 1,
      labels: { singular: 'Kategorie', plural: 'Kategorien' },
      admin: { description: 'Event-/Einrichtungstypen. Gut für Wiedererkennung UND SEO.' },
      fields: [
        { name: 'name', type: 'text', label: 'Name', required: true },
        { name: 'icon', type: 'upload', relationTo: 'media', label: 'Icon (optional)' },
        { name: 'link', type: 'text', label: 'Link/Anker (optional)' },
      ],
    },
  ],
}
