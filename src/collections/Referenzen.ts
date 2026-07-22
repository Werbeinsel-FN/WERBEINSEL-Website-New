import type { CollectionConfig } from 'payload'

export const Referenzen: CollectionConfig = {
  slug: 'referenzen',
  labels: { singular: 'Referenz', plural: 'Referenzen' },
  admin: { useAsTitle: 'titel', defaultColumns: ['titel', 'kategorie', 'reihenfolge'] },
  access: { read: () => true },
  fields: [
    { name: 'titel', type: 'text', label: 'Titel', required: true },
    { name: 'bild', type: 'upload', relationTo: 'media', label: 'Bild', required: true },
    {
      name: 'kategorie', type: 'select', label: 'Kategorie', required: true,
      options: [
        { label: 'Plakat', value: 'plakat' },
        { label: 'Foto & Video', value: 'foto' },
        { label: 'Grafik', value: 'grafik' },
        { label: 'Folierung', value: 'folierung' },
        { label: 'Social', value: 'social' },
      ],
    },
    { name: 'reihenfolge', type: 'number', label: 'Reihenfolge', defaultValue: 0 },
  ],
}
