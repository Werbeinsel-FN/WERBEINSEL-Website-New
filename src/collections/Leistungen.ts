import type { CollectionConfig } from 'payload'
import { revalidateCollectionAfterChange } from '../hooks/revalidate'

export const Leistungen: CollectionConfig = {
  slug: 'leistungen',
  labels: { singular: 'Leistung', plural: 'Leistungen' },
  admin: { useAsTitle: 'titel', defaultColumns: ['titel', 'reihenfolge'] },
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateCollectionAfterChange],
  },
  fields: [
    { name: 'titel', type: 'text', label: 'Titel', required: true },
    { name: 'kurztext', type: 'textarea', label: 'Kurztext' },
    { name: 'bild', type: 'upload', relationTo: 'media', label: 'Bild (Hochformat)' },
    { name: 'link', type: 'text', label: 'Link zur Leistungsseite', admin: { description: 'z. B. /leistungen/plakatwerbung' } },
    { name: 'reihenfolge', type: 'number', label: 'Reihenfolge', defaultValue: 0 },
  ],
}
