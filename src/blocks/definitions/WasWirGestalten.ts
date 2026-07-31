import type { Block } from 'payload'

export const WasWirGestalten: Block = {
  slug: 'wasWirGestalten',
  labels: { singular: 'Was wir gestalten', plural: 'Was-wir-gestalten-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    {
      name: 'items',
      type: 'array',
      label: 'Karten',
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        {
          name: 'icon',
          type: 'select',
          label: 'Grafik',
          options: [
            { label: 'Logo', value: 'logo' },
            { label: 'Druckvorlagen', value: 'druck' },
            { label: 'Social-Grafiken', value: 'social' },
            { label: 'Plakat & Großfläche', value: 'plakat' },
          ],
        },
        { name: 'text', type: 'textarea', label: 'Beschreibung' },
      ],
    },
  ],
}
