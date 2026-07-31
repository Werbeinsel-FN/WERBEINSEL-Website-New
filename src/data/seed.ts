/** Platzhalter-Inhalte passend zum Figma/Lastenheft – bis Payload befüllt ist. */

export const navigation = {
  items: [
    {
      label: 'Leistungen',
      url: '/services',
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
            { label: 'Services', url: '/services' },
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
  sectionTitle: 'VIER DISZIPLINEN, EIN ANSPRUCH',
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
      kategorie: 'DIGITAL',
      titel: 'Digitale\nWerbemittel',
      kurztext: 'Screens. Social Media. Online-\nKampagnen.',
      link: '/leistungen/social-media',
      bild: { url: '/images/figma/service-digital.png', alt: 'Digitale Werbemittel' },
    },
    {
      nr: '04',
      kategorie: 'PRINT',
      titel: 'Drucksachen',
      kurztext: 'Flyer. Broschüren. Geschäftsausstattung.',
      link: '/leistungen/grafikdesign',
      bild: { url: '/images/figma/service-druck.png', alt: 'Drucksachen' },
    },
  ],
  cta: {
    ueberschrift: 'WELCHE LEISTUNG PASST ZU\nIHNEN?',
    text: 'Wir beraten Sie ehrlich – auch dann, wenn die Antwort einmal „weniger“ lautet.',
    button: { label: 'Beratung anfragen', url: '/kontakt' },
  },
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
        untertitel:
          'Plakate an Straßenlaternen im 100-Kilometer-Umkreis rund um Friedrichshafen. Von der\nKampagnenplanung über die Sondernutzungserlaubnis bis zum GPS-Fotonachweis\nübernehmen wir jeden Schritt.',
        buttons: [],
      },
      {
        blockType: 'zahlen',
        dunkel: true,
        stats: [
          { zahl: '20+', label: 'Jahre Erfahrung' },
          { zahl: '150+', label: 'Städte im Verteilnetz' },
          { zahl: '3.000+', label: 'Kampagnen umgesetzt' },
          { zahl: '1', label: 'Ansprechpartner für alles' },
        ],
      },
      {
        blockType: 'kategorien',
        gelb: true,
        ueberschrift: 'JEDER ANLASS BRAUCHT SEINE EIGENE\nKAMPAGNE',
        text: 'Ein Stadtfest braucht andere Standorte als eine Messe, ein Konzert eine andere Vorlaufzeit als eine Vereinsfeier.\nMotiv, Stückzahl, Verteilgebiet und Laufzeit arbeiten wir für jeden Anlass neu aus.',
        kategorien: [
          { name: 'Konzerte' },
          { name: 'Festivals' },
          { name: 'Stadtfeste' },
          { name: 'Messen' },
          { name: 'Theater & Kleinkunst' },
          { name: 'Sportevents' },
          { name: 'Vereinsjubiläen' },
          { name: 'Eröffnungen' },
          { name: 'Jahrmärkte' },
          { name: 'Weihnachtsmärkte' },
          { name: 'Kino & Kultur' },
          { name: 'Tag der offenen Tür' },
          { name: 'Wahlkampf' },
        ],
      },
      {
        blockType: 'usp',
        eyebrow: 'IHR ENTSCHEIDENDER VORTEIL',
        ueberschrift: 'DIE GENEHMIGUNG\nMACHEN WIR.',
        text: 'Seit zwei Jahrzehnten pflegen wir enge Beziehungen zu Städten und Kommunen und verfügen über die nötigen Sondernutzungserlaubnisse. Für Sie heißt das: kein Behördenstress, keine Absagen, kein Papierkrieg – wir sichern die Standorte und übernehmen die komplette Genehmigung.',
        belegpunkte: [
          {
            titel: 'Sondernutzungserlaub\nnis',
            text: 'Wir haben die Genehmigungen für die\nFlächen – Sie brauchen keine zu\nbeantragen.',
          },
          {
            titel: 'Direkter Draht zu den\nÄmtern',
            text: 'Gewachsene Kontakte in den\nKommunen sorgen für schnelle,\nverlässliche Zusagen.',
          },
          {
            titel: 'Sie kümmern sich um\nnichts',
            text: 'Von Antrag bis Abnahme läuft der\nkomplette Behördenteil über uns.',
          },
        ],
      },
      {
        blockType: 'fullService',
        eyebrow: 'FULL-SERVICE – KEINE SCHNITTSTELLEN',
        ueberschrift: 'ALLES AUS EINER HAND',
        text: 'Von der ersten Idee bis zur abgehängten Fläche – ein Ansprechpartner für den kompletten Weg. Auf Wunsch übernehmen wir auch Gestaltung und Druck, damit alles perfekt zusammenpasst.',
        schritte: [
          {
            titel: 'Gestaltung',
            text: 'Motiv & Layout – auf Wunsch komplett von uns.',
          },
          {
            titel: 'Druck',
            text: 'Wetterfester Großformatdruck in Top-Qualität.',
          },
          {
            titel: 'Genehmigung',
            text: 'Sondernutzung & Standorte – wir regeln alles.',
          },
          {
            titel: 'Verteilung',
            text: 'Pünktliche Plakatierung an den besten Flächen.',
          },
          {
            titel: 'Abhängung',
            text: 'Saubere Entfernung nach Kampagnenende.',
          },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHRE PLAKATWERBUNG',
        schritte: [
          {
            titel: 'Beratung &\nStandortanalyse',
            kurztext:
              'Wir schauen uns Ihre Ziele und Ihre Zielgruppe an und finden die Standorte mit der größten Wirkung – von der Hauptstraße bis zur Großfläche an der Ausfallstraße.',
            foto: { url: '/images/figma/work-1.png', alt: 'Standortanalyse' },
          },
          {
            titel: 'Konzept &\nMotiv',
            kurztext:
              'Botschaft und Gestaltung auf Distanzwirkung trimmen – klar, lesbar und passgenau für Fläche und Anlass.',
            foto: { url: '/images/figma/work-2.png', alt: 'Konzept und Motiv' },
          },
          {
            titel: 'Flächen\nauswählen',
            kurztext:
              'Passende Formate und Standorte nach Reichweite, Laufwegen und Budget – transparent und nachvollziehbar.',
            foto: { url: '/images/figma/service-plakat.png', alt: 'Flächenauswahl' },
          },
          {
            titel: 'Genehmigung\neinholen',
            kurztext:
              'Sondernutzung und Freigaben übernehmen wir – damit Ihre Kampagne rechtzeitig und legal live geht.',
            foto: { url: '/images/figma/work-3.png', alt: 'Genehmigung' },
          },
          {
            titel: 'Produktion\n& Druck',
            kurztext:
              'Wetterfester Großformatdruck in Top-Qualität – abgestimmt auf Material, Format und Montage.',
            foto: { url: '/images/figma/service-druck.png', alt: 'Druck' },
          },
          {
            titel: 'Verteilung &\nPlakatierung',
            kurztext:
              'Pünktliche Montage an den gebuchten Flächen – koordiniert und dokumentiert.',
            foto: { url: '/images/figma/work-4.png', alt: 'Plakatierung' },
          },
          {
            titel: 'GPS-\nFotonachweis',
            kurztext:
              'Jeder Standort wird dokumentiert – Sie sehen, wo und wann Ihre Werbung sichtbar ist.',
            foto: { url: '/images/figma/work-5.png', alt: 'Fotonachweis' },
          },
          {
            titel: 'Laufzeit &\nKontrolle',
            kurztext:
              'Während der Kampagne prüfen wir die Flächen und reagieren, wenn nachgebessert werden muss.',
            foto: { url: '/images/figma/work-6.png', alt: 'Kontrolle' },
          },
          {
            titel: 'Abhängung',
            kurztext:
              'Saubere Entfernung nach Kampagnenende – Flächen wieder freigeräumt, Auftrag abgeschlossen.',
            foto: { url: '/images/figma/service-folie.png', alt: 'Abhängung' },
          },
          {
            titel: 'Reporting &\nFollow-up',
            kurztext:
              'Kurzer Abschlussbericht und Empfehlungen für die nächste Welle – damit Sichtbarkeit nachhaltig wirkt.',
            foto: { url: '/images/figma/service-digital.png', alt: 'Reporting' },
          },
        ],
      },
      {
        blockType: 'referenzSlider',
        ueberschrift: 'SO SIEHT DAS AUS',
        untertitel: 'Plakate an Straßenlaternen im Verteilergebiet.',
        untertitelKlein: true,
        items: [
          {
            titel: 'Bushaltestelle',
            bild: { url: '/images/figma/work-1.png', alt: 'Plakat an Bushaltestelle' },
          },
          {
            titel: 'Straßenlaterne',
            bild: { url: '/images/figma/work-2.png', alt: 'Plakat an Straßenlaterne' },
          },
          {
            titel: 'Stadtverkehr',
            bild: { url: '/images/figma/work-3.png', alt: 'Plakat im Stadtverkehr' },
          },
          {
            titel: 'Innenstadt',
            bild: { url: '/images/figma/work-4.png', alt: 'Plakat in der Innenstadt' },
          },
          {
            titel: 'Großfläche',
            bild: { url: '/images/figma/work-5.png', alt: 'Großflächenplakat' },
          },
          {
            titel: 'Kampagne live',
            bild: { url: '/images/figma/work-6.png', alt: 'Live-Kampagne' },
          },
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
    metaDescription:
      'Wir filmen und fotografieren, was tatsächlich passiert – vom Event bis zum Reel. Foto- und Videoproduktion von WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'FOTO & VIDEO',
        untertitel:
          'Wir filmen und fotografieren, was tatsächlich passiert – vom Event bis zum Reel. Ihre Räume, Ihre Leute, Ihr Moment.',
        buttons: [],
      },
      {
        blockType: 'referenzSlider',
        sectionId: 'arbeiten-foto-video',
        ueberschrift: 'ALLES DAVON IST PASSIERT',
        untertitel: 'Kein Motiv auf dieser Seite ist generiert. Jedes war ein Termin.',
        untertitelKlein: true,
        items: [
          {
            titel: 'Arbeit 1',
            bild: { url: '/images/figma/work-1.png', alt: 'Foto- und Videoarbeit 1' },
          },
          {
            titel: 'Arbeit 2',
            bild: { url: '/images/figma/work-2.png', alt: 'Foto- und Videoarbeit 2' },
          },
          {
            titel: 'Arbeit 3',
            bild: { url: '/images/figma/work-3.png', alt: 'Foto- und Videoarbeit 3' },
          },
          {
            titel: 'Arbeit 4',
            bild: { url: '/images/figma/work-4.png', alt: 'Foto- und Videoarbeit 4' },
          },
          {
            titel: 'Arbeit 5',
            bild: { url: '/images/figma/work-5.png', alt: 'Foto- und Videoarbeit 5' },
          },
          {
            titel: 'Arbeit 6',
            bild: { url: '/images/figma/work-6.png', alt: 'Foto- und Videoarbeit 6' },
          },
        ],
      },
      {
        blockType: 'echtNichtGeneriert',
        ueberschrift: 'ECHT. NICHT GENERIERT.',
        text: 'Generierte Bilder sehen aus wie generierte Bilder. Man merkt es, auch wenn man nicht sagen kann, woran. Was bei uns rauskommt, ist tatsächlich passiert – mit Kamera, an einem Ort, an einem Tag.',
        punkte: [
          {
            titel: 'Ihre Räume',
            text: 'Kein Studio, keine Kulisse aus dem Rechner. Ihr Betrieb.',
          },
          {
            titel: 'Ihre Leute',
            text: 'Die Gesichter, denen Ihre Kunden auch wirklich begegnen.',
          },
          {
            titel: 'Ihr Moment',
            text: 'Der Termin, der Event, der eine Tag – festgehalten, wie er war.',
          },
        ],
      },
      {
        blockType: 'wasWirAufnehmen',
        ueberschrift: 'WAS WIR AUFNEHMEN',
        items: [
          {
            titel: 'Events',
            icon: 'events',
            text: 'Wir sind da, wenn es passiert. Konzerte, Messen, Firmenfeiern, Jubiläen.',
          },
          {
            titel: 'Social-Content',
            icon: 'social',
            text: 'Reels, Shorts, Stories – hochkant gedreht und für den Kanal geschnitten.',
          },
          {
            titel: 'Imagefilm',
            icon: 'image',
            text: 'Der Film über Ihr Unternehmen – für Website, Messe und Präsentation.',
          },
          {
            titel: 'Website',
            icon: 'website',
            text: 'Hero-Videos und Aufnahmen für Ihre Website – klar, echt, wiedererkennbar.',
          },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHR SHOOTING',
        schritte: [
          {
            titel: 'Beratung &\nStandortanalyse',
            kurztext:
              'Wir schauen uns Ihre Ziele und Ihre Zielgruppe an und finden die Standorte mit der größten Wirkung – von der Hauptstraße bis zur Großfläche an der Ausfallstraße.',
            foto: { url: '/images/figma/work-1.png', alt: 'Beratung und Standortanalyse' },
          },
          {
            titel: 'Briefing &\nKonzept',
            kurztext:
              'Was soll das Bild oder der Film leisten? Wir klären Motiv, Tonalität und Einsatz – Website, Social, Event oder Imagefilm.',
            foto: { url: '/images/figma/work-2.png', alt: 'Briefing und Konzept' },
          },
          {
            titel: 'Location &\nSetup',
            kurztext:
              'Wir prüfen Licht, Zugang und Ablauf vor Ort – damit am Drehtag nichts überrascht.',
            foto: { url: '/images/figma/work-3.png', alt: 'Location und Setup' },
          },
          {
            titel: 'Personen &\nAbstimmung',
            kurztext:
              'Wer steht vor der Kamera, wer freigibt – wir stimmen Team, Termine und Abläufe mit Ihnen ab.',
            foto: { url: '/images/figma/service-digital.png', alt: 'Personen und Abstimmung' },
          },
          {
            titel: 'Drehplan',
            kurztext:
              'Shotlist, Zeiten und Reihenfolge – damit wir am Tag effizient drehen und nichts vergessen.',
            foto: { url: '/images/figma/work-4.png', alt: 'Drehplan' },
          },
          {
            titel: 'Shooting /\nDreh',
            kurztext:
              'Wir filmen und fotografieren vor Ort – Ihre Räume, Ihre Leute, Ihr Moment.',
            foto: { url: '/images/figma/work-5.png', alt: 'Shooting' },
          },
          {
            titel: 'Auswahl',
            kurztext:
              'Sie sehen eine kuratierte Auswahl – wir markieren Favoriten und holen Ihr Feedback ein.',
            foto: { url: '/images/figma/work-6.png', alt: 'Auswahl' },
          },
          {
            titel: 'Post-\nproduktion',
            kurztext:
              'Schnitt, Farbe, Ton – aufbereitet für die Kanäle, auf denen die Inhalte laufen sollen.',
            foto: { url: '/images/figma/service-folie.png', alt: 'Postproduktion' },
          },
          {
            titel: 'Freigabe',
            kurztext:
              'Finale Versionen zur Abnahme – Anpassungen fließen ein, bevor etwas ausgeliefert wird.',
            foto: { url: '/images/figma/service-plakat.png', alt: 'Freigabe' },
          },
          {
            titel: 'Übergabe',
            kurztext:
              'Dateien in den richtigen Formaten – ready für Website, Social, Präsentation oder Archiv.',
            foto: { url: '/images/figma/service-druck.png', alt: 'Übergabe' },
          },
        ],
      },
      {
        blockType: 'cta',
        yellow: false,
        ueberschrift: 'WANN SOLLEN WIR KOMMEN?',
        text: 'Events haben ein Datum. Je früher wir es kennen, desto besser können wir planen.',
        button: { label: 'Termin anfragen', url: '/kontakt' },
      },
    ],
  },
  grafikdesign: {
    titel: 'Grafikdesign',
    metaDescription:
      'Vom Logo bis zur Druckvorlage, vom Social-Post bis zum Großflächenplakat – Grafikdesign von WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'GRAFIKDESIGN',
        untertitel:
          'Vom Logo bis zur Druckvorlage, vom Social-Post bis zum Großflächenplakat. Wir entwerfen es – und hängen es danach auch auf.',
        buttons: [],
      },
      {
        blockType: 'referenzSlider',
        sectionId: 'arbeiten-grafikdesign',
        ueberschrift: 'ENTWORFEN UND AUSGELIEFERT',
        untertitel:
          'Jedes Motiv hier ist bei uns entstanden – und danach tatsächlich irgendwo gelandet.',
        untertitelKlein: true,
        items: [
          {
            titel: 'Arbeit 1',
            bild: { url: '/images/figma/work-1.png', alt: 'Grafikdesign Arbeit 1' },
          },
          {
            titel: 'Arbeit 2',
            bild: { url: '/images/figma/work-2.png', alt: 'Grafikdesign Arbeit 2' },
          },
          {
            titel: 'Arbeit 3',
            bild: { url: '/images/figma/work-3.png', alt: 'Grafikdesign Arbeit 3' },
          },
          {
            titel: 'Arbeit 4',
            bild: { url: '/images/figma/work-4.png', alt: 'Grafikdesign Arbeit 4' },
          },
          {
            titel: 'Arbeit 5',
            bild: { url: '/images/figma/work-5.png', alt: 'Grafikdesign Arbeit 5' },
          },
          {
            titel: 'Arbeit 6',
            bild: { url: '/images/figma/work-6.png', alt: 'Grafikdesign Arbeit 6' },
          },
        ],
      },
      {
        blockType: 'einMotiv',
        ueberschrift: 'EIN MOTIV, ALLE FORMATE',
        text: 'Bei einer reinen Grafikagentur endet die Arbeit beim fertigen Entwurf. Bei uns fängt sie da erst an: Wir ziehen das Motiv durch jedes Format – und bringen es danach selbst an.',
        items: [
          { label: 'Visitenkarte', icon: 'visitenkarte' },
          { label: 'Social-Post', icon: 'social' },
          { label: 'Reel', icon: 'reel' },
          { label: 'Plakat', icon: 'plakat' },
        ],
      },
      {
        blockType: 'wasWirGestalten',
        ueberschrift: 'WAS WIR GESTALTEN',
        items: [
          {
            titel: 'Logo & Erscheinungsbild',
            icon: 'logo',
            text: 'Das Zeichen, die Farben, die Schrift. Und die Regeln, damit es überall gleich aussieht.',
          },
          {
            titel: 'Druckvorlagen',
            icon: 'druck',
            text: 'Flyer, Broschüren, Speisekarten, Anzeigen. Druckfertig, mit Anschnitt, im richtigen Farbraum.',
          },
          {
            titel: 'Social-Grafiken',
            icon: 'social',
            text: 'Posts, Stories, Anzeigen – kanalgerecht und im Look Ihrer Marke.',
          },
          {
            titel: 'Plakat & Großfläche',
            icon: 'plakat',
            text: 'Motive für Plakat und Großfläche – lesbar auf Distanz, druckfertig geliefert.',
          },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHR DESIGN-PROJEKT',
        schritte: [
          {
            titel: 'Beratung &\nStandortanalyse',
            kurztext:
              'Wir schauen uns Ihre Ziele und Ihre Zielgruppe an und finden die Standorte mit der größten Wirkung – von der Hauptstraße bis zur Großfläche an der Ausfallstraße.',
            foto: { url: '/images/figma/work-1.png', alt: 'Beratung und Standortanalyse' },
          },
          {
            titel: 'Konzept &\nRichtung',
            kurztext:
              'Idee, Tonalität und visuelle Linie – abgestimmt auf Marke und Anlass, bevor wir entwerfen.',
            foto: { url: '/images/figma/work-2.png', alt: 'Konzept und Richtung' },
          },
          {
            titel: 'Moodboard',
            kurztext:
              'Referenzen, Farben und Typografie als gemeinsame Basis – damit alle dasselbe Bild im Kopf haben.',
            foto: { url: '/images/figma/work-3.png', alt: 'Moodboard' },
          },
          {
            titel: 'Entwurf',
            kurztext:
              'Erste Motive und Layouts – klar genug zum Entscheiden, offen genug für Feedback.',
            foto: { url: '/images/figma/service-digital.png', alt: 'Entwurf' },
          },
          {
            titel: 'Feedback &\nIteration',
            kurztext:
              'Ihre Rückmeldung fließt ein – wir schärfen, bis Richtung und Aussage stimmen.',
            foto: { url: '/images/figma/work-4.png', alt: 'Feedback' },
          },
          {
            titel: 'Ausarbeitung',
            kurztext:
              'Feinschliff von Motiv, Typo und Details – druck- und kanalgerecht vorbereitet.',
            foto: { url: '/images/figma/work-5.png', alt: 'Ausarbeitung' },
          },
          {
            titel: 'Formate\nableiten',
            kurztext:
              'Ein Motiv, viele Formate – Visitenkarte, Social, Reel, Plakat und was sonst gebraucht wird.',
            foto: { url: '/images/figma/work-6.png', alt: 'Formate ableiten' },
          },
          {
            titel: 'Freigabe',
            kurztext:
              'Finale Versionen zur Abnahme – Anpassungen fließen ein, bevor etwas produziert wird.',
            foto: { url: '/images/figma/service-folie.png', alt: 'Freigabe' },
          },
          {
            titel: 'Produktion &\nDruckdaten',
            kurztext:
              'Druckfertig mit Anschnitt und richtigem Farbraum – oder digital exportiert für Ihre Kanäle.',
            foto: { url: '/images/figma/service-druck.png', alt: 'Produktion' },
          },
          {
            titel: 'Übergabe &\nUmsetzung',
            kurztext:
              'Dateien und, wo gewünscht, die Umsetzung vor Ort – vom Entwurf bis zur Fläche.',
            foto: { url: '/images/figma/service-plakat.png', alt: 'Übergabe' },
          },
        ],
      },
      {
        blockType: 'cta',
        yellow: false,
        ueberschrift: 'WAS SOLL ENTSTEHEN?',
        text: 'Ob ein einzelner Flyer oder ein ganzes Erscheinungsbild – erzählen Sie uns, was Sie vorhaben.',
        button: { label: 'Projekt besprechen', url: '/kontakt' },
      },
    ],
  },
  folierung: {
    titel: 'Folierung',
    metaDescription:
      'Fahrzeuge, Schaufenster, Schilder, Fassaden – Folierung von WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'FOLIERUNG',
        untertitel:
          'Fahrzeuge, Schaufenster, Schilder, Fassaden. Wir bringen Ihr Motiv auf die Flächen, die Sie ohnehin schon haben.',
        buttons: [],
      },
      {
        blockType: 'referenzSlider',
        sectionId: 'arbeiten-folierung',
        ueberschrift: 'GEKLEBT AM BODENSEE',
        untertitel:
          'Jedes Fahrzeug hier fährt tatsächlich. Jede Scheibe steht irgendwo in der Region.',
        untertitelKlein: true,
        items: [
          {
            titel: 'Arbeit 1',
            bild: { url: '/images/figma/work-1.png', alt: 'Folierung Arbeit 1' },
          },
          {
            titel: 'Arbeit 2',
            bild: { url: '/images/figma/work-2.png', alt: 'Folierung Arbeit 2' },
          },
          {
            titel: 'Arbeit 3',
            bild: { url: '/images/figma/work-3.png', alt: 'Folierung Arbeit 3' },
          },
          {
            titel: 'Arbeit 4',
            bild: { url: '/images/figma/work-4.png', alt: 'Folierung Arbeit 4' },
          },
          {
            titel: 'Arbeit 5',
            bild: { url: '/images/figma/work-5.png', alt: 'Folierung Arbeit 5' },
          },
          {
            titel: 'Arbeit 6',
            bild: { url: '/images/figma/work-6.png', alt: 'Folierung Arbeit 6' },
          },
        ],
      },
      {
        blockType: 'transporterFaahrt',
        ueberschrift: 'IHR TRANSPORTER FÄHRT SOWIESO',
        text: 'Ein Plakat kostet Miete. Eine Anzeige kostet Platz. Ihr Fahrzeug steht ohnehin auf der Straße, jeden Tag, kostenlos – nur eben unbeschriftet. Dasselbe gilt für Ihr Schaufenster: Die Fläche gehört Ihnen längst.',
        punkte: [
          {
            titel: 'Einmal zahlen',
            text: 'Keine Miete, keine Schaltung. Die Folie klebt und arbeitet.',
          },
          {
            titel: 'Fährt von allein',
            text: 'Jede Fahrt zur Baustelle ist eine Rundfahrt durchs Einzugsgebiet.',
          },
          {
            titel: 'Wieder abzulösen',
            text: 'Rückstandslos entfernbar – wichtig, wenn das Fahrzeug geleast ist.',
          },
        ],
      },
      {
        blockType: 'wasWirBekleben',
        ueberschrift: 'WAS WIR BEKLEBEN',
        items: [
          {
            titel: 'Fahrzeugbeschriftung',
            icon: 'fahrzeug',
            text: 'Vom Schriftzug auf der Tür bis zur Vollverklebung. Transporter, Pkw, Anhänger, Flotte.',
          },
          {
            titel: 'Schaufenster',
            icon: 'schaufenster',
            text: 'Logo, Öffnungszeiten, Sichtschutz. Von außen Werbung, von innen bleibt das Licht.',
          },
          {
            titel: 'Schilder & Fassade',
            icon: 'schilder',
            text: 'Firmenschild, Hausnummer, Leitsystem. Damit man Sie findet, wenn man davorsteht.',
          },
          {
            titel: 'Bauzaun & Banner',
            icon: 'bauzaun',
            text: 'Große Fläche, kurze Zeit. Für Baustellen, Eröffnungen und Veranstaltungen.',
          },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHRE FOLIERUNG',
        schritte: [
          {
            titel: 'Beratung &\nStandortanalyse',
            kurztext:
              'Wir schauen uns Ihre Ziele und Ihre Zielgruppe an und finden die Standorte mit der größten Wirkung – von der Hauptstraße bis zur Großfläche an der Ausfallstraße.',
            foto: { url: '/images/figma/work-1.png', alt: 'Beratung und Standortanalyse' },
          },
          {
            titel: 'Konzept &\nMotiv',
            kurztext:
              'Botschaft und Gestaltung für die Fläche – klar, lesbar und passgenau für Fahrzeug, Fenster oder Fassade.',
            foto: { url: '/images/figma/work-2.png', alt: 'Konzept und Motiv' },
          },
          {
            titel: 'Aufmaß &\nDaten',
            kurztext:
              'Maße, Radien und Besonderheiten vor Ort – damit die Folie später sitzt, wie geplant.',
            foto: { url: '/images/figma/work-3.png', alt: 'Aufmaß' },
          },
          {
            titel: 'Druck &\nZuschnitt',
            kurztext:
              'Druckfertig mit dem richtigen Material – zugeschnitten auf die Fläche und den Einsatz.',
            foto: { url: '/images/figma/service-druck.png', alt: 'Druck und Zuschnitt' },
          },
          {
            titel: 'Vorbereitung',
            kurztext:
              'Reinigung und Untergrund – die Basis für eine Folierung, die hält und sauber aussieht.',
            foto: { url: '/images/figma/work-4.png', alt: 'Vorbereitung' },
          },
          {
            titel: 'Verklebung',
            kurztext:
              'Wir bringen das Motiv auf – präzise, faltenfrei und dokumentiert.',
            foto: { url: '/images/figma/work-5.png', alt: 'Verklebung' },
          },
          {
            titel: 'Nacharbeit',
            kurztext:
              'Kanten, Ecken und Details – damit nichts absteht und alles fertig wirkt.',
            foto: { url: '/images/figma/work-6.png', alt: 'Nacharbeit' },
          },
          {
            titel: 'Abnahme',
            kurztext:
              'Gemeinsamer Check vor Ort – Sie sehen das Ergebnis und geben frei.',
            foto: { url: '/images/figma/service-folie.png', alt: 'Abnahme' },
          },
          {
            titel: 'Dokumentation',
            kurztext:
              'Fotos und Hinweise zur Pflege – damit Sie wissen, was drauf ist und wie es hält.',
            foto: { url: '/images/figma/service-plakat.png', alt: 'Dokumentation' },
          },
          {
            titel: 'Service &\nAblösung',
            kurztext:
              'Bei Bedarf rückstandslos ablösen oder nachfolieren – auch bei geleasten Fahrzeugen.',
            foto: { url: '/images/figma/service-digital.png', alt: 'Service' },
          },
        ],
      },
      {
        blockType: 'cta',
        yellow: false,
        ueberschrift: 'WAS SOLL BEKLEBT WERDEN?',
        text: 'Sagen Sie uns, welches Fahrzeug oder welche Fläche – wir schauen es uns an und machen einen Vorschlag.',
        button: { label: 'Angebot anfragen', url: '/kontakt' },
      },
    ],
  },
  'social-media': {
    titel: 'Social Media Marketing',
    metaDescription:
      'Social-Media-Kanäle pflegen, Content erstellen und Online-Kampagnen planen – WERBEINSEL.',
    blocks: [
      {
        blockType: 'hero',
        variante: 'einfach',
        titel: 'SOCIAL MEDIA MARKETING',
        untertitel:
          'Wir pflegen Ihre Kanäle und füllen sie mit Inhalten – abgestimmt mit Ihnen, nicht an Ihnen vorbei. Dazu planen wir Online-Kampagnen, die ein Ziel haben und ein Ende.',
        buttons: [],
      },
      {
        blockType: 'referenzSlider',
        sectionId: 'kanaele-content',
        ueberschrift: 'WAS AUF DEN KANÄLEN LÄUFT',
        untertitel: 'Reels, Stories, Posts – hochkant, so wie sie ausgespielt werden.',
        untertitelKlein: true,
        items: [
          {
            titel: 'Content 1',
            bild: { url: '/images/figma/work-1.png', alt: 'Social-Media-Content Beispiel 1' },
          },
          {
            titel: 'Content 2',
            bild: { url: '/images/figma/work-2.png', alt: 'Social-Media-Content Beispiel 2' },
          },
          {
            titel: 'Content 3',
            bild: { url: '/images/figma/work-3.png', alt: 'Social-Media-Content Beispiel 3' },
          },
          {
            titel: 'Content 4',
            bild: { url: '/images/figma/work-4.png', alt: 'Social-Media-Content Beispiel 4' },
          },
          {
            titel: 'Content 5',
            bild: { url: '/images/figma/work-5.png', alt: 'Social-Media-Content Beispiel 5' },
          },
          {
            titel: 'Content 6',
            bild: { url: '/images/figma/work-6.png', alt: 'Social-Media-Content Beispiel 6' },
          },
        ],
      },
      {
        blockType: 'kanaele',
        ueberschrift: 'IHRE KANÄLE',
        untertitel:
          'Welche davon Sinn ergeben, entscheiden wir gemeinsam. Lieber zwei Kanäle gut als fünf halb.',
        items: [
          {
            titel: 'Instagram',
            icon: 'instagram',
            text: 'Reels, Stories und Feed. Der Kanal für Bilder, die in der Region hängen bleiben.',
          },
          {
            titel: 'TikTok',
            icon: 'tiktok',
            text: 'Kurze Videos, große Reichweite. Vor allem beim jungen Publikum.',
          },
          {
            titel: 'Facebook',
            icon: 'facebook',
            text: 'Veranstaltungen, Neuigkeiten und die Reichweite, die am Bodensee weiterhin zählt.',
          },
          {
            titel: 'Google',
            icon: 'google',
            text: 'Öffnungszeiten, Fotos, Bewertungen. Der erste Eindruck bei jeder Google-Suche.',
          },
          {
            titel: 'YouTube',
            icon: 'youtube',
            text: 'Längere Videos und Shorts. Inhalte, die auch in einem Jahr noch gefunden werden.',
          },
        ],
      },
      {
        blockType: 'betreuung',
        ueberschrift: 'SO LÄUFT DIE BETREUUNG',
        schritte: [
          {
            titel: 'Absprache',
            text: 'Wir klären, was Sie zu sagen haben und wen Sie erreichen wollen.',
          },
          {
            titel: 'Redaktionsplan',
            text: 'Themen, Frequenz und Kanäle legen wir gemeinsam fest – Sie geben frei.',
          },
          {
            titel: 'Inhalte',
            text: 'Wir produzieren Fotos, Videos und Texte und bereiten sie je Kanal auf.',
          },
          {
            titel: 'Pflegen',
            text: 'Wir veröffentlichen, beantworten Kommentare und halten die Profile aktuell.',
          },
        ],
      },
      {
        blockType: 'schrittSlider',
        eyebrow: 'SO LÄUFT IHR SOCIAL MEDIA',
        schritte: [
          {
            titel: 'Beratung &\nZielklärung',
            kurztext:
              'Wir schauen uns Ihre Ziele und Ihre Zielgruppe an und legen fest, was Social Media für Sie leisten soll – Reichweite, Leads oder Markenbild.',
            foto: { url: '/images/figma/work-1.png', alt: 'Beratung und Zielklärung' },
          },
          {
            titel: 'Kanal-\nStrategie',
            kurztext:
              'Welche Plattformen Sinn ergeben, entscheiden wir gemeinsam – lieber zwei Kanäle gut als fünf halb.',
            foto: { url: '/images/figma/work-2.png', alt: 'Kanalstrategie' },
          },
          {
            titel: 'Redaktions-\nplan',
            kurztext:
              'Themen, Frequenz und Formate legen wir gemeinsam fest – Sie geben frei, bevor etwas online geht.',
            foto: { url: '/images/figma/work-3.png', alt: 'Redaktionsplan' },
          },
          {
            titel: 'Content-\nKonzept',
            kurztext:
              'Botschaft, Tonalität und visuelle Linie – abgestimmt auf Marke und Zielgruppe je Kanal.',
            foto: { url: '/images/figma/service-digital.png', alt: 'Content-Konzept' },
          },
          {
            titel: 'Produktion',
            kurztext:
              'Wir produzieren Fotos, Videos und Texte und bereiten sie kanalgerecht auf – Reels, Stories, Posts, Shorts.',
            foto: { url: '/images/figma/work-4.png', alt: 'Produktion' },
          },
          {
            titel: 'Freigabe',
            kurztext:
              'Sie sehen die Inhalte vor Veröffentlichung – Feedback fließt ein, bevor etwas live geht.',
            foto: { url: '/images/figma/work-5.png', alt: 'Freigabe' },
          },
          {
            titel: 'Veröffent-\nlichung',
            kurztext:
              'Wir posten zum richtigen Zeitpunkt auf den vereinbarten Kanälen – konsistent und planbar.',
            foto: { url: '/images/figma/work-6.png', alt: 'Veröffentlichung' },
          },
          {
            titel: 'Community\nManagement',
            kurztext:
              'Wir beantworten Kommentare und Nachrichten und halten die Profile aktiv und aktuell.',
            foto: { url: '/images/figma/service-folie.png', alt: 'Community Management' },
          },
          {
            titel: 'Ads &\nReichweite',
            kurztext:
              'Bei Bedarf schalten wir gezielte Kampagnen – mit klaren Zielen, Budget und messbaren Ergebnissen.',
            foto: { url: '/images/figma/service-plakat.png', alt: 'Ads und Reichweite' },
          },
          {
            titel: 'Reporting &\nOptimierung',
            kurztext:
              'Regelmäßige Auswertung und Anpassungen – damit Reichweite und Wirkung nachhaltig steigen.',
            foto: { url: '/images/figma/service-druck.png', alt: 'Reporting' },
          },
        ],
      },
      {
        blockType: 'onlineKampagnen',
        ueberschrift: 'ONLINE-KAMPAGNEN',
        untertitel:
          'Laufende Betreuung hält die Kanäle am Leben. Eine Kampagne hat ein Ziel, ein Budget und ein Ende – für eine Eröffnung, eine Aktion, eine Veranstaltung.',
        items: [
          {
            titel: 'Zielgruppe & Budget',
            icon: 'zielgruppe',
            text: 'Wen wollen Sie erreichen, in welchem Umkreis, mit welchem Einsatz.',
          },
          {
            titel: 'Motive & Texte',
            icon: 'motive',
            text: 'Wir entwickeln, was ausgespielt wird – passend zum Kanal und zum Anlass.',
          },
          {
            titel: 'Auswertung',
            icon: 'auswertung',
            text: 'Nach der Kampagne sehen Sie, was sie gebracht hat.',
          },
        ],
      },
      {
        blockType: 'cta',
        yellow: false,
        ueberschrift: 'REDEN WIR ÜBER IHRE KANÄLE',
        text: 'Ein Gespräch reicht, um zu klären, welche Kanäle sich für Sie lohnen – und welche nicht.',
        button: { label: 'Gespräch vereinbaren', url: '/kontakt' },
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
