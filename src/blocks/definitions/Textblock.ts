import type { Block } from 'payload'

export const Textblock: Block = {
  slug: 'textblock',
  labels: { singular: 'Textblock', plural: 'Textblöcke' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'text', type: 'richText', label: 'Text' },
    { name: 'bild', type: 'upload', relationTo: 'media', label: 'Bild (optional)' },
  ],
}
