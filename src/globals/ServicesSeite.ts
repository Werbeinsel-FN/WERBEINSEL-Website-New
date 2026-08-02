import type { GlobalConfig } from 'payload'
import { revalidateGlobalAfterChange } from '../hooks/revalidate'

/**
 * Übersicht /services – Karten können aus Collection „Leistungen" kommen,
 * hier liegen Hero, Sektions-Titel und CTA.
 */
export const ServicesSeite: GlobalConfig = {
  slug: 'servicesSeite',
  label: 'Seite: Services (Übersicht)',
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
    { name: 'sectionTitle', type: 'text', label: 'Überschrift über den Karten' },
    {
      name: 'items',
      type: 'array',
      label: 'Leistungs-Karten',
      admin: {
        description:
          'Wenn leer, werden die ersten Einträge aus „Leistungen" genutzt. Hier steuern Sie Reihenfolge, Nr. und Kategorie-Label.',
      },
      fields: [
        { name: 'nr', type: 'text', label: 'Nr. (z. B. 01)' },
        { name: 'kategorie', type: 'text', label: 'Kategorie-Label' },
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        { name: 'kurztext', type: 'textarea', label: 'Kurztext' },
        { name: 'link', type: 'text', label: 'Link' },
        { name: 'bild', type: 'upload', relationTo: 'media', label: 'Bild' },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA',
      fields: [
        { name: 'ueberschrift', type: 'textarea', label: 'Überschrift' },
        { name: 'text', type: 'textarea', label: 'Text' },
        {
          name: 'button',
          type: 'group',
          label: 'Button',
          fields: [
            { name: 'label', type: 'text', label: 'Beschriftung' },
            { name: 'url', type: 'text', label: 'Link' },
          ],
        },
      ],
    },
  ],
}
