import type { Block } from 'payload'

export const OnlineKampagnen: Block = {
  slug: 'onlineKampagnen',
  labels: { singular: 'Online-Kampagnen', plural: 'Online-Kampagnen-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'untertitel', type: 'textarea', label: 'Untertitel' },
    {
      name: 'items',
      type: 'array',
      label: 'Karten',
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        {
          name: 'icon',
          type: 'select',
          label: 'Grafik',
          options: [
            { label: 'Zielgruppe', value: 'zielgruppe' },
            { label: 'Motive', value: 'motive' },
            { label: 'Auswertung', value: 'auswertung' },
          ],
        },
        { name: 'text', type: 'textarea', label: 'Beschreibung' },
      ],
    },
  ],
}
