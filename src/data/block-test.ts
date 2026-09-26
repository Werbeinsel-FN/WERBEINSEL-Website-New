import type { PageBlock } from '@/components/RenderBlocks'

/**
 * Beispielinhalte für die Testseite /test-bloecke (nur lokal und in der Vorschau).
 * Zeigt alle 24 CMS-Blöcke, einige in mehreren Varianten. Texte bewusst mit langen
 * deutschen Wörtern, damit Überläufe und Umbrüche in den Screenshots auffallen.
 */

const bild = (url: string, alt: string) => ({ url, alt })

export const blockTestSections: Array<{ name: string; block: PageBlock }> = [
  {
    name: 'hero · bildKarte',
    block: {
      blockType: 'hero',
      variante: 'bildKarte',
      bild: bild('/images/figma/hero-bg.png', 'Plakatwand in der Stadt'),
      titel: 'Ihre Werbung.\nUnser\nHandwerk.',
      untertitel: 'Plakat. Folie. Digital.\nSichtbarkeit für Marken in der Region.',
      buttons: [
        { label: 'Projekt anfragen', url: '/kontakt', stil: 'primary' },
        { label: 'Services ansehen', url: '/services', stil: 'secondary' },
      ],
    },
  },
  {
    name: 'hero · einfach',
    block: {
      blockType: 'hero',
      variante: 'einfach',
      titel: 'FAHRZEUGBESCHRIFTUNG',
      untertitel: 'Vom Kleinwagen bis zur Lkw-Flotte – Beschriftungen, die auffallen.',
    },
  },
  {
    name: 'textblock',
    block: {
      blockType: 'textblock',
      eyebrow: 'Über uns',
      ueberschrift: 'Ihre Agentur für\nklassische Werbung',
      text: 'WERBEINSEL steht für klare Kommunikation und starke visuelle Präsenz.\n\nWir entwickeln, produzieren und montieren klassische Außenwerbung – regional verankert, professionell umgesetzt.',
      bild: bild('/images/figma/work-1.png', 'Beispielarbeit'),
    },
  },
  {
    name: 'zahlen · hell',
    block: {
      blockType: 'zahlen',
      eyebrow: 'In Zahlen',
      ueberschrift: 'Reichweite, die wirkt',
      stats: [
        { zahl: '250+', label: 'Plakatstandorte am Bodensee' },
        { zahl: '1,2 Mio.', label: 'Kontakte pro Dekade' },
        { zahl: '15', label: 'Jahre Erfahrung' },
        { zahl: '48 h', label: 'Montagezeit nach Freigabe' },
      ],
    },
  },
  {
    name: 'zahlen · dunkel',
    block: {
      blockType: 'zahlen',
      dunkel: true,
      stats: [
        { zahl: '98 %', label: 'Kundenzufriedenheit' },
        { zahl: '3.400', label: 'Quadratmeter Folie pro Jahr' },
        { zahl: '120', label: 'Fahrzeugflotten beschriftet' },
      ],
    },
  },
  {
    name: 'kategorien',
    block: {
      blockType: 'kategorien',
      eyebrow: 'Leistungen',
      ueberschrift: 'Kategorien',
      text: 'Wählen Sie die passende Werbeform für Ihr Vorhaben.',
      kategorien: [
        { name: 'Großflächenplakate', link: '/leistungen/plakatwerbung' },
        { name: 'City-Light-Poster' },
        { name: 'Litfaßsäulen' },
        { name: 'Bauzaunwerbung' },
      ],
    },
  },
  {
    name: 'usp',
    block: {
      blockType: 'usp',
      eyebrow: 'Warum wir',
      ueberschrift: 'Alles aus einer Hand',
      text: 'Von der ersten Idee über die Gestaltung bis zur fertigen Montage – mit festen Ansprechpartnern und kurzen Wegen.',
      belegpunkte: [
        { titel: 'Regional verwurzelt', text: 'Wir kennen die Standorte am Bodensee und in Oberschwaben.' },
        { titel: 'Eigene Produktion', text: 'Druck, Zuschnitt und Montage aus eigener Werkstatt.' },
        { titel: 'Termintreue', text: 'Verbindliche Zeitpläne und Montagebestätigung mit Foto.' },
      ],
    },
  },
  {
    name: 'fullService',
    block: {
      blockType: 'fullService',
      eyebrow: 'Full-Service',
      ueberschrift: 'So arbeiten wir',
      text: 'Fünf Schritte vom Briefing bis zur Erfolgskontrolle.',
      schritte: [
        { titel: 'Beratung', text: 'Ziele, Zielgruppe und Budget klären.' },
        { titel: 'Standortplanung', text: 'Passende Flächen auswählen und reservieren.' },
        { titel: 'Gestaltung', text: 'Motive entwickeln und abstimmen.' },
        { titel: 'Produktion', text: 'Druck in Plakat- und Folienqualität.' },
        { titel: 'Montage', text: 'Termingerecht mit Fotodokumentation.' },
      ],
    },
  },
  {
    name: 'schrittSlider',
    block: {
      blockType: 'schrittSlider',
      eyebrow: "So läuft's",
      schritte: [
        { titel: 'Anfrage und Beratung', kurztext: 'Sie schildern Ihr Vorhaben, wir melden uns innerhalb eines Werktags mit ersten Vorschlägen.', foto: bild('/images/figma/work-2.png', 'Beratung') },
        { titel: 'Gestaltung und Freigabe', kurztext: 'Unser Grafikteam entwickelt Motive, Sie geben frei.', foto: bild('/images/figma/work-3.png', 'Gestaltung') },
        { titel: 'Produktion und Montage', kurztext: 'Wir drucken, liefern und montieren – mit Fotodokumentation.', foto: bild('/images/figma/work-4.png', 'Montage') },
      ],
    },
  },
  {
    name: 'referenzSlider',
    block: {
      blockType: 'referenzSlider',
      eyebrow: 'Referenzen',
      ueberschrift: 'Unsere Arbeiten',
      untertitel: 'Von Fahrzeugbeschriftung bis Großflächenplakat – Ihre Marke im Mittelpunkt.',
      items: [
        { titel: 'Stadtwerke Regional', kurztext: 'Großflächenkampagne', bild: bild('/images/figma/work-1.png', 'Referenz 1'), kategorie: 'Plakat' },
        { titel: 'Autohaus Schmidt', kurztext: 'Flottenbeschriftung', bild: bild('/images/figma/work-2.png', 'Referenz 2'), kategorie: 'Folie' },
        { titel: 'Bäckerei Müller', kurztext: 'Schaufensterbeklebung', bild: bild('/images/figma/work-3.png', 'Referenz 3'), kategorie: 'Folie' },
        { titel: 'Fitness First', kurztext: 'Social-Media-Kampagne', bild: bild('/images/figma/work-4.png', 'Referenz 4'), kategorie: 'Digital' },
      ],
    },
  },
  {
    name: 'reichweite',
    block: {
      blockType: 'reichweite',
      eyebrow: 'Einzugsgebiet',
      ueberschrift: 'Reichweite',
      text: 'Unsere Plakatflächen verteilen sich über die gesamte Bodenseeregion.',
      staedte: [
        { name: 'Friedrichshafen', region: 'Bodenseekreis' },
        { name: 'Ravensburg', region: 'Oberschwaben' },
        { name: 'Überlingen', region: 'Bodenseekreis' },
        { name: 'Lindau', region: 'Bayern' },
      ],
      karteZeigen: true,
    },
  },
  {
    name: 'formateMaterial',
    block: {
      blockType: 'formateMaterial',
      eyebrow: 'Formate',
      ueberschrift: 'Formate und Material',
      formate: [
        { name: 'Großfläche 18/1', beschreibung: '356 × 252 cm, Blueback-Papier, wetterfest.', bild: bild('/images/figma/service-plakat.png', 'Großfläche') },
        { name: 'City-Light-Poster', beschreibung: '119 × 175 cm, hinterleuchtet.', bild: bild('/images/figma/service-digital.png', 'City-Light') },
        { name: 'Bauzaunbanner', beschreibung: 'Mesh-Gewebe, beliebige Längen.', bild: bild('/images/figma/service-folie.png', 'Banner') },
      ],
    },
  },
  {
    name: 'faq',
    block: {
      blockType: 'faq',
      eyebrow: 'FAQ',
      ueberschrift: 'Häufige Fragen',
      fragen: [
        { frage: 'Wie lange dauert eine Plakatkampagne?', antwort: 'Üblich ist eine Dekade, also zehn bis elf Tage. Längere Laufzeiten sind jederzeit möglich.' },
        { frage: 'Übernehmen Sie auch die Gestaltung der Werbemittel?', antwort: 'Ja, unser Grafikteam gestaltet Plakate, Folien und digitale Motive.' },
        { frage: 'Welche Genehmigungen braucht eine Fahrzeugbeschriftung?', antwort: 'In der Regel keine – wir beraten Sie zu Sonderfällen.' },
      ],
    },
  },
  {
    name: 'cta · gelb',
    block: {
      blockType: 'cta',
      ueberschrift: 'Bereit für Ihr\nnächstes Projekt?',
      text: 'Lassen Sie uns über Ihre Werbeziele sprechen.',
      button: { label: 'Jetzt anfragen', url: '/kontakt' },
      yellow: true,
    },
  },
  {
    name: 'cta · schwarz',
    block: {
      blockType: 'cta',
      ueberschrift: 'Außenwerbungskampagnen planen',
      text: 'Wir beraten Sie unverbindlich.',
      button: { label: 'Beratung anfragen', url: '/kontakt' },
      yellow: false,
    },
  },
  {
    name: 'servicesSlider',
    block: {
      blockType: 'servicesSlider',
      ueberschrift: 'Was wir machen',
      items: [
        { titel: 'Plakatwerbung', kurztext: 'Auffällig. Präsent. Wirkungsvoll.', bild: bild('/images/figma/service-plakat.png', 'Plakatwerbung'), link: '/leistungen/plakatwerbung' },
        { titel: 'Folierung &\nBeschriftung', kurztext: 'Fahrzeuge. Schaufenster. Fassaden.', bild: bild('/images/figma/service-folie.png', 'Folierung'), link: '/leistungen/folierung' },
        { titel: 'Digitale\nWerbemittel', kurztext: 'Screens. Social Media. Online-Kampagnen.', bild: bild('/images/figma/service-digital.png', 'Digital'), link: '/leistungen/social-media' },
        { titel: 'Drucksachen', kurztext: 'Flyer. Broschüren. Geschäftsausstattung.', bild: bild('/images/figma/service-druck.png', 'Druck'), link: '/leistungen/grafikdesign' },
      ],
    },
  },
  {
    name: 'marquee',
    block: {
      blockType: 'marquee',
      eyebrow: 'Kunden',
      ueberschrift: 'Unsere Kunden',
      untertitel: 'Von Kultur bis Industrie – Marken, die in der Region sichtbar sein wollen.',
      names: ['Stadtwerke Regional', 'Fitness First', 'Mode Boutique Anna', 'Müller Bäckerei', 'Restaurant zur Linde', 'Immobilien Partner', 'Autohaus Schmidt', 'Techstart GmbH', 'Zahnarzt Dr. Weber', 'Blumen Berger', 'Café Seeblick', 'Druckerei Huber'],
    },
  },
  {
    name: 'testimonialsBlock',
    block: {
      blockType: 'testimonialsBlock',
      ueberschrift: 'Kundenstimmen',
      items: [
        { zitat: 'Exzellente Standortwahl und perfekte Ausführung. Unsere Markenbekanntheit ist durch die strategisch platzierten Plakate enorm gestiegen.', firma: 'Bodensee Events AG', name: 'Sandra Müller' },
        { zitat: 'Die Fahrzeugbeschriftung unserer gesamten Flotte lief reibungslos und pünktlich.', firma: 'Autohaus Schmidt', name: 'Thomas Schmidt' },
      ],
    },
  },
  {
    name: 'kanaele',
    block: {
      blockType: 'kanaele',
      ueberschrift: 'Kanäle',
      untertitel: 'Wir spielen Ihre Kampagne dort aus, wo Ihre Zielgruppe unterwegs ist.',
      items: [
        { titel: 'Instagram', text: 'Reels, Storys und Beiträge mit regionaler Ausspielung.', icon: 'instagram' },
        { titel: 'TikTok', text: 'Kurzvideos für junge Zielgruppen.', icon: 'tiktok' },
        { titel: 'Facebook', text: 'Veranstaltungen und lokale Gemeinschaften.', icon: 'facebook' },
        { titel: 'Google', text: 'Suchanzeigen und Unternehmensprofil.', icon: 'google' },
        { titel: 'YouTube', text: 'Bewegtbild vor und in Videos.', icon: 'youtube' },
      ],
    },
  },
  {
    name: 'betreuung',
    block: {
      blockType: 'betreuung',
      ueberschrift: 'Betreuung',
      schritte: [
        { titel: 'Erstgespräch', text: 'Wir lernen Ihr Unternehmen und Ihre Ziele kennen.' },
        { titel: 'Konzept', text: 'Sie erhalten einen Plan mit Kanälen, Motiven und Budget.' },
        { titel: 'Umsetzung', text: 'Wir setzen um und halten Sie auf dem Laufenden.' },
        { titel: 'Auswertung', text: 'Monatliche Berichte mit klaren Kennzahlen.' },
      ],
    },
  },
  {
    name: 'onlineKampagnen',
    block: {
      blockType: 'onlineKampagnen',
      ueberschrift: 'Online-Kampagnen',
      untertitel: 'Zielgenau ausspielen, laufend optimieren.',
      items: [
        { titel: 'Zielgruppenanalyse', text: 'Wir definieren, wen Sie erreichen wollen.', icon: 'zielgruppe' },
        { titel: 'Motive', text: 'Anzeigenmotive für alle Formate.', icon: 'motive' },
        { titel: 'Auswertung', text: 'Transparente Berichte zu Reichweite und Klicks.', icon: 'auswertung' },
      ],
    },
  },
  {
    name: 'echtNichtGeneriert',
    block: {
      blockType: 'echtNichtGeneriert',
      ueberschrift: 'Echt, nicht generiert',
      text: 'Wir fotografieren und filmen vor Ort – mit echten Menschen, echten Produkten und echten Orten.',
      punkte: [
        { titel: 'Vor Ort', text: 'Aufnahmen in Ihrem Betrieb.' },
        { titel: 'Authentisch', text: 'Keine Stockfotos, keine KI-Bilder.' },
        { titel: 'Nutzungsrechte', text: 'Uneingeschränkt für Ihre Kanäle.' },
      ],
    },
  },
  {
    name: 'wasWirAufnehmen',
    block: {
      blockType: 'wasWirAufnehmen',
      ueberschrift: 'Was wir aufnehmen',
      items: [
        { titel: 'Veranstaltungen', text: 'Messen, Feiern und Firmenevents.', icon: 'events' },
        { titel: 'Social Media', text: 'Hochkantvideos und Reels.', icon: 'social' },
        { titel: 'Imagefilme', text: 'Ihr Unternehmen in Bewegung.', icon: 'image' },
        { titel: 'Websitefotos', text: 'Team, Räume und Produkte.', icon: 'website' },
      ],
    },
  },
  {
    name: 'einMotiv',
    block: {
      blockType: 'einMotiv',
      ueberschrift: 'Ein Motiv, alle Formate',
      text: 'Einmal gestaltet, überall einsetzbar – von der Visitenkarte bis zur Großfläche.',
      items: [
        { label: 'Visitenkarte', icon: 'visitenkarte' },
        { label: 'Social Post', icon: 'social' },
        { label: 'Reel', icon: 'reel' },
        { label: 'Plakat', icon: 'plakat' },
      ],
    },
  },
  {
    name: 'wasWirGestalten',
    block: {
      blockType: 'wasWirGestalten',
      ueberschrift: 'Was wir gestalten',
      items: [
        { titel: 'Logo und Marke', text: 'Erscheinungsbild mit Wiedererkennung.', icon: 'logo' },
        { titel: 'Drucksachen', text: 'Flyer, Broschüren, Geschäftsausstattung.', icon: 'druck' },
        { titel: 'Social Media', text: 'Vorlagen und Kampagnenmotive.', icon: 'social' },
        { titel: 'Plakate', text: 'Großflächen und City-Light-Poster.', icon: 'plakat' },
      ],
    },
  },
  {
    name: 'transporterFaahrt',
    block: {
      blockType: 'transporterFaahrt',
      ueberschrift: 'Ihr Transporter fährt Werbung',
      text: 'Eine Fahrzeugbeschriftung erreicht täglich tausende Menschen – ohne laufende Kosten.',
      punkte: [
        { titel: 'Dauerhaft sichtbar', text: 'Jeden Tag im Straßenverkehr.' },
        { titel: 'Einmalige Kosten', text: 'Keine Schaltkosten, keine Laufzeit.' },
        { titel: 'Hochwertig', text: 'Markenfolien mit langer Haltbarkeit.' },
      ],
    },
  },
  {
    name: 'wasWirBekleben',
    block: {
      blockType: 'wasWirBekleben',
      ueberschrift: 'Was wir bekleben',
      items: [
        { titel: 'Fahrzeuge', text: 'Vom Kleinwagen bis zum Sattelzug.', icon: 'fahrzeug' },
        { titel: 'Schaufenster', text: 'Sichtschutz, Werbung und Öffnungszeiten.', icon: 'schaufenster' },
        { titel: 'Schilder', text: 'Firmenschilder und Wegweiser.', icon: 'schilder' },
        { titel: 'Bauzäune', text: 'Banner für Baustellen und Veranstaltungen.', icon: 'bauzaun' },
      ],
    },
  },
]
