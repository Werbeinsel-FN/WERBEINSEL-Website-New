import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation (Header)',
  access: { read: () => true },
  fields: [
    {
      name: 'items', type: 'array', label: 'Menüpunkte',
      fields: [
        { name: 'label', type: 'text', label: 'Beschriftung', required: true },
        { name: 'url', type: 'text', label: 'Link', required: true },
        {
          name: 'children', type: 'array', label: 'Untermenü (optional)',
          fields: [
            { name: 'label', type: 'text', label: 'Beschriftung', required: true },
            { name: 'url', type: 'text', label: 'Link', required: true },
          ],
        },
      ],
    },
  ],
}
