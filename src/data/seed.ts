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
  telefon: '+49 (0) 123 456 789',
  email: 'info@werbeinsel.de',
  whatsapp: '+49123456789',
  adresse: {
    strasse: 'Musterstraße 123',
    plz: '12345',
    ort: 'Musterstadt',
  },
  socials: [
    { plattform: 'Instagram', url: 'https://instagram.com/' },
    { plattform: 'Facebook', url: 'https://facebook.com/' },
    { plattform: 'TikTok', url: 'https://tiktok.com/' },
  ],
  firma: 'WERBEINSEL',
  url: 'https://werbeinsel.de',
}

export const footer = {
  tagline: 'Ihre Agentur für klassische Werbung und moderne Sichtbarkeit.',
  spalten: [
    {
      titel: 'Navigation',
      links: [
        { label: 'Services', url: '/leistungen/plakatwerbung' },
        { label: 'Plakatwerbung', url: '/leistungen/plakatwerbung' },
        { label: 'Folierung', url: '/leistungen/folierung' },
        { label: 'Foto & Video', url: '/leistungen/foto-video' },
        { label: 'Grafikdesign', url: '/leistungen/grafikdesign' },
        { label: 'Social Media', url: '/leistungen/social-media' },
        { label: 'Jobs', url: '/jobs' },
        { label: 'Kontakt', url: '/kontakt' },
      ],
    },
    {
      titel: 'Rechtliches',
      links: [
        { label: 'Impressum', url: '/impressum' },
        { label: 'Datenschutz', url: '/datenschutz' },
        { label: 'Jobs', url: '/jobs' },
      ],
    },
  ],
  rechtslinks: [
    { label: 'Impressum', url: '/impressum' },
    { label: 'Datenschutz', url: '/datenschutz' },
  ],
  socials: [
    { plattform: 'Instagram', url: 'https://instagram.com/' },
    { plattform: 'Facebook', url: 'https://facebook.com/' },
    { plattform: 'TikTok', url: 'https://tiktok.com/' },
  ],
}

