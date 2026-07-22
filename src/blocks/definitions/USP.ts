import type { Block } from 'payload'

export const USP: Block = {
  slug: 'usp',
  labels: { singular: 'USP / Vorteil (z. B. Genehmigung)', plural: 'USP-Blöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile', admin: { description: 'z. B. „IHR ENTSCHEIDENDER VORTEIL"' } },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift', required: true },
    { name: 'text', type: 'richText', label: 'Text' },
    {
      name: 'belegpunkte', type: 'array', label: 'Belegpunkte', maxRows: 3,
      labels: { singular: 'Belegpunkt', plural: 'Belegpunkte' },
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        { name: 'text', type: 'textarea', label: 'Text', required: true },
      ],
    },
  ],
}
