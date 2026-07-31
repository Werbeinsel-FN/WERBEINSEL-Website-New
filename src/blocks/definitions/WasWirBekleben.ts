import type { Block } from 'payload'

export const WasWirBekleben: Block = {
  slug: 'wasWirBekleben',
  labels: { singular: 'Was wir bekleben', plural: 'Was-wir-bekleben-Blöcke' },
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
            { label: 'Fahrzeugbeschriftung', value: 'fahrzeug' },
            { label: 'Schaufenster', value: 'schaufenster' },
            { label: 'Schilder & Fassade', value: 'schilder' },
            { label: 'Bauzaun & Banner', value: 'bauzaun' },
          ],
        },
        { name: 'text', type: 'textarea', label: 'Beschreibung' },
      ],
    },
  ],
}