export const home = {
  hero: {
    blockType: 'hero' as const,
    variante: 'bildKarte' as const,
    titel: 'IHRE WERBUNG. UNSER HANDWERK.',
    untertitel: 'Plakat. Folie. Digital. Sichtbarkeit für Marken in der Region.',
    buttons: [
      { label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' as const },
      { label: 'Termin vereinbaren', url: '/kontakt', stil: 'secondary' as const },
    ],
  },
  about: {
    blockType: 'textblock' as const,
    ueberschrift: 'IHRE AGENTUR FÜR KLASSISCHE WERBUNG',
    text: 'Wir planen, gestalten und produzieren Werbung, die im Alltag wirkt – klar, präsent und nah an Ihrer Marke.\n\nVon Plakatflächen über Folierung bis zu Foto, Video und Social Content: ein Partner für Sichtbarkeit in der Region Friedrichshafen / Bodensee.',
  },
  services: {
    blockType: 'servicesSlider' as const,
    ueberschrift: 'WAS WIR MACHEN',
    items: [
      {
        titel: 'Plakatwerbung',
        kurztext: 'auffällig, präsent, wirkungsvoll.',
        link: '/leistungen/plakatwerbung',
      },
      {
        titel: 'Folierung & Beschriftung',
        kurztext: 'Fahrzeuge und Flächen, die mitfahren.',
        link: '/leistungen/folierung',
      },
      {
        titel: 'Foto & Video',
        kurztext: 'Motive und Clips mit Haltung.',
        link: '/leistungen/foto-video',
      },
      {
        titel: 'Grafikdesign',
        kurztext: 'Vom Motiv bis zum Erscheinungsbild.',
        link: '/leistungen/grafikdesign',
      },
      {
        titel: 'Social Media',
        kurztext: 'Content, der sichtbar bleibt.',
        link: '/leistungen/social-media',
      },
    ],
  },
  referenzen: {
    blockType: 'referenzSlider' as const,
    ueberschrift: 'UNSERE ARBEITEN',
    untertitel: 'Von Fahrzeugbeschriftung bis Großflächenplakat – Ihre Marke im Mittelpunkt.',
    items: [
      { titel: 'Großfläche Innenstadt', kategorie: 'Plakat' },
      { titel: 'Fahrzeugflotte', kategorie: 'Folierung' },
      { titel: 'Storefront Branding', kategorie: 'Beschriftung' },
      { titel: 'Kampagnenmotiv', kategorie: 'Grafik' },
      { titel: 'Event Visibility', kategorie: 'Plakat' },
    ],
  },
  kunden: {
    blockType: 'marquee' as const,
    ueberschrift: 'UNSERE KUNDEN',
    untertitel: 'Von Kultur bis Industrie – Marken, die in der Region sichtbar sein wollen.',
    names: [
      'MENSCH & NATUR',
      'STADTWERKE',
      'LANDRATSAMT',
      'LIVING-RAUM',
      'BODENSEE EVENTS',
      'KULTURFORUM',
      'OPEN AIR',
      'MESSE REGION',
      'SPORTCLUB',
      'GASTRO GRUPPE',
    ],
  },
  testimonials: {
    blockType: 'testimonialsBlock' as const,
    items: [
      {
        zitat:
          'Exzellente Standortwahl und perfekte Ausführung. Unsere Markenbekanntheit ist durch die strategisch platzierten Plakate enorm gestiegen. Absolut empfehlenswert!',
        name: 'Gerold Müller',
        rolle: 'Bodensee Events AG',
      },
      {
        zitat:
          'Von der Idee bis zur Montage alles aus einer Hand – klar, schnell und sichtbar auf der Straße.',
        name: 'Sandra Keller',
        rolle: 'Marketingleitung (Platzhalter)',
      },
      {
        zitat:
          'Professionelle Beratung und Umsetzung. Genau die Präsenz, die wir für unsere Kampagne gebraucht haben.',
        name: 'Thomas Berger',
        rolle: 'Geschäftsführung (Platzhalter)',
      },
    ],
  },
  cta: {
    blockType: 'cta' as const,
    ueberschrift: 'BEREIT FÜR IHR NÄCHSTES PROJEKT?',
    text: 'Lassen Sie uns über Ihre Werbeziele sprechen. Gemeinsam machen wir Ihre Marke sichtbar.',
    button: { label: 'JETZT ANFRAGEN', url: '/kontakt' },
  },
}

export const jobs = {
  hero: {
    titel: 'WERDE TEIL DES TEAMS',
    untertitel:
      'Kreative Köpfe gesucht! Wir sind eine Werbeagentur mit Leidenschaft für mutige Kampagnen und außergewöhnliches Design.',
  },
  openingsTitle: 'HIER IST PLATZ FÜR DICH',
  formTitle: 'BEWIRB DICH JETZT',
  formSubtitle: 'Fülle das Formular aus – dauert keine 3 Minuten.',
  process: {
    ueberschrift: 'IN 4 SCHRITTEN ZUM NEUEN JOB',
    schritte: [
      {
        titel: 'Bewerbung',
        kurztext: 'Formular ausfüllen und Unterlagen hochladen – unkompliziert und digital.',
      },
      {
        titel: 'Rückmeldung',
        kurztext: 'Wir prüfen deine Unterlagen und melden uns zeitnah bei dir.',
      },
      {
        titel: 'Kennenlernen',
        kurztext: 'Persönliches Gespräch – wir lernen uns kennen und prüfen, ob es passt.',
      },
      {
        titel: 'Willkommen!',
        kurztext: 'Passt alles? Dann heißen wir dich herzlich im Team willkommen.',
      },
    ],
  },
  cta: {
    ueberschrift: 'WORAUF WARTEST DU?',
    text: 'Keine passende Stelle gefunden? Schick uns eine Initiativbewerbung – wir freuen uns auf dich.',
    button: { label: 'JETZT BEWERBEN', url: '#bewerbung' },
  },
  list: [
    {
      id: 'plakatierer',
      titel: 'Plakatierer/in',
      badges: ['Vollzeit', 'Vor Ort', 'ab sofort'],
      standort: 'Friedrichshafen',
      pensum: '100 %',
      aktiv: true,
      aufgaben: [
        'Auf- und Abhängen von Plakaten im Außendienst',
        'Pflege und Dokumentation der Standorte',
        'Zusammenarbeit mit Disposition und Produktion',
      ],
      anforderungen: [
        'Zuverlässigkeit und körperliche Fitness',
        'Führerschein Klasse B',
        'Teamfähigkeit und Termintreue',
      ],
      benefits: ['Arbeit im Freien', 'Fester Ansprechpartner', 'Regionale Einsätze'],
    },
    {
      id: 'marketing-manager',
      titel: 'Marketing Manager/in',
      badges: ['Vollzeit', 'Hybrid'],
      standort: 'Friedrichshafen',
      pensum: '80–100 %',
      aktiv: true,
      aufgaben: [
        'Kundenberatung und Kampagnenplanung',
        'Koordination von Gestaltung und Umsetzung',
        'Abstimmung mit Partnern und Flächen',
      ],
      anforderungen: [
        'Erfahrung in Agentur oder Marketing',
        'Kommunikationsstärke',
        'Strukturierte Arbeitsweise',
      ],
      benefits: ['Vielfältige Projekte', 'Flache Hierarchien', 'Eigenverantwortung'],
    },
    {
      id: 'praktikum',
      titel: 'Praktikant/in',
      badges: ['Praktikum', '3–6 Monate', 'Vor Ort'],
      standort: 'Friedrichshafen',
      pensum: 'nach Absprache',
      aktiv: true,
      aufgaben: [
        'Unterstützung bei Kampagnen und Content',
        'Mitarbeit an Design- und Produktionsaufgaben',
        'Einblick in alle Agenturbereiche',
      ],
      anforderungen: [
        'Interesse an Werbung und Medien',
        'Grundkenntnisse in Design-Tools von Vorteil',
        'Motivation und Zuverlässigkeit',
      ],
      benefits: ['Mentoring', 'Praxisnah', 'Übernahmechance'],
    },
  ],
}

export const kontakt = {
  hero: {
    titel: 'PROJEKT ANFRAGEN',
    untertitel:
      'Lassen Sie uns gemeinsam Ihre Marke sichtbar machen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  },
  contactTitle: 'DIREKT KONTAKT AUFNEHMEN',
  cards: {
    telefonLabel: 'TELEFON',
    emailLabel: 'E-MAIL',
    whatsappLabel: 'WHATSAPP',
    whatsappCta: 'Chat starten',
    adresseLabel: 'ADRESSE',
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
  services: ['Außenwerbung', 'Beschriftung', 'Grafikdesign', 'Webdesign'],
  budgets: ['< 1.000€', '1.000€ - 5.000€', '5.000€ - 10.000€', '> 10.000€'],
  zeitraeume: ['sofort', 'innerhalb 1 Monat', '1-2 Monate', '> 3 Monate'],
  verfuegbarAb: ['sofort', 'in 2 Wochen', 'in 1 Monat', 'flexibel'],
}
