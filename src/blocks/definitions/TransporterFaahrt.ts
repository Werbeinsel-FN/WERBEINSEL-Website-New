import type { Block } from 'payload'

export const TransporterFaahrt: Block = {
  slug: 'transporterFaahrt',
  labels: { singular: 'Transporter fährt sowieso', plural: 'Transporter-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'text', type: 'textarea', label: 'Lead-Text' },
    {
      name: 'punkte',
      type: 'array',
      label: 'Punkte',
      minRows: 1,
      maxRows: 3,
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        { name: 'text', type: 'textarea', label: 'Text' },
      ],
    },
  ],
}
