import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  labels: { singular: 'CTA (Handlungsaufruf)', plural: 'CTA-Blöcke' },
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift', required: true },
    { name: 'text', type: 'textarea', label: 'Text' },
    {
      name: 'button', type: 'group', label: 'Button',
      fields: [
        { name: 'label', type: 'text', label: 'Beschriftung', required: true, admin: { description: 'Konkret, z. B. „Kampagne anfragen".' } },
        { name: 'url', type: 'text', label: 'Link', required: true },
      ],
    },
    {
      name: 'yellow',
      type: 'checkbox',
      label: 'Gelber Hintergrund',
      defaultValue: true,
      admin: { description: 'Aus = schwarze CTA (gelbe Überschrift, weißer Text).' },
    },
  ],
}
