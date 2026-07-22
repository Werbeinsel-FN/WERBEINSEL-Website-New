import type { CollectionConfig } from 'payload'

export const Kundenlogos: CollectionConfig = {
  slug: 'kundenlogos',
  labels: { singular: 'Kundenlogo', plural: 'Kundenlogos' },
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  fields: [
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo (optional)' },
  ],
}
