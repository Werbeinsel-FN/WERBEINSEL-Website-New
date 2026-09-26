/** Platzhalter-Inhalte passend zum Figma/Lastenheft – bis Payload befüllt ist. */

export const navigation = {
  items: [
    {
      label: 'Leistungen',
      url: '/services',
      children: [
        { label: 'Plakatwerbung', url: '/leistungen/plakatwerbung' },
        { label: 'Folierung & Beschriftung', url: '/leistungen/folierung' },
        { label: 'Foto & Video', url: '/leistungen/foto-video' },
      ],
    },
    { label: 'Jobs', url: '/jobs' },
    { label: 'Kontakt', url: '/kontakt' },
  ],
}

export const einstellungen = {
  telefon: '+49 (0) 123 456 789',
  email: 'info@werbeinsel.de',
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
            { label: 'Services', url: '/services' },
            { label: 'Plakatierung', url: '/leistungen/plakatwerbung' },
            { label: 'Folierung', url: '/leistungen/folierung' },
            { label: 'Foto & Video', url: '/leistungen/foto-video' },
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
    untertitel: 'Plakat. Folie. Pixel.\nSichtbarkeit für Marken in der Region.',
    buttons: [
      { label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' as const },
      { label: 'Services ansehen', url: '/services', stil: 'secondary' as const },
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
        titel: 'Foto & Video',
        kurztext: 'Events. Ausstellungen. Imagefilme.',
        link: '/leistungen/foto-video',
        // Platzhalter, später durch ein eigenes Konzertfoto ersetzen
        bild: { url: '/images/figma/service-foto.png', alt: 'Foto & Video' },
      },
    ],
  },
  referenzen: {
    blockType: 'referenzSlider' as const,
    ueberschrift: 'Unsere\nArbeiten',
    untertitel:
      'Von Fahrzeugbeschriftung bis Großflächenplakat –\nIhre Marke im Mittelpunkt.',
    kategorie: 'alle' as const,
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
    adresseLabel: 'ADRESSE',
  },
}

