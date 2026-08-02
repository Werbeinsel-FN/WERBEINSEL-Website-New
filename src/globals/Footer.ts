import type { GlobalConfig } from 'payload'
import { revalidateGlobalAfterChange } from '../hooks/revalidate'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateGlobalAfterChange],
  },
  fields: [
    { name: 'tagline', type: 'text', label: 'Tagline' },
    {
      name: 'spalten', type: 'array', label: 'Spalten', maxRows: 4,
      fields: [
        { name: 'titel', type: 'text', label: 'Spaltentitel', required: true },
        {
          name: 'links', type: 'array', label: 'Links',
          fields: [
            { name: 'label', type: 'text', label: 'Beschriftung', required: true },
            { name: 'url', type: 'text', label: 'Link', required: true },
          ],
        },
      ],
    },
    {
      name: 'rechtslinks', type: 'array', label: 'Rechts-Links (Impressum/Datenschutz)',
      fields: [
        { name: 'label', type: 'text', label: 'Beschriftung', required: true },
        { name: 'url', type: 'text', label: 'Link', required: true },
      ],
    },
  ],
}
