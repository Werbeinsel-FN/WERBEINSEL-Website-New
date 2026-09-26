/** Leistungsseiten – laut Lastenheft nur STRUKTUR (Routen + Blöcke).
 * Inhalte & Grafik folgen später (Abschnitt 6 / Phase 4 / Checkliste 14).
 * Plakatwerbung = Referenz-Vorlage mit kompletter Blockreihenfolge + Platzhaltern.
 */

export const leistungenSlugs = [
  'plakatwerbung',
  'foto-video',
  'folierung',
] as const

export type LeistungSlug = (typeof leistungenSlugs)[number]

const PH = '[Platzhalter – Inhalt folgt]'

const phSteps = (titles: string[]) =>
  titles.map((titel) => ({
    titel,
    kurztext: PH,
  }))

export const leistungen: Record<
  LeistungSlug,
  {
    titel: string
    metaDescription: string
    blocks: Array<Record<string, unknown> & { blockType: string }>
  }
> = {
  plakatwerbung: {
    titel: 'Plakatwerbung',
    metaDescription: 'Plakatwerbung – WERBEINSEL. (Struktur / Inhalte folgen)',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'PLAKATWERBUNG',
        untertitel: PH,
        buttons: [],
      },
      {
        blockType: 'zahlen',
        dunkel: true,
        stats: [
          { zahl: '–', label: 'Kennzahl 1 (folgt)' },
          { zahl: '–', label: 'Kennzahl 2 (folgt)' },
          { zahl: '–', label: 'Kennzahl 3 (folgt)' },
          { zahl: '–', label: 'Kennzahl 4 (folgt)' },
        ],
      },
      {
        blockType: 'kategorien',
        gelb: true,
        ueberschrift: 'KATEGORIEN',
        text: PH,
        kategorien: [{ name: 'Platzhalter A' }, { name: 'Platzhalter B' }, { name: 'Platzhalter C' }],
      },
      {
        blockType: 'usp',
        eyebrow: 'USP',
        ueberschrift: 'ÜBERSCHRIFT FOLGT',
        text: PH,
        belegpunkte: [
          { titel: 'Punkt 1', text: PH },
          { titel: 'Punkt 2', text: PH },
          { titel: 'Punkt 3', text: PH },
        ],
      },
      {
        blockType: 'fullService',
        eyebrow: 'FULL-SERVICE',
        ueberschrift: 'ALLES AUS EINER HAND',
        text: PH,
        schritte: [
          { titel: 'Schritt 1', text: PH },
          { titel: 'Schritt 2', text: PH },
          { titel: 'Schritt 3', text: PH },
          { titel: 'Schritt 4', text: PH },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: "SO LÄUFT'S",
        schritte: phSteps(['Schritt 1', 'Schritt 2', 'Schritt 3']),
      },
      {
        blockType: 'referenzSlider',
        ueberschrift: 'REFERENZEN',
        untertitel: PH,
        kategorie: 'plakat',
      },
      {
        blockType: 'reichweite',
        ueberschrift: 'REICHWEITE',
        text: PH,
        staedte: [{ name: 'Friedrichshafen' }, { name: 'Platzhalter' }],
        karteZeigen: false,
      },
      {
        blockType: 'formateMaterial',
        ueberschrift: 'FORMATE UND MATERIAL',
        formate: [
          { name: 'Format 1', beschreibung: PH },
          { name: 'Format 2', beschreibung: PH },
        ],
      },
      {
        blockType: 'faq',
        ueberschrift: 'Häufige Fragen',
        fragen: [
          { frage: 'Platzhalter-Frage 1?', antwort: PH },
          { frage: 'Platzhalter-Frage 2?', antwort: PH },
        ],
      },
      {
        blockType: 'cta',
        ueberschrift: 'NÄCHSTER SCHRITT',
        text: PH,
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },

  'foto-video': {
    titel: 'Foto und Video',
    metaDescription: 'Foto und Video – WERBEINSEL. (Struktur / Inhalte folgen)',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'FOTO UND VIDEO',
        untertitel: PH,
        buttons: [],
      },
      {
        blockType: 'referenzSlider',
        ueberschrift: 'REFERENZEN',
        untertitel: PH,
        kategorie: 'foto',
      },
      {
        blockType: 'textblock',
        ueberschrift: 'Echt',
        text: PH,
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHR SHOOTING',
        schritte: phSteps(['Briefing', 'Shooting', 'Auswahl', 'Übergabe']),
      },
      {
        blockType: 'textblock',
        ueberschrift: 'Leistungen',
        text: PH,
      },
      {
        blockType: 'cta',
        ueberschrift: 'NÄCHSTER SCHRITT',
        text: PH,
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },

  folierung: {
    titel: 'Folierung',
    metaDescription: 'Folierung – WERBEINSEL. (Struktur / Inhalte folgen)',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'FOLIERUNG',
        untertitel: PH,
        buttons: [],
      },
      {
        blockType: 'referenzSlider',
        ueberschrift: 'REFERENZEN',
        untertitel: PH,
        kategorie: 'folierung',
      },
      {
        blockType: 'textblock',
        ueberschrift: 'Fährt sowieso',
        text: PH,
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHRE FOLIERUNG',
        schritte: phSteps(['Aufmaß', 'Druck', 'Verklebung', 'Abnahme']),
      },
      {
        blockType: 'textblock',
        ueberschrift: 'Leistungen',
        text: PH,
      },
      {
        blockType: 'cta',
        ueberschrift: 'NÄCHSTER SCHRITT',
        text: PH,
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },
}
