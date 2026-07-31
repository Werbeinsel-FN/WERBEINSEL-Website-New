import type { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Stelle', plural: 'Stellen' },
  admin: { useAsTitle: 'titel', defaultColumns: ['titel', 'aktiv', 'reihenfolge'] },
  access: { read: () => true },
  fields: [
    { name: 'titel', type: 'text', label: 'Stellentitel', required: true },
    {
      name: 'badges', type: 'array', label: 'Badges', labels: { singular: 'Badge', plural: 'Badges' },
      admin: { description: 'z. B. „Vollzeit", „Vor Ort".' },
      fields: [{ name: 'text', type: 'text', label: 'Text', required: true }],
    },
    { name: 'standort', type: 'text', label: 'Standort' },
    { name: 'pensum', type: 'text', label: 'Pensum' },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Kurzintro',
      admin: { description: 'Kurzer Text über der Aufgabenliste.' },
    },
    {
      name: 'aufgaben', type: 'array', label: 'Aufgaben',
      fields: [{ name: 'punkt', type: 'text', label: 'Aufgabe', required: true }],
    },
    {
      name: 'anforderungen', type: 'array', label: 'Anforderungen',
      fields: [{ name: 'punkt', type: 'text', label: 'Anforderung', required: true }],
    },
    {
      name: 'benefits', type: 'array', label: 'Benefits',
      fields: [{ name: 'punkt', type: 'text', label: 'Benefit', required: true }],
    },
    { name: 'aktiv', type: 'checkbox', label: 'Aktiv (sichtbar)', defaultValue: true },
    { name: 'reihenfolge', type: 'number', label: 'Reihenfolge', defaultValue: 0 },
  ],
}
