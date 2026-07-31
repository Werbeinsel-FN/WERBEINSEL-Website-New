import type { Block } from 'payload'

export const MarqueeBlock: Block = {
  slug: 'marquee',
  labels: { singular: 'Kundenlaufband (Marquee)', plural: 'Marquee-Blöcke' },
  admin: { description: 'Zieht automatisch aus der Sammlung „Kundenlogos".' } as any,
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    { name: 'untertitel', type: 'textarea', label: 'Untertitel (optional)' },
  ],
}
