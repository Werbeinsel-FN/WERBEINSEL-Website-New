import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Medium', plural: 'Medien' },
  access: { read: () => true },
  upload: {
    // Storage-Adapter (Vercel Blob / S3 / R2) in payload.config.ts konfigurieren.
    mimeTypes: [
      'image/*',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/zip',
    ],
    imageSizes: [
      { name: 'thumbnail', width: 400 },
      { name: 'card', width: 800 },
      { name: 'hero', width: 1600 },
    ],
  },
  fields: [
    {
      name: 'alt', type: 'text', label: 'Alt-Text', required: true,
      admin: { description: 'Bildbeschreibung für Barrierefreiheit & SEO (Pflicht).' },
    },
    { name: 'caption', type: 'text', label: 'Bildunterschrift (optional)' },
  ],
}
