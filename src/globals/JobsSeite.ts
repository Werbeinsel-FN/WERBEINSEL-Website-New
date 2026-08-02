import type { GlobalConfig } from 'payload'
import { revalidateGlobalAfterChange } from '../hooks/revalidate'

/** Texte der Jobs-Seite (Stellen selbst liegen in Collection „jobs"). */
export const JobsSeite: GlobalConfig = {
  slug: 'jobsSeite',
  label: 'Seite: Jobs (Texte)',
  access: { read: () => true },
  hooks: {
    afterChange: [revalidateGlobalAfterChange],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        { name: 'titel', type: 'textarea', label: 'Titel', required: true },
        { name: 'untertitel', type: 'textarea', label: 'Untertitel' },
      ],
    },
    { name: 'openingsTitle', type: 'text', label: 'Überschrift „Offene Stellen"' },
    { name: 'formTitle', type: 'text', label: 'Formular-Titel' },
    { name: 'formSubtitle', type: 'textarea', label: 'Formular-Untertitel' },
    {
      name: 'process',
      type: 'group',
      label: 'Bewerbungsprozess',
      fields: [
        { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
        {
          name: 'schritte',
          type: 'array',
          label: 'Schritte',
          maxRows: 6,
          fields: [
            { name: 'titel', type: 'text', label: 'Titel', required: true },
            { name: 'kurztext', type: 'textarea', label: 'Kurztext', required: true },
          ],
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Abschluss-CTA',
      fields: [
        { name: 'ueberschrift', type: 'text', label: 'Überschrift' },
        { name: 'text', type: 'textarea', label: 'Text' },
      ],
    },
  ],
}
