import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: { singular: 'Hero', plural: 'Hero-Blöcke' },
  fields: [
    {
      name: 'variante', type: 'select', label: 'Variante', defaultValue: 'bildKarte',
      options: [
        { label: 'Bild + gelbe Karte', value: 'bildKarte' },
        { label: 'Einfach (nur Text)', value: 'einfach' },
      ],
    },
    { name: 'bild', type: 'upload', relationTo: 'media', label: 'Hintergrundbild' },
    { name: 'titel', type: 'text', label: 'Titel', required: true },
    { name: 'untertitel', type: 'textarea', label: 'Untertitel' },
    {
      name: 'buttons', type: 'array', label: 'Buttons', maxRows: 2,
      labels: { singular: 'Button', plural: 'Buttons' },
      fields: [
        { name: 'label', type: 'text', label: 'Beschriftung', required: true },
        { name: 'url', type: 'text', label: 'Link', required: true },
        {
          name: 'stil', type: 'select', label: 'Stil', defaultValue: 'primary',
          options: [
            { label: 'Primär (gelb)', value: 'primary' },
            { label: 'Sekundär (weiß)', value: 'secondary' },
          ],
        },
      ],
    },
  ],
}
