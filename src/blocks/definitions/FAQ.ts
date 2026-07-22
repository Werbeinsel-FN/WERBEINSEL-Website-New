import type { Block } from 'payload'

/** FAQ-Block – im Frontend zusätzlich als FAQPage-JSON-LD (Schema.org) ausgeben. */
export const FAQ: Block = {
  slug: 'faq',
  labels: { singular: 'FAQ', plural: 'FAQ-Blöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift', defaultValue: 'Häufige Fragen' },
    {
      name: 'fragen', type: 'array', label: 'Fragen', minRows: 1,
      labels: { singular: 'Frage', plural: 'Fragen' },
      fields: [
        { name: 'frage', type: 'text', label: 'Frage', required: true },
        { name: 'antwort', type: 'textarea', label: 'Antwort', required: true },
      ],
    },
  ],
}
