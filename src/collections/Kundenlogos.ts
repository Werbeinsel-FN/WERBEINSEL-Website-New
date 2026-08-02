import type { CollectionConfig } from 'payload'
import { revalidateCollectionAfterChange } from '../hooks/revalidate'

export const Kundenlogos: CollectionConfig = {
  slug: 'kundenlogos',
  labels: { singular: 'Kundenlogo', plural: 'Kundenlogos' },
  admin: { useAsTitle: 'name' },
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateCollectionAfterChange],
  },
  fields: [
    { name: 'name', type: 'text', label: 'Name', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media', label: 'Logo (optional)' },
  ],
}
