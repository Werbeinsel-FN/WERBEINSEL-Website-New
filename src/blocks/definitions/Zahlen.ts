import type { Block } from 'payload'

export const Zahlen: Block = {
  slug: 'zahlen',
  labels: { singular: 'Zahlen-Leiste', plural: 'Zahlen-Leisten' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift (optional)' },
    {
      name: 'stats', type: 'array', label: 'Kennzahlen', minRows: 2, maxRows: 4,
      labels: { singular: 'Kennzahl', plural: 'Kennzahlen' },
      admin: { description: 'Zahlen müssen real und belegbar sein.' },
      fields: [
        { name: 'zahl', type: 'text', label: 'Zahl', required: true, admin: { description: 'z. B. „20+"' } },
        { name: 'label', type: 'text', label: 'Bezeichnung', required: true, admin: { description: 'z. B. „Jahre Erfahrung"' } },
      ],
    },
  ],
}
