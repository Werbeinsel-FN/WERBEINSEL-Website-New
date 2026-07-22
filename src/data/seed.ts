/** Platzhalter-Inhalte passend zum Figma/Lastenheft – bis Payload befüllt ist. */

export const navigation = {
  items: [
    {
      label: 'Leistungen',
      url: '/leistungen/plakatwerbung',
      children: [
        { label: 'Plakatwerbung', url: '/leistungen/plakatwerbung' },
        { label: 'Foto & Video', url: '/leistungen/foto-video' },
        { label: 'Grafikdesign', url: '/leistungen/grafikdesign' },
        { label: 'Folierung', url: '/leistungen/folierung' },
        { label: 'Social Media', url: '/leistungen/social-media' },
      ],
    },
    { label: 'Jobs', url: '/jobs' },
    { label: 'Kontakt', url: '/kontakt' },
  ],
}

export const einstellungen = {
  telefon: '+49 000 0000000',
  email: 'info@werbeinsel.de',
  whatsapp: '+490000000000',
  adresse: {
    strasse: 'Musterstraße 1',
    plz: '00000',
    ort: 'Musterstadt',
  },
  socials: [
    { plattform: 'Instagram', url: 'https://instagram.com/' },
    { plattform: 'LinkedIn', url: 'https://linkedin.com/' },
    { plattform: 'Facebook', url: 'https://facebook.com/' },
  ],
  firma: 'WERBEINSEL',
  url: 'https://werbeinsel.de',
}

export const footer = {
  tagline: 'Sichtbarkeit, die bleibt.',
  spalten: [
    {
      titel: 'Navigation',
      links: [
        { label: 'Startseite', url: '/' },
        { label: 'Leistungen', url: '/leistungen/plakatwerbung' },
        { label: 'Jobs', url: '/jobs' },
        { label: 'Kontakt', url: '/kontakt' },
      ],
    },
    {
      titel: 'Rechtliches',
      links: [
        { label: 'Impressum', url: '/impressum' },
        { label: 'Datenschutz', url: '/datenschutz' },
      ],
    },
  ],
  rechtslinks: [
    { label: 'Impressum', url: '/impressum' },
    { label: 'Datenschutz', url: '/datenschutz' },
  ],
  socials: einstellungen.socials,
}

