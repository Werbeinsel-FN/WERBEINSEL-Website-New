import type { Block } from 'payload'

export const Kanaele: Block = {
  slug: 'kanaele',
  labels: { singular: 'Kanäle', plural: 'Kanäle-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'untertitel', type: 'textarea', label: 'Untertitel' },
    {
      name: 'items',
      type: 'array',
      label: 'Kanäle',
      minRows: 1,
      fields: [
        { name: 'titel', type: 'text', label: 'Name', required: true },
        {
          name: 'icon',
          type: 'select',
          label: 'Icon',
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Google', value: 'google' },
            { label: 'YouTube', value: 'youtube' },
          ],
        },
        { name: 'text', type: 'textarea', label: 'Beschreibung' },
      ],
    },
  ],
}
