import type { Block } from 'payload'

export const Reichweite: Block = {
  slug: 'reichweite',
  labels: { singular: 'Reichweite / Städte', plural: 'Reichweite-Blöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'text', type: 'textarea', label: 'Einleitungstext' },
    {
      name: 'staedte', type: 'array', label: 'Städte', minRows: 1,
      labels: { singular: 'Stadt', plural: 'Städte' },
      admin: { description: 'Als echte Textliste ausgeben (SEO). Real halten.' },
      fields: [
        { name: 'name', type: 'text', label: 'Stadt', required: true },
        { name: 'region', type: 'text', label: 'Region (optional)' },
      ],
    },
    { name: 'karteZeigen', type: 'checkbox', label: 'Karte anzeigen', defaultValue: false, admin: { description: 'DSGVO: OpenStreetMap/Leaflet, kein Google Maps.' } },
  ],
}