export const impressum = {
  hero: { titel: 'IMPRESSUM' },
  /** PLACEHOLDER – rechtlich prüfen und ersetzen */
  angabenTitel: 'Angaben gemäß § 5 DDG\n(Digitale-Dienste-Gesetz)',
  firma: 'Werbeinsel',
  adresse: [
    'Inhaber: Kristian Cajic',
    'Musterstraße 12',
    '88045 Friedrichshafen',
    'Deutschland',
  ],
  kontaktTitel: 'Kontakt',
  kontaktZeilen: [
    'Telefon: +49 (0) XXX XXXXXXX',
    `E-Mail: ${einstellungen.email}`,
  ],
  ustTitel: 'Umsatzsteuer-ID',
  ustText:
    'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:\nDE123456789 (bitte eintragen oder entfernen, falls nicht vorhanden)',
  verantwortlichTitel: 'Verantwortlich für den Inhalt\nnach § 18 Abs. 2 MStV',
  verantwortlichZeilen: [
    'Kristian Cajic',
    'Musterstraße 12',
    '88045 Friedrichshafen',
  ],
  disclaimerTitel: 'Haftungsausschluss\n(Disclaimer)',
  disclaimerAbschnitte: [
    {
      titel: 'Haftung für Inhalte',
      absatze: [
        'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
      ],
    },
    {
      titel: 'Haftung für Links',
      absatze: [
        'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.',
        'Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
      ],
    },
    {
      titel: 'Urheberrecht',
      absatze: [
        'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
        'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.',
        'Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      ],
    },
  ],
}

export const datenschutz = {
  hero: { titel: 'DATENSCHUTZ' },
  /** PLACEHOLDER – rechtlich prüfen und ersetzen */
  platzhalter:
    '[Platzhalter - Rechtstext einsetzen. Dieser Absatz dient ausschließlich der Gestaltung und zeigt die typische Länge eines Datenschutzabsatzes. Text von Anwalt, Datenschutzbeauftragtem oder einem geprüften Generator einsetzen.]',
  abschnitte: [
    {
      titel: 'Datenschutz auf einen Blick',
      unterabschnitte: [
        {
          titel: 'Allgemeine Hinweise',
          absatze: 1,
        },
        {
          titel: 'Datenerfassung auf dieser Website',
          absatze: 2,
        },
        {
          titel: 'Hosting',
          absatze: 1,
        },
      ],
    },
    {
      titel: 'Allgemeine Hinweise und\nPflichtinformationen',
      unterabschnitte: [
        { titel: 'Datenschutz', absatze: 1 },
        { titel: 'Hinweis zur verantwortlichen Stelle', absatze: 1 },
        { titel: 'Speicherdauer', absatze: 1 },
        {
          titel: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
          absatze: 1,
        },
        {
          titel: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
          absatze: 1,
        },
        { titel: 'Recht auf Datenübertragbarkeit', absatze: 1 },
        { titel: 'Auskunft, Löschung und Berichtigung', absatze: 1 },
        { titel: 'Recht auf Einschränkung der Verarbeitung', absatze: 1 },
        { titel: 'SSL- bzw. TLS-Verschlüsselung', absatze: 1 },
      ],
    },
    {
      titel: 'Datenerfassung auf dieser Website',
      unterabschnitte: [
        { titel: 'Cookies', absatze: 1 },
        { titel: 'Server-Log-Dateien', absatze: 1 },
        { titel: 'Kontaktformular', absatze: 1 },
        { titel: 'Anfrage per E-Mail oder Telefon', absatze: 1 },
      ],
    },
  ],
}

/** Page / Services – Figma Übersicht */
export const servicesPage = {
  hero: {
    titel: 'UNSERE\nLEISTUNGEN',
    untertitel:
      'Von der ersten Idee bis zur fertigen Montage – alles aus einer Hand. Klassische Außenwerbung und moderne Sichtbarkeit für die Region.',
  },
  sectionTitle: 'DREI DISZIPLINEN, EIN ANSPRUCH',
  items: [
    {
      nr: '01',
      kategorie: 'AUSSENWERBUNG',
      titel: 'Plakatwerbung',
      kurztext: 'Auffällig. Präsent. Wirkungsvoll.',
      link: '/leistungen/plakatwerbung',
      bild: { url: '/images/figma/service-plakat.png', alt: 'Plakatwerbung' },
    },
    {
      nr: '02',
      kategorie: 'BESCHRIFTUNG',
      titel: 'Folierung &\nBeschriftung',
      kurztext: 'Fahrzeuge. Schaufenster. Fassaden.',
      link: '/leistungen/folierung',
      bild: { url: '/images/figma/service-folie.png', alt: 'Folierung & Beschriftung' },
    },
    {
      nr: '03',
      kategorie: 'CONTENT',
      titel: 'Foto & Video',
      kurztext: 'Events. Ausstellungen. Imagefilme.',
      link: '/leistungen/foto-video',
      // Platzhalter, später durch ein eigenes Konzertfoto ersetzen
      bild: { url: '/images/figma/service-foto.png', alt: 'Foto & Video' },
    },
  ],
  cta: {
    ueberschrift: 'WELCHE LEISTUNG PASST ZU\nIHNEN?',
    text: 'Wir beraten Sie ehrlich – auch dann, wenn die Antwort einmal „weniger“ lautet.',
    button: { label: 'Beratung anfragen', url: '/kontakt' },
  },
}

export { leistungen, leistungenSlugs, type LeistungSlug } from './leistungen-struktur'

export const formOptions = {
  services: ['Plakatwerbung', 'Folierung & Beschriftung', 'Foto & Video', 'Sonstiges'],
  budgets: ['< 1.000€', '1.000€ - 5.000€', '5.000€ - 10.000€', '> 10.000€'],
  zeitraeume: ['sofort', 'innerhalb 1 Monat', '1-3 Monate', '> 3 Monate'],
  verfuegbarAb: ['sofort', 'nächsten Monat', 'in 3 Monaten', 'flexibel'],
}