export const home = {
  hero: {
    blockType: 'hero' as const,
    variante: 'bildKarte' as const,
    titel: 'WERBEINSEL',
    untertitel: 'Außenwerbung, Design und Produktion – aus einer Hand.',
    buttons: [
      { label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' as const },
      { label: 'Leistungen entdecken', url: '/leistungen/plakatwerbung', stil: 'secondary' as const },
    ],
  },
  about: {
    blockType: 'textblock' as const,
    eyebrow: 'ÜBER UNS',
    ueberschrift: 'Wir machen Marken sichtbar.',
    text: 'WERBEINSEL plant, gestaltet und produziert Werbung, die im Alltag wirkt – von Plakatflächen über Folierung bis zu Foto, Video und Social Content. Klar, schnell und nah am Kunden.',
  },
  services: {
    blockType: 'servicesSlider' as const,
    eyebrow: 'LEISTUNGEN',
    ueberschrift: 'Was wir für Sie tun',
    items: [
      {
        titel: 'Plakatwerbung',
        kurztext: 'Flächen, Genehmigungen und Kampagnen – lokal stark sichtbar.',
        link: '/leistungen/plakatwerbung',
      },
      {
        titel: 'Foto & Video',
        kurztext: 'Motive und Clips, die Ihre Marke greifbar machen.',
        link: '/leistungen/foto-video',
      },
      {
        titel: 'Grafikdesign',
        kurztext: 'Corporate Design, Print und digitale Assets.',
        link: '/leistungen/grafikdesign',
      },
      {
        titel: 'Folierung',
        kurztext: 'Fahrzeuge, Schaufenster und Flächen – präzise verklebt.',
        link: '/leistungen/folierung',
      },
      {
        titel: 'Social Media',
        kurztext: 'Content und Kampagnen für Reichweite und Wiedererkennung.',
        link: '/leistungen/social-media',
      },
    ],
  },
  referenzen: {
    blockType: 'referenzSlider' as const,
    eyebrow: 'REFERENZEN',
    ueberschrift: 'Ausgewählte Arbeiten',
    items: [
      { titel: 'Kampagne City Light', kategorie: 'Plakat', ort: 'Musterstadt' },
      { titel: 'Fahrzeugflotte Folierung', kategorie: 'Folierung', ort: 'Region' },
      { titel: 'Brand Film Launch', kategorie: 'Foto & Video', ort: 'Studio' },
      { titel: 'Corporate Redesign', kategorie: 'Grafik', ort: 'Remote' },
    ],
  },
  kunden: {
    blockType: 'marquee' as const,
    eyebrow: 'KUNDEN',
    ueberschrift: 'Marken, mit denen wir arbeiten',
    names: [
      'Alpha GmbH',
      'Beta AG',
      'Gamma Events',
      'Delta Retail',
      'Epsilon Media',
      'Zeta Mobility',
      'Eta Food',
      'Theta Tech',
    ],
  },
  testimonials: {
    blockType: 'testimonialsBlock' as const,
    ueberschrift: 'Was Kund:innen sagen',
    items: [
      {
        zitat: 'Schnelle Abstimmung, starke Umsetzung – unsere Plakatkampagne war in wenigen Wochen live.',
        name: 'Alex Müller',
        rolle: 'Marketing, Alpha GmbH',
      },
      {
        zitat: 'Von Konzept bis Folierung alles aus einer Hand. Genau so wollten wir arbeiten.',
        name: 'Samira Khan',
        rolle: 'Geschäftsführung, Beta AG',
      },
      {
        zitat: 'Klare Kommunikation und Ergebnisse, die man auf der Straße sieht.',
        name: 'Jonas Weber',
        rolle: 'Projektleitung, Gamma Events',
      },
    ],
  },
  cta: {
    blockType: 'cta' as const,
    ueberschrift: 'Bereit für mehr Sichtbarkeit?',
    text: 'Erzählen Sie uns kurz von Ihrem Vorhaben – wir melden uns zeitnah mit einem konkreten Vorschlag.',
    button: { label: 'Kampagne anfragen', url: '/kontakt' },
  },
}

export const jobs = {
  hero: {
    titel: 'JOBS',
    untertitel: 'Werden Sie Teil von WERBEINSEL – kreativ, handfest und nah am Kunden.',
  },
  process: {
    eyebrow: 'SO BEWERBEN SIE SICH',
    ueberschrift: 'In vier Schritten',
    schritte: [
      { titel: 'Stelle wählen', kurztext: 'Offene Positionen prüfen oder Initiativbewerbung senden.' },
      { titel: 'Unterlagen hochladen', kurztext: 'Lebenslauf und optional Portfolio – PDF, JPG, PNG oder ZIP.' },
      { titel: 'Kurz vorstellen', kurztext: 'Ein paar Sätze reichen – wir freuen uns auf Sie.' },
      { titel: 'Gespräch', kurztext: 'Passt es? Dann lernen wir uns persönlich kennen.' },
    ],
  },
  cta: {
    ueberschrift: 'Keine passende Stelle?',
    text: 'Schicken Sie uns eine Initiativbewerbung – wir melden uns, sobald etwas passt.',
    button: { label: 'Initiativ bewerben', url: '#bewerbung' },
  },
  list: [
    {
      id: 'mediengestalter',
      titel: 'Mediengestalter:in Digital & Print (m/w/d)',
      badges: ['Vollzeit', 'Vor Ort', 'Sofort'],
      standort: 'Musterstadt',
      pensum: '100 %',
      aktiv: true,
      aufgaben: [
        'Gestaltung von Print- und Digitalmotiven',
        'Umsetzung von Kundenbriefings',
        'Datenaufbereitung für Produktion',
      ],
      anforderungen: [
        'Ausbildung oder Studium im Bereich Mediengestaltung',
        'Sichere Adobe-CC-Kenntnisse',
        'Teamfähigkeit und Termintreue',
      ],
      benefits: ['Moderne Tools', 'Kurze Wege', 'Eigenverantwortung'],
    },
    {
      id: 'projektleitung',
      titel: 'Projektleitung Außenwerbung (m/w/d)',
      badges: ['Vollzeit', 'Hybrid'],
      standort: 'Musterstadt / Region',
      pensum: '80–100 %',
      aktiv: true,
      aufgaben: [
        'Koordination von Plakat- und Folierungsprojekten',
        'Kundenkommunikation und Terminplanung',
        'Abstimmung mit Produktion und Montage',
      ],
      anforderungen: [
        'Erfahrung in Projektleitung oder Agentur',
        'Organisationsstärke',
        'Führerschein Klasse B von Vorteil',
      ],
      benefits: ['Verantwortung', 'Vielfältige Projekte', 'Flache Hierarchien'],
    },
    {
      id: 'praktikum',
      titel: 'Praktikum / Werkstudent:in Marketing (m/w/d)',
      badges: ['Teilzeit', 'Flexibel'],
      standort: 'Musterstadt',
      pensum: 'nach Absprache',
      aktiv: true,
      aufgaben: [
        'Unterstützung bei Social-Content und Kampagnen',
        'Recherche und Dokumentation',
        'Mitarbeit an internen Projekten',
      ],
      anforderungen: [
        'Interesse an Werbung und Medien',
        'Grundkenntnisse in Design-Tools von Vorteil',
        'Zuverlässigkeit',
      ],
      benefits: ['Einblick in alle Bereiche', 'Mentoring', 'Flexible Zeiten'],
    },
  ],
}

export const kontakt = {
  hero: {
    titel: 'PROJEKT ANFRAGEN',
    untertitel: 'Kurz beschreiben, was Sie vorhaben – wir melden uns mit dem nächsten Schritt.',
  },
  intro:
    'Ob Plakatkampagne, Folierung oder gesamtes Erscheinungsbild: Schreiben Sie uns. Je konkreter Ihr Briefing, desto schneller können wir helfen.',
  cards: {
    telefonLabel: 'Telefon',
    emailLabel: 'E-Mail',
    whatsappLabel: 'WhatsApp',
    whatsappCta: 'Chat starten',
    adresseLabel: 'Adresse',
  },
}

export const impressum = {
  hero: { titel: 'IMPRESSUM' },
  /** PLACEHOLDER – rechtlich prüfen und ersetzen */
  text: `
PLATZHALTER – bitte durch geprüften Impressumstext ersetzen.

Angaben gemäß § 5 TMG

WERBEINSEL
Musterstraße 1
00000 Musterstadt

Vertreten durch: [Name der Vertretung]

Kontakt
Telefon: ${einstellungen.telefon}
E-Mail: ${einstellungen.email}

Umsatzsteuer-ID: [USt-IdNr. eintragen]
Registereintrag: [Registergericht / HRB eintragen]

Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
[Name, Anschrift]

Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für Inhalte externer Links.
`.trim(),
}

export const datenschutz = {
  hero: { titel: 'DATENSCHUTZ' },
  /** PLACEHOLDER – rechtlich prüfen und ersetzen */
  text: `
PLATZHALTER – bitte durch geprüfte Datenschutzerklärung ersetzen.

1. Verantwortlicher
WERBEINSEL, Musterstraße 1, 00000 Musterstadt
E-Mail: ${einstellungen.email}

2. Erhebung und Speicherung personenbezogener Daten
Beim Besuch dieser Website können technisch notwendige Daten verarbeitet werden (z. B. IP-Adresse, Zeitpunkt, User-Agent). Formulareingaben (Kontakt, Bewerbung) werden zur Bearbeitung Ihrer Anfrage verarbeitet.

3. Cookies & Einwilligung
Wir setzen notwendige Cookies für den Betrieb der Website. Optionale Analyse-Cookies nur nach Ihrer Einwilligung über den Cookie-Hinweis.

4. Cloudflare Turnstile
Zum Schutz vor Spam nutzen wir Cloudflare Turnstile. Dabei können Daten an Cloudflare übermittelt werden. Details: cloudflare.com/privacypolicy.

5. E-Mail-Versand
Anfragen können per E-Mail-Dienstleister (z. B. Resend) zugestellt werden.

6. Bewerbungsunterlagen
Hochgeladene Dateien werden ausschließlich zur Bearbeitung Ihrer Bewerbung verwendet und nach Abschluss des Verfahrens gelöscht bzw. gemäß gesetzlicher Fristen aufbewahrt.

7. Ihre Rechte
Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerde bei einer Aufsichtsbehörde.

8. Stand
Dieser Text ist ein Platzhalter und ersetzt keine rechtsverbindliche Beratung.
`.trim(),
}

/** Leistungsseiten – Plakatwerbung voll, übrige als Struktur-Platzhalter */
export const leistungenSlugs = [
  'plakatwerbung',
  'foto-video',
  'grafikdesign',
  'folierung',
  'social-media',
] as const

export type LeistungSlug = (typeof leistungenSlugs)[number]

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
    metaDescription: 'Plakatwerbung mit Planung, Genehmigung und Umsetzung – WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'PLAKATWERBUNG',
        untertitel: 'Flächen finden, genehmigen, gestalten und platzieren – lokal und wirksam.',
        buttons: [{ label: 'Kampagne anfragen', url: '/kontakt', stil: 'primary' }],
      },
      {
        blockType: 'zahlen',
        eyebrow: 'AUF EINEN BLICK',
        stats: [
          { zahl: '20+', label: 'Jahre Erfahrung (Platzhalter)' },
          { zahl: '50+', label: 'Flächenpartner (Platzhalter)' },
          { zahl: '100%', label: 'Full-Service' },
        ],
      },
      {
        blockType: 'textblock',
        eyebrow: 'WARUM PLAKAT',
        ueberschrift: 'Aufmerksamkeit im echten Leben.',
        text: 'Plakatwerbung erreicht Menschen unterwegs – ohne Scrollen, ohne Adblocker. Wir kombinieren Standortwissen, Gestaltung und Produktion zu Kampagnen, die man nicht übersehen kann.',
      },
      {
        blockType: 'kategorien',
        eyebrow: 'FÜR WEN',
        ueberschrift: 'Passend zu Ihrem Anlass',
        kategorien: [
          { name: 'Events & Festivals' },
          { name: 'Handel & Filialen' },
          { name: 'Kultur & Öffentlich' },
          { name: 'Marken-Launches' },
        ],
      },
      {
        blockType: 'usp',
        eyebrow: 'IHR ENTSCHEIDENDER VORTEIL',
        ueberschrift: 'Genehmigung & Flächen aus einer Hand',
        text: 'Wir übernehmen Abstimmung mit Partnern und Behörden – damit Ihre Motive rechtzeitig und legal sichtbar werden.',
        belegpunkte: [
          {
            titel: 'Standortberatung',
            text: 'Wir empfehlen Flächen nach Zielgruppe, Laufwegen und Budget.',
          },
          {
            titel: 'Genehmigungs-Support',
            text: 'Formulare, Fristen und Nachweise – wir halten den Überblick.',
          },
          {
            titel: 'Produktion & Montage',
            text: 'Druckdaten, Qualität und Aufbau – koordiniert bis zur Live-Schaltung.',
          },
        ],
      },
      {
        blockType: 'fullService',
        eyebrow: 'FULL SERVICE',
        ueberschrift: 'Von der Idee bis zur Fläche',
        text: 'Ein Ansprechpartner für Konzept, Motiv, Druck und Placement.',
        schritte: [
          { titel: 'Briefing', text: 'Ziele, Region, Zeitraum und Budget klären.' },
          { titel: 'Konzept & Motiv', text: 'Botschaft und Gestaltung auf Distanzwirkung trimmen.' },
          { titel: 'Flächen & Genehmigung', text: 'Standorte sichern und Freigaben einholen.' },
          { titel: 'Produktion & Live', text: 'Druck, Montage und Kampagnenstart.' },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHRE PLAKATWERBUNG',
        schritte: [
          {
            titel: 'Ziele definieren',
            kurztext: 'Wir klären Zielgruppe, Region und Botschaft – kompakt und verbindlich.',
          },
          {
            titel: 'Flächen wählen',
            kurztext: 'Passende Formate und Standorte nach Reichweite und Budget.',
          },
          {
            titel: 'Motiv finalisieren',
            kurztext: 'Gestaltung und Druckdaten für maximale Lesbarkeit von Weitem.',
          },
          {
            titel: 'Live schalten',
            kurztext: 'Produktion, Montage und Kontrolle – Ihre Kampagne ist sichtbar.',
          },
        ],
      },
      {
        blockType: 'referenzSlider',
        eyebrow: 'BEISPIELE',
        ueberschrift: 'Plakat-Referenzen (Platzhalter)',
        kategorie: 'plakat',
        items: [
          { titel: 'City-Light Sommer', kategorie: 'Plakat', ort: 'Innenstadt' },
          { titel: 'Großfläche Launch', kategorie: 'Plakat', ort: 'Zufahrt' },
        ],
      },
      {
        blockType: 'reichweite',
        eyebrow: 'REGION',
        ueberschrift: 'Wo wir sichtbar machen',
        text: 'Schwerpunkt lokal und regional – Liste als Platzhalter, bitte real befüllen.',
        staedte: [
          { name: 'Musterstadt', region: 'Kerngebiet' },
          { name: 'Nachbarstadt A', region: 'Umland' },
          { name: 'Nachbarstadt B', region: 'Umland' },
        ],
        karteZeigen: false,
      },
      {
        blockType: 'formateMaterial',
        eyebrow: 'FORMATE',
        ueberschrift: 'Was wir platzieren',
        formate: [
          { name: 'City Light', beschreibung: 'Hochformat an frequentierten Wegen.' },
          { name: 'Großfläche', beschreibung: 'Maximale Wirkung an Straßen und Plätzen.' },
          { name: 'Sonderflächen', beschreibung: 'Individuelle Standorte nach Konzept.' },
        ],
      },
      {
        blockType: 'faq',
        eyebrow: 'FAQ',
        ueberschrift: 'Häufige Fragen',
        fragen: [
          {
            frage: 'Wie früh sollte ich eine Plakatkampagne planen?',
            antwort:
              'Idealerweise mehrere Wochen vor Start – je nach Genehmigung und Flächenverfügbarkeit. Platzhalter-Antwort, bitte fachlich prüfen.',
          },
          {
            frage: 'Übernehmt ihr auch die Gestaltung?',
            antwort:
              'Ja. Von der Idee bis zur druckfertigen Datei – oder wir arbeiten mit Ihren Vorlagen.',
          },
          {
            frage: 'In welchen Regionen seid ihr aktiv?',
            antwort:
              'Schwerpunkt lokal/regional. Die Städte-Liste auf dieser Seite ist ein Platzhalter.',
          },
        ],
      },
      {
        blockType: 'cta',
        ueberschrift: 'Plakatkampagne starten?',
        text: 'Kurz anfragen – wir prüfen Flächen und Timing für Ihr Vorhaben.',
        button: { label: 'Jetzt anfragen', url: '/kontakt' },
      },
    ],
  },
  'foto-video': {
    titel: 'Foto & Video',
    metaDescription: 'Foto- und Videoproduktion für Marken und Kampagnen – WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'FOTO & VIDEO',
        untertitel: 'Platzhalter: Strukturseite – Inhalte folgen.',
        buttons: [{ label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' }],
      },
      {
        blockType: 'textblock',
        eyebrow: 'LEISTUNG',
        ueberschrift: 'Bild und Bewegtbild (Platzhalter)',
        text: 'Hier folgen Angebotsbeschreibung, Packages und Referenzen für Foto- und Videoproduktion.',
      },
      {
        blockType: 'cta',
        ueberschrift: 'Dreh oder Shooting geplant?',
        text: 'Schreiben Sie uns Ihr Vorhaben – wir melden uns mit einem Vorschlag.',
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },
  grafikdesign: {
    titel: 'Grafikdesign',
    metaDescription: 'Grafikdesign und Corporate Design – WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'GRAFIKDESIGN',
        untertitel: 'Platzhalter: Strukturseite – Inhalte folgen.',
        buttons: [{ label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' }],
      },
      {
        blockType: 'textblock',
        eyebrow: 'LEISTUNG',
        ueberschrift: 'Design, das wirkt (Platzhalter)',
        text: 'Hier folgen Leistungen zu Corporate Design, Print und digitalen Assets.',
      },
      {
        blockType: 'cta',
        ueberschrift: 'Design-Projekt starten?',
        text: 'Kurz beschreiben, was Sie brauchen – wir kommen auf Sie zu.',
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },
  folierung: {
    titel: 'Folierung',
    metaDescription: 'Fahrzeug- und Flächenfolierung – WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'FOLIERUNG',
        untertitel: 'Platzhalter: Strukturseite – Inhalte folgen.',
        buttons: [{ label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' }],
      },
      {
        blockType: 'textblock',
        eyebrow: 'LEISTUNG',
        ueberschrift: 'Fahrzeuge & Flächen (Platzhalter)',
        text: 'Hier folgen Leistungen zu Fahrzeug-, Schaufenster- und Objektfolierung.',
      },
      {
        blockType: 'cta',
        ueberschrift: 'Folierung anfragen?',
        text: 'Fahrzeugtyp, Motiv und Termin – wir kümmern uns um den Rest.',
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },
  'social-media': {
    titel: 'Social Media',
    metaDescription: 'Social-Media-Content und Kampagnen – WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'SOCIAL MEDIA',
        untertitel: 'Platzhalter: Strukturseite – Inhalte folgen.',
        buttons: [{ label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' }],
      },
      {
        blockType: 'textblock',
        eyebrow: 'LEISTUNG',
        ueberschrift: 'Content & Kampagnen (Platzhalter)',
        text: 'Hier folgen Leistungen zu Content-Erstellung, Redaktion und Social Ads.',
      },
      {
        blockType: 'cta',
        ueberschrift: 'Social pushen?',
        text: 'Ziele und Kanäle skizzieren – wir schlagen ein Setup vor.',
        button: { label: 'Kontakt', url: '/kontakt' },
      },
    ],
  },
}

export const formOptions = {
  services: [
    'Außenwerbung',
    'Beschriftung',
    'Grafikdesign',
    'Webdesign',
    'Foto & Video',
    'Folierung',
    'Social Media',
  ],
  budgets: ['< 1.000€', '1.000€ – 5.000€', '5.000€ – 15.000€', '15.000€+', 'Noch offen'],
  zeitraeume: ['So schnell wie möglich', '1–3 Monate', '3–6 Monate', 'Später / flexibel'],
  verfuegbarAb: ['Sofort', 'In 2 Wochen', 'In 1 Monat', 'Später / flexibel'],
}
