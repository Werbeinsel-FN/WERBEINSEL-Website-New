import type { Block } from 'payload'

export const FullService: Block = {
  slug: 'fullService',
  labels: { singular: 'Full-Service (Kette)', plural: 'Full-Service-Blöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift', required: true },
    { name: 'text', type: 'textarea', label: 'Einleitungstext' },
    {
      name: 'schritte', type: 'array', label: 'Leistungs-Schritte', minRows: 2,
      labels: { singular: 'Schritt', plural: 'Schritte' },
      admin: { description: 'Nummer (01, 02, …) wird automatisch aus der Reihenfolge erzeugt.' },
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        { name: 'text', type: 'textarea', label: 'Kurztext' },
      ],
    },
  ],
}
