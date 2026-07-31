import type { GlobalConfig } from 'payload'

export const Impressum: GlobalConfig = {
  slug: 'impressum',
  label: 'Seite: Impressum',
  access: { read: () => true },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [{ name: 'titel', type: 'text', label: 'Titel', required: true, defaultValue: 'IMPRESSUM' }],
    },
    { name: 'angabenTitel', type: 'textarea', label: 'Angaben-Überschrift' },
    { name: 'firma', type: 'text', label: 'Firma' },
    {
      name: 'adresse',
      type: 'array',
      label: 'Adresszeilen',
      fields: [{ name: 'zeile', type: 'text', label: 'Zeile', required: true }],
    },
    { name: 'kontaktTitel', type: 'text', label: 'Kontakt-Überschrift' },
    {
      name: 'kontaktZeilen',
      type: 'array',
      label: 'Kontaktzeilen',
      fields: [{ name: 'zeile', type: 'text', label: 'Zeile', required: true }],
    },
    { name: 'ustTitel', type: 'text', label: 'USt-Überschrift' },
    { name: 'ustText', type: 'textarea', label: 'USt-Text' },
    { name: 'verantwortlichTitel', type: 'textarea', label: 'Verantwortlich-Überschrift' },
    {
      name: 'verantwortlichZeilen',
      type: 'array',
      label: 'Verantwortlich-Zeilen',
      fields: [{ name: 'zeile', type: 'text', label: 'Zeile', required: true }],
    },
    { name: 'disclaimerTitel', type: 'textarea', label: 'Disclaimer-Überschrift' },
    {
      name: 'disclaimerAbschnitte',
      type: 'array',
      label: 'Disclaimer-Abschnitte',
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        {
          name: 'absatze',
          type: 'array',
          label: 'Absätze',
          fields: [{ name: 'text', type: 'textarea', label: 'Absatz', required: true }],
        },
      ],
    },
  ],
}
