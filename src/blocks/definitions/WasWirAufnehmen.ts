import type { Block } from 'payload'

export const WasWirAufnehmen: Block = {
  slug: 'wasWirAufnehmen',
  labels: { singular: 'Was wir aufnehmen', plural: 'Was-wir-aufnehmen-Blöcke' },
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
            { label: 'Events', value: 'events' },
            { label: 'Social-Content', value: 'social' },
            { label: 'Image', value: 'image' },
            { label: 'Website', value: 'website' },
          ],
        },
        { name: 'text', type: 'textarea', label: 'Beschreibung' },
      ],
    },
  ],
}
