import type { Field } from 'payload'

/** SEO-Feldgruppe für Seiten (Meta + Social-Vorschau). */
export const seoField: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  admin: { description: 'Suchmaschinen- und Social-Media-Vorschau.' },
  fields: [
    { name: 'metaTitle', type: 'text', label: 'Meta-Titel', admin: { description: 'Optimal ~50–60 Zeichen.' } },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta-Beschreibung',
      admin: { description: 'Optimal ~150–160 Zeichen.' },
    },
    { name: 'ogImage', type: 'upload', relationTo: 'media', label: 'Social-Vorschaubild (OG)' },
  ],
}
