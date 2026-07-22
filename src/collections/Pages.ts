import type { CollectionConfig } from 'payload'
import { blocks } from '../blocks/definitions'
import { seoField } from '../fields/seo'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Seite', plural: 'Seiten' },
  admin: { useAsTitle: 'titel', defaultColumns: ['titel', 'slug', 'status'] },
  versions: { drafts: true },
  access: {
    // Öffentlich nur veröffentlichte Seiten; eingeloggte Redaktion sieht alles.
    read: ({ req }) => (req.user ? true : { status: { equals: 'veroeffentlicht' } }),
  },
  fields: [
    { name: 'titel', type: 'text', label: 'Titel', required: true },
    {
      name: 'slug', type: 'text', label: 'Slug (URL)', required: true, unique: true,
      admin: { description: 'z. B. „plakatwerbung" → /leistungen/plakatwerbung' },
    },
    {
      name: 'status', type: 'select', label: 'Status', defaultValue: 'entwurf',
      options: [
        { label: 'Entwurf', value: 'entwurf' },
        { label: 'Veröffentlicht', value: 'veroeffentlicht' },
      ],
    },
    {
      name: 'layout', type: 'blocks', label: 'Sektionen', blocks,
      admin: { description: 'Seite aus Sektions-Blöcken zusammensetzen. Reihenfolge = Anzeige auf der Seite.' },
    },
    seoField,
  ],
}
