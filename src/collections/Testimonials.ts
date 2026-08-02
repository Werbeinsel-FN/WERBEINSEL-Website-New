import type { CollectionConfig } from 'payload'
import { revalidateCollectionAfterChange } from '../hooks/revalidate'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: { singular: 'Testimonial', plural: 'Testimonials' },
  admin: { useAsTitle: 'autor', defaultColumns: ['autor', 'firma', 'reihenfolge'] },
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateCollectionAfterChange],
  },
  fields: [
    { name: 'zitat', type: 'textarea', label: 'Zitat', required: true },
    { name: 'autor', type: 'text', label: 'Autor', required: true },
    { name: 'firma', type: 'text', label: 'Firma / Rolle' },
    { name: 'reihenfolge', type: 'number', label: 'Reihenfolge', defaultValue: 0 },
  ],
}
