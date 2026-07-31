import type { Block } from 'payload'

export const Betreuung: Block = {
  slug: 'betreuung',
  labels: { singular: 'Betreuung / Ablauf', plural: 'Betreuung-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    {
      name: 'schritte',
      type: 'array',
      label: 'Schritte',
      minRows: 1,
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        { name: 'text', type: 'textarea', label: 'Text' },
      ],
    },
  ],
}
