import type { Block } from 'payload'

export const ServicesSlider: Block = {
  slug: 'servicesSlider',
  labels: { singular: 'Leistungen-Slider (Startseite)', plural: 'Leistungen-Slider' },
  admin: { description: 'Zieht automatisch aus der Sammlung „Leistungen".' } as any,
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
  ],
}
