import type { Block } from 'payload'

export const EinMotiv: Block = {
  slug: 'einMotiv',
  labels: { singular: 'Ein Motiv / Formate', plural: 'Ein-Motiv-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'text', type: 'textarea', label: 'Lead-Text' },
    {
      name: 'items',
      type: 'array',
      label: 'Formate',
      minRows: 1,
      maxRows: 4,
      fields: [
        { name: 'label', type: 'text', label: 'Label', required: true },
        {
          name: 'icon',
          type: 'select',
          label: 'Grafik',
          required: true,
          options: [
            { label: 'Visitenkarte', value: 'visitenkarte' },
            { label: 'Social-Post', value: 'social' },
            { label: 'Reel', value: 'reel' },
            { label: 'Plakat', value: 'plakat' },
          ],
        },
      ],
    },
  ],
}
