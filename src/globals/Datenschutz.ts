import type { GlobalConfig } from 'payload'

export const Datenschutz: GlobalConfig = {
  slug: 'datenschutz',
  label: 'Seite: Datenschutz',
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [{ name: 'titel', type: 'text', label: 'Titel', required: true, defaultValue: 'DATENSCHUTZ' }],
    },
    {
      name: 'abschnitte',
      type: 'array',
      label: 'Abschnitte',
      fields: [
        { name: 'titel', type: 'textarea', label: 'Abschnitts-Titel', required: true },
        {
          name: 'unterabschnitte',
          type: 'array',
          label: 'Unterabschnitte',
          fields: [
            { name: 'titel', type: 'text', label: 'Titel', required: true },
            {
              name: 'text',
              type: 'textarea',
              label: 'Text',
              required: true,
              admin: { description: 'Mehrere Absätze mit Leerzeile trennen.' },
            },
          ],
        },
      ],
    },
  ],
}
