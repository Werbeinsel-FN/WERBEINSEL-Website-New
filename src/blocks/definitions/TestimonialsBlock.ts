import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonialsBlock',
  labels: { singular: 'Testimonials (Startseite)', plural: 'Testimonials-Blöcke' },
  admin: { description: 'Zieht automatisch aus der Sammlung „Testimonials".' } as any,
  fields: [
    { name: 'ueberschrift', type: 'text', label: 'Überschrift (optional)' },
  ],
}
