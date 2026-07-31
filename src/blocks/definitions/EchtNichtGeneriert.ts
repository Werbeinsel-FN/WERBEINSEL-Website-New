import type { Block } from 'payload'

export const EchtNichtGeneriert: Block = {
  slug: 'echtNichtGeneriert',
  labels: { singular: 'Echt / nicht generiert', plural: 'Echt-Blöcke' },
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
