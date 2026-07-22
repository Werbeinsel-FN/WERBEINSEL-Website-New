import type { Block } from 'payload'

export const ReferenzSlider: Block = {
  slug: 'referenzSlider',
  labels: { singular: 'Referenz-/Arbeiten-Slider', plural: 'Referenz-Slider' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile (optional)' },
    { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
    {
      name: 'kategorie', type: 'select', label: 'Welche Referenzen zeigen?',
      admin: { description: 'Zieht automatisch Referenzen dieser Kategorie.' },
      options: [
        { label: 'Alle', value: 'alle' },
        { label: 'Plakat', value: 'plakat' },
        { label: 'Foto & Video', value: 'foto' },
        { label: 'Grafik', value: 'grafik' },
        { label: 'Folierung', value: 'folierung' },
        { label: 'Social', value: 'social' },
      ],
      defaultValue: 'alle',
    },
  ],
}
