import type { Block } from 'payload'

/**
 * Geführter Schritt-Slider „So läuft's".
 * Frontend-Logik:
 *  - Nummer automatisch aus Reihenfolge (01, 02, …)
 *  - <= 5 Schritte  -> Punkte-Anzeige
 *  - >= 6 Schritte  -> Fortschrittsbalken + Zähler „Schritt X / Y"
 *  - Ohne Foto      -> Fallback: gelbes Feld mit Zahl
 */
export const SchrittSlider: Block = {
  slug: 'schrittSlider',
  labels: { singular: "Schritt-Slider „So läuft's\"", plural: 'Schritt-Slider' },
  fields: [
    { name: 'eyebrow', type: 'text', label: 'Kleine Überzeile', admin: { description: 'z. B. „SO LÄUFT IHRE PLAKATWERBUNG"' } },
    {
      name: 'schritte', type: 'array', label: 'Schritte', minRows: 1,
      labels: { singular: 'Schritt', plural: 'Schritte' },
      admin: {
        description:
          'Reihenfolge = Anzeige. Nummer automatisch. 3–5 Schritte → Punkte, ab 6 → Fortschrittsbalken. Bewusst knapp halten.',
      },
      fields: [
        { name: 'titel', type: 'text', label: 'Titel', required: true },
        {
          name: 'kurztext', type: 'textarea', label: 'Kurztext', required: true, maxLength: 240,
          admin: { description: 'Max. 240 Zeichen (2–3 Sätze) – verhindert Textmassen.' },
        },
        {
          name: 'foto', type: 'upload', relationTo: 'media', label: 'Foto (Hochformat, optional)',
          admin: { description: 'Ohne Foto erscheint automatisch ein gelbes Feld mit der Zahl.' },
        },
      ],
    },
  ],
}
