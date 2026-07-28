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
  tagline: 'Ihre Agentur für klassische Werbung\nund moderne Sichtbarkeit.',
  spalten: [
        {
          titel: 'Navigation',
          links: [
            { label: 'Services', url: '/#leistungen' },
            { label: 'Plakatierung', url: '/leistungen/plakatwerbung' },
            { label: 'Folierung', url: '/leistungen/folierung' },
            { label: 'Digitale Werbemittel', url: '/leistungen/social-media' },
            { label: 'Drucksachen', url: '/leistungen/grafikdesign' },
            { label: 'Arbeiten', url: '/#arbeiten' },
            { label: 'Prozess', url: '/leistungen/plakatwerbung' },
            { label: 'Kontakt', url: '/kontakt' },
          ],
        },
        {
          titel: 'Rechtliches',
          links: [
            { label: 'Impressum', url: '/impressum' },
            { label: 'Datenschutz', url: '/datenschutz' },
            { label: 'AGB', url: '/impressum' },
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
    bild: { url: '/images/figma/hero-bg.png', alt: 'WERBEINSEL Außenwerbung' },
    titel: 'Ihre Werbung.\nUnser\nHandwerk.',
    untertitel: 'Plakat. Folie. Digital.\nSichtbarkeit für Marken in der Region.',
    buttons: [
      { label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' as const },
      { label: 'Services ansehen', url: '#leistungen', stil: 'secondary' as const },
    ],
  },
  about: {
    blockType: 'textblock' as const,
    ueberschrift: 'Ihre Agentur für\nklassische\nWerbung',
    text: 'WERBEINSEL steht für klare Kommunikation\nund starke visuelle Präsenz.\n\nWir entwickeln, produzieren und montieren\nklassische Außenwerbung – regional verankert,\nprofessionell umgesetzt.',
  },
  services: {
    blockType: 'servicesSlider' as const,
    ueberschrift: 'Was wir machen',
    items: [
      {
        titel: 'Plakatwerbung',
        kurztext: 'Auffällig. Präsent. Wirkungsvoll.',
        link: '/leistungen/plakatwerbung',
        bild: { url: '/images/figma/service-plakat.png', alt: 'Plakatwerbung' },
      },
      {
        titel: 'Folierung &\nBeschriftung',
        kurztext: 'Fahrzeuge. Schaufenster. Fassaden.',
        link: '/leistungen/folierung',
        bild: { url: '/images/figma/service-folie.png', alt: 'Folierung & Beschriftung' },
      },
      {
        titel: 'Digitale\nWerbemittel',
        kurztext: 'Screens. Social Media. Online-Kampagnen.',
        link: '/leistungen/social-media',
        bild: { url: '/images/figma/service-digital.png', alt: 'Digitale Werbemittel' },
      },
      {
        titel: 'Drucksachen',
        kurztext: 'Flyer. Broschüren. Geschäftsausstattung.',
        link: '/leistungen/grafikdesign',
        bild: { url: '/images/figma/service-druck.png', alt: 'Drucksachen' },
      },
    ],
  },
  referenzen: {
    blockType: 'referenzSlider' as const,
    ueberschrift: 'Unsere\nArbeiten',
    untertitel:
      'Von Fahrzeugbeschriftung bis Großflächenplakat –\nIhre Marke im Mittelpunkt.',
    items: [
      { titel: 'Arbeit 1', bild: { url: '/images/figma/work-1.png', alt: 'Referenz 1' } },
      { titel: 'Arbeit 2', bild: { url: '/images/figma/work-2.png', alt: 'Referenz 2' } },
      { titel: 'Arbeit 3', bild: { url: '/images/figma/work-3.png', alt: 'Referenz 3' } },
      { titel: 'Arbeit 4', bild: { url: '/images/figma/work-4.png', alt: 'Referenz 4' } },
      { titel: 'Arbeit 5', bild: { url: '/images/figma/work-5.png', alt: 'Referenz 5' } },
      { titel: 'Arbeit 6', bild: { url: '/images/figma/work-6.png', alt: 'Referenz 6' } },
    ],
  },
  kunden: {
    blockType: 'marquee' as const,
    ueberschrift: 'Unsere Kunden',
    untertitel:
      'Von Kultur bis Industrie – Marken,\ndie in der Region sichtbar sein wollen.',
    names: [
      'STADTWERKE REGIONAL',
      'MÜLLER BÄCKEREI',
      'AUTOHAUS SCHMIDT',
      'FITNESS FIRST',
      'RESTAURANT ZUR LINDE',
      'TECHSTART GMBH',
      'MODE BOUTIQUE ANNA',
      'IMMOBILIEN PARTNER',
      'ZAHNARZT DR. WEBER',
      'SANITÄR MEYER',
      'BLUMEN PARADIES',
      'CAFÉ CENTRAL',
      'SPORT ARENA',
      'BUCHHANDLUNG LINDAU',
      'STEUERBERATER KOHL',
      'HOTEL SEEBLICK',
      'APOTHEKE AM MARKT',
      'BAUMARKT SÜDDEUTSCHLAND',
      'FAHRSCHULE MOBIL',
      'EVENTLOCATION 360',
      'OPTIK VISION',
      'WEINHANDEL BODENSEE',
      'TIERARZTPRAXIS ALLGÄU',
      'REISEBÜRO FERNWEH',
    ],
  },
  testimonials: {
    blockType: 'testimonialsBlock' as const,
    items: [
      {
        zitat:
          'Exzellente Standortwahl und perfekte Ausführung. Unsere Markenbekanntheit ist durch die strategisch platzierten Plakate enorm gestiegen. Absolut empfehlenswert!',
        name: 'Sandra Müller',
        rolle: 'Bodensee Events AG',
      },
      {
        zitat:
          'Von der Idee bis zur Montage alles aus einer Hand – klar, schnell und sichtbar auf der Straße.',
        name: 'Gerold Müller',
        rolle: 'Marketing-Leiter (Platzhalter)',
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
    ueberschrift: 'Bereit für Ihr\nnächstes Projekt?',
    text: 'Lassen Sie uns über Ihre Werbeziele sprechen.\nGemeinsam machen wir Ihre Marke sichtbar.',
    button: { label: 'JETZT ANFRAGEN', url: '/kontakt' },
  },
}

export const jobs = {
  hero: {
    titel: 'WERDE TEIL\nDES TEAMS',
    untertitel:
      'Kreative Köpfe gesucht! Wir sind eine Werbeagentur mit\nLeidenschaft für mutige Kampagnen und außergewöhnliches\nDesign.',
  },
  openingsTitle: 'HIER IST PLATZ FÜR DICH',
  formTitle: 'BEWIRB DICH JETZT',
  formSubtitle: 'Fülle das Formular aus – dauert keine 3 Minuten.',
  process: {
    ueberschrift: 'IN 4 SCHRITTEN ZUM NEUEN JOB',
    schritte: [
      {
        titel: 'Bewerbung',
        kurztext: 'Formular ausfüllen & Unterlagen hochladen',
      },
      {
        titel: 'Rückmeldung',
        kurztext: 'Wir melden uns innerhalb von 48 Stunden',
      },
      {
        titel: 'Kennenlernen',
        kurztext: 'Lockeres Gespräch – wir wollen dich\nkennenlernen',
      },
      {
        titel: 'Willkommen!',
        kurztext: 'Probetag & Start in dein neues Abenteuer',
      },
    ],
  },
  cta: {
    ueberschrift: 'Worauf wartest du?',
    text: 'Wir freuen uns darauf, dich kennenzulernen! Egal ob du Erfahrung\nmitbringst oder gerade erst durchstartest – bei uns zählt deine\nLeidenschaft und dein Wille, etwas zu bewegen.',
    button: null,
  },
  list: [
    {
      id: 'plakatierer',
      titel: 'Plakatierer/in',
      badges: ['Vollzeit', 'Vor Ort', 'Ab sofort'],
      standort: 'Friedrichshafen',
      pensum: '100 %',
      aktiv: true,
      intro:
        'Du bist zuverlässig, packst gerne draußen an und willst Werbung in der Region sichtbar machen?',
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
      badges: ['Vollzeit', 'Hybrid', 'Ab sofort'],
      standort: 'Friedrichshafen',
      pensum: '80–100 %',
      aktiv: true,
      intro:
        'Du planst Kampagnen, berätst Kunden und bringst Ideen von der Konzeption bis zur Fläche?',
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
      intro:
        'Du möchtest in die Welt der Werbung eintauchen und erste Praxiserfahrung sammeln?',
      aufgaben: [
        'Unterstützung bei der Gestaltung von Werbemitteln',
        'Mitarbeit an kreativen Projekten und Kampagnen',
        'Social Media Content-Erstellung',
        'Einblick in alle Bereiche einer Werbeagentur',
      ],
      anforderungen: [
        'Student/in im Bereich Design, Marketing oder Kommunikation',
        'Erste Erfahrung mit Adobe Creative Suite von Vorteil',
        'Kreativität, Lernbereitschaft und Engagement',
        'Praktikumsdauer: mindestens 3 Monate',
      ],
      benefits: ['Mentoring', 'Praxisnah', 'Übernahmechance'],
    },
  ],
}

export const kontakt = {
  hero: {
    titel: 'PROJEKT\nANFRAGEN',
    untertitel:
      'Lassen Sie uns gemeinsam Ihre Marke sichtbar machen.\nWir melden uns innerhalb von 24 Stunden bei Ihnen.',
  },
  contactTitle: 'Direkt Kontakt\nAufnehmen',
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
  zeitraeume: ['sofort', 'innerhalb 1 Monat', '1-3 Monate', '> 3 Monate'],
  verfuegbarAb: ['sofort', 'nächsten Monat', 'in 3 Monaten', 'flexibel'],
}
