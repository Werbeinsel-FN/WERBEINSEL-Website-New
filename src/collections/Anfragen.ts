import type { CollectionConfig } from 'payload'

/**
 * Optional: speichert Formular-Einsendungen zusätzlich zur E-Mail.
 * DSGVO: Aufbewahrungsfrist definieren und in der Datenschutzerklärung abbilden.
 */
export const Anfragen: CollectionConfig = {
  slug: 'anfragen',
  labels: { singular: 'Anfrage', plural: 'Anfragen' },
  admin: {
    useAsTitle: 'typ',
    defaultColumns: ['typ', 'createdAt'],
    group: 'System',
    description:
      'Formular-Einsendungen (Kontakt/Bewerbung). DSGVO: Aufbewahrungsfrist festlegen und regelmäßig löschen.',
  },
  access: {
    read: ({ req }) => Boolean(req.user),
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'typ', type: 'select', label: 'Typ', required: true,
      options: [
        { label: 'Kontakt', value: 'kontakt' },
        { label: 'Bewerbung', value: 'bewerbung' },
      ],
    },
    { name: 'daten', type: 'json', label: 'Formulardaten' },
    { name: 'datei', type: 'upload', relationTo: 'media', label: 'Datei (Bewerbung)' },
  ],
}
