import type { Payload } from 'payload'
import { getPayloadSafe } from '@/lib/payload'
import { resolveMedia } from '@/lib/media'
import {
  navigation as seedNav,
  footer as seedFooter,
  einstellungen as seedEinstellungen,
  home as seedHome,
  leistungen as seedLeistungen,
  leistungenSlugs,
  type LeistungSlug,
  jobs as seedJobs,
  kontakt as seedKontakt,
  impressum as seedImpressum,
  datenschutz as seedDatenschutz,
  servicesPage as seedServices,
  formOptions as seedFormOptions,
} from '@/data/seed'
import type { PageBlock } from '@/components/RenderBlocks'

export type SiteChrome = {
  navigation: typeof seedNav
  footer: typeof seedFooter
  einstellungen: typeof seedEinstellungen
}

export type CmsPage = {
  titel: string
  slug: string
  metaDescription?: string
  blocks: PageBlock[]
}

function labelsToStrings(
  rows?: Array<{ label?: string | null } | null> | null,
): string[] {
  return (rows || []).map((r) => r?.label).filter((v): v is string => Boolean(v))
}

function mapJobDoc(doc: Record<string, any>) {
  return {
    id: String(doc.id),
    titel: String(doc.titel || ''),
    badges: (doc.badges || []).map((b: any) => (typeof b === 'string' ? b : b?.text)).filter(Boolean),
    standort: doc.standort || undefined,
    pensum: doc.pensum || undefined,
    aktiv: Boolean(doc.aktiv),
    intro: doc.intro || undefined,
    aufgaben: (doc.aufgaben || []).map((a: any) => (typeof a === 'string' ? a : a?.punkt)).filter(Boolean),
    anforderungen: (doc.anforderungen || [])
      .map((a: any) => (typeof a === 'string' ? a : a?.punkt))
      .filter(Boolean),
    benefits: (doc.benefits || []).map((a: any) => (typeof a === 'string' ? a : a?.punkt)).filter(Boolean),
  }
}

async function enrichBlocks(payload: Payload, blocks: PageBlock[]): Promise<PageBlock[]> {
  const [leistungen, referenzen, kunden, testimonials] = await Promise.all([
    payload.find({ collection: 'leistungen', limit: 100, sort: 'reihenfolge', depth: 2 }),
    payload.find({ collection: 'referenzen', limit: 100, sort: 'reihenfolge', depth: 2 }),
    payload.find({ collection: 'kundenlogos', limit: 200, sort: 'name', depth: 1 }),
    payload.find({ collection: 'testimonials', limit: 50, sort: 'reihenfolge', depth: 1 }),
  ])

  const leistungItems = leistungen.docs.map((d: any) => ({
    titel: d.titel,
    kurztext: d.kurztext,
    link: d.link,
    bild: d.bild,
  }))

  const kundenItems = kunden.docs
    .map((d: any) => {
      const name = typeof d.name === 'string' ? d.name.trim() : ''
      if (!name) return null
      const logo = resolveMedia(d.logo, name)
      return {
        name,
        logoUrl: logo?.url || null,
        logoAlt: logo?.alt || name,
      }
    })
    .filter(Boolean)

  const testimonialItems = testimonials.docs.map((d: any) => ({
    zitat: d.zitat,
    autor: d.autor,
    name: d.autor,
    firma: d.firma,
    rolle: d.firma,
  }))

  return blocks.map((block) => {
    if (block.blockType === 'servicesSlider' && !block.items?.length) {
      return { ...block, items: leistungItems }
    }
    if (block.blockType === 'marquee' && kundenItems.length) {
      return {
        ...block,
        items: kundenItems,
        names: kundenItems.map((k: any) => k.name),
      }
    }
    if (block.blockType === 'testimonialsBlock' && !block.items?.length && !block.testimonials?.length) {
      return { ...block, items: testimonialItems }
    }
    if (block.blockType === 'referenzSlider' && !block.items?.length) {
      const kat = block.kategorie && block.kategorie !== 'alle' ? block.kategorie : null
      const filtered = referenzen.docs.filter((d: any) => !kat || d.kategorie === kat)
      return {
        ...block,
        items: filtered.map((d: any) => ({
          titel: d.titel,
          bild: d.bild,
          kategorie: d.kategorie,
        })),
      }
    }
    return block
  })
}

function homeBlocksFromSeed(): PageBlock[] {
  return [
    seedHome.hero,
    seedHome.about,
    seedHome.services,
    seedHome.referenzen,
    seedHome.kunden,
    seedHome.testimonials,
    seedHome.cta,
  ] as PageBlock[]
}

export async function getSiteChrome(): Promise<SiteChrome> {
  const payload = await getPayloadSafe()
  if (!payload) {
    return {
      navigation: seedNav,
      footer: seedFooter,
      einstellungen: seedEinstellungen,
    }
  }

  try {
    const [navigation, footer, einstellungen] = await Promise.all([
      payload.findGlobal({ slug: 'navigation', depth: 0 }),
      payload.findGlobal({ slug: 'footer', depth: 0 }),
      payload.findGlobal({ slug: 'einstellungen', depth: 0 }),
    ])

    const e = einstellungen as any
    const n = navigation as any
    const f = footer as any

    return {
      navigation: {
        items: n?.items?.length ? n.items : seedNav.items,
      },
      footer: {
        tagline: f?.tagline || seedFooter.tagline,
        spalten: f?.spalten?.length ? f.spalten : seedFooter.spalten,
        rechtslinks: f?.rechtslinks?.length ? f.rechtslinks : seedFooter.rechtslinks,
        socials: e?.socials?.length ? e.socials : seedFooter.socials,
      },
      einstellungen: {
        firma: e?.firma || seedEinstellungen.firma,
        url: e?.url || seedEinstellungen.url,
        telefon: e?.telefon || seedEinstellungen.telefon,
        email: e?.email || seedEinstellungen.email,
        adresse: {
          strasse: e?.adresse?.strasse || seedEinstellungen.adresse.strasse,
          plz: e?.adresse?.plz || seedEinstellungen.adresse.plz,
          ort: e?.adresse?.ort || seedEinstellungen.adresse.ort,
        },
        socials: e?.socials?.length ? e.socials : seedEinstellungen.socials,
      },
    }
  } catch (err) {
    console.warn('getSiteChrome Fallback:', err)
    return {
      navigation: seedNav,
      footer: seedFooter,
      einstellungen: seedEinstellungen,
    }
  }
}

export async function getFormOptions() {
  const payload = await getPayloadSafe()
  if (!payload) return seedFormOptions
  try {
    const e = (await payload.findGlobal({ slug: 'einstellungen', depth: 0 })) as any
    return {
      services: labelsToStrings(e.formServices).length
        ? labelsToStrings(e.formServices)
        : seedFormOptions.services,
      budgets: labelsToStrings(e.formBudgets).length
        ? labelsToStrings(e.formBudgets)
        : seedFormOptions.budgets,
      zeitraeume: labelsToStrings(e.formZeitraeume).length
        ? labelsToStrings(e.formZeitraeume)
        : seedFormOptions.zeitraeume,
      verfuegbarAb: labelsToStrings(e.formVerfuegbarAb).length
        ? labelsToStrings(e.formVerfuegbarAb)
        : seedFormOptions.verfuegbarAb,
    }
  } catch {
    return seedFormOptions
  }
}

export async function getCmsPage(slug: string): Promise<CmsPage | null> {
  const payload = await getPayloadSafe()
  if (!payload) {
    if (slug === 'home') {
      return {
        titel: 'Startseite',
        slug: 'home',
        metaDescription:
          'WERBEINSEL – Ihre Agentur für klassische Werbung. Plakat, Folie, Pixel – Sichtbarkeit für Marken in der Region.',
        blocks: homeBlocksFromSeed(),
      }
    }
    if (leistungenSlugs.includes(slug as LeistungSlug)) {
      const page = seedLeistungen[slug as LeistungSlug]
      return {
        titel: page.titel,
        slug,
        metaDescription: page.metaDescription,
        blocks: page.blocks as PageBlock[],
      }
    }
    return null
  }

  try {
    const result = await payload.find({
      collection: 'pages',
      where: {
        and: [
          { slug: { equals: slug } },
          { status: { equals: 'veroeffentlicht' } },
        ],
      },
      limit: 1,
      depth: 2,
      draft: false,
    })
    const doc = result.docs[0] as any
    if (!doc) {
      // Fallback to seed if page not yet created in CMS
      if (slug === 'home') {
        return {
          titel: 'Startseite',
          slug: 'home',
          metaDescription:
            'WERBEINSEL – Ihre Agentur für klassische Werbung. Plakat, Folie, Pixel.',
          blocks: homeBlocksFromSeed(),
        }
      }
      if (leistungenSlugs.includes(slug as LeistungSlug)) {
        const page = seedLeistungen[slug as LeistungSlug]
        return {
          titel: page.titel,
          slug,
          metaDescription: page.metaDescription,
          blocks: page.blocks as PageBlock[],
        }
      }
      return null
    }

    const blocks = await enrichBlocks(payload, (doc.layout || []) as PageBlock[])
    return {
      titel: doc.titel,
      slug: doc.slug,
      metaDescription: doc.seo?.metaDescription || undefined,
      blocks,
    }
  } catch (err) {
    console.warn(`getCmsPage(${slug}) Fallback:`, err)
    if (slug === 'home') {
      return {
        titel: 'Startseite',
        slug: 'home',
        blocks: homeBlocksFromSeed(),
      }
    }
    if (leistungenSlugs.includes(slug as LeistungSlug)) {
      const page = seedLeistungen[slug as LeistungSlug]
      return {
        titel: page.titel,
        slug,
        metaDescription: page.metaDescription,
        blocks: page.blocks as PageBlock[],
      }
    }
    return null
  }
}

export async function getLeistungSlugs(): Promise<string[]> {
  const payload = await getPayloadSafe()
  if (!payload) return [...leistungenSlugs]
  try {
    const result = await payload.find({
      collection: 'pages',
      where: {
        and: [
          { status: { equals: 'veroeffentlicht' } },
          {
            slug: {
              in: [...leistungenSlugs],
            },
          },
        ],
      },
      limit: 20,
      depth: 0,
    })
    const fromCms = result.docs.map((d: any) => d.slug as string)
    return fromCms.length ? fromCms : [...leistungenSlugs]
  } catch {
    return [...leistungenSlugs]
  }
}

export async function getJobsContent(): Promise<typeof seedJobs> {
  const payload = await getPayloadSafe()
  if (!payload) return seedJobs

  try {
    const [seite, jobs] = await Promise.all([
      payload.findGlobal({ slug: 'jobsSeite', depth: 0 }),
      payload.find({ collection: 'jobs', limit: 50, sort: 'reihenfolge', depth: 0 }),
    ])
    const s = seite as any
    const list = jobs.docs.length ? jobs.docs.map((d) => mapJobDoc(d as any)) : seedJobs.list

    return {
      hero: {
        titel: s?.hero?.titel || seedJobs.hero.titel,
        untertitel: s?.hero?.untertitel || seedJobs.hero.untertitel,
      },
      openingsTitle: s?.openingsTitle || seedJobs.openingsTitle,
      formTitle: s?.formTitle || seedJobs.formTitle,
      formSubtitle: s?.formSubtitle || seedJobs.formSubtitle,
      process: {
        ueberschrift: s?.process?.ueberschrift || seedJobs.process.ueberschrift,
        schritte: s?.process?.schritte?.length ? s.process.schritte : seedJobs.process.schritte,
      },
      cta: {
        ueberschrift: s?.cta?.ueberschrift || seedJobs.cta.ueberschrift,
        text: s?.cta?.text || seedJobs.cta.text,
        button: null as null,
      },
      list,
    }
  } catch (err) {
    console.warn('getJobsContent Fallback:', err)
    return seedJobs
  }
}

export async function getKontaktContent() {
  const payload = await getPayloadSafe()
  if (!payload) return seedKontakt
  try {
    const s = (await payload.findGlobal({ slug: 'kontaktSeite', depth: 0 })) as any
    return {
      hero: {
        titel: s?.hero?.titel || seedKontakt.hero.titel,
        untertitel: s?.hero?.untertitel || seedKontakt.hero.untertitel,
      },
      contactTitle: s?.contactTitle || seedKontakt.contactTitle,
      cards: {
        telefonLabel: s?.cards?.telefonLabel || seedKontakt.cards.telefonLabel,
        emailLabel: s?.cards?.emailLabel || seedKontakt.cards.emailLabel,
        adresseLabel: s?.cards?.adresseLabel || seedKontakt.cards.adresseLabel,
      },
    }
  } catch {
    return seedKontakt
  }
}

export async function getServicesContent() {
  const payload = await getPayloadSafe()
  if (!payload) return seedServices
  try {
    const s = (await payload.findGlobal({ slug: 'servicesSeite', depth: 2 })) as any
    let items = s?.items
    if (!items?.length) {
      const leistungen = await payload.find({
        collection: 'leistungen',
        limit: 12,
        sort: 'reihenfolge',
        depth: 2,
      })
      items = leistungen.docs.map((d: any, i: number) => ({
        nr: String(i + 1).padStart(2, '0'),
        kategorie: '',
        titel: d.titel,
        kurztext: d.kurztext,
        link: d.link,
        bild: d.bild,
      }))
    }
    return {
      hero: {
        titel: s?.hero?.titel || seedServices.hero.titel,
        untertitel: s?.hero?.untertitel || seedServices.hero.untertitel,
      },
      sectionTitle: s?.sectionTitle || seedServices.sectionTitle,
      items: items?.length ? items : seedServices.items,
      cta: {
        ueberschrift: s?.cta?.ueberschrift || seedServices.cta.ueberschrift,
        text: s?.cta?.text || seedServices.cta.text,
        button: {
          label: s?.cta?.button?.label || seedServices.cta.button.label,
          url: s?.cta?.button?.url || seedServices.cta.button.url,
        },
      },
    }
  } catch {
    return seedServices
  }
}

function linesFromArray(
  rows?: Array<{ zeile?: string | null } | null> | null,
  fallback?: string[],
): string[] {
  const mapped = (rows || []).map((r) => r?.zeile).filter((v): v is string => Boolean(v))
  return mapped.length ? mapped : fallback || []
}

export async function getImpressumContent(): Promise<typeof seedImpressum> {
  const payload = await getPayloadSafe()
  if (!payload) return seedImpressum
  try {
    const s = (await payload.findGlobal({ slug: 'impressum', depth: 0 })) as any
    if (!s?.firma && !s?.angabenTitel) return seedImpressum
    return {
      hero: { titel: s?.hero?.titel || seedImpressum.hero.titel },
      angabenTitel: s?.angabenTitel || seedImpressum.angabenTitel,
      firma: s?.firma || seedImpressum.firma,
      adresse: linesFromArray(s?.adresse, seedImpressum.adresse),
      kontaktTitel: s?.kontaktTitel || seedImpressum.kontaktTitel,
      kontaktZeilen: linesFromArray(s?.kontaktZeilen, seedImpressum.kontaktZeilen),
      ustTitel: s?.ustTitel || seedImpressum.ustTitel,
      ustText: s?.ustText || seedImpressum.ustText,
      verantwortlichTitel: s?.verantwortlichTitel || seedImpressum.verantwortlichTitel,
      verantwortlichZeilen: linesFromArray(
        s?.verantwortlichZeilen,
        seedImpressum.verantwortlichZeilen,
      ),
      disclaimerTitel: s?.disclaimerTitel || seedImpressum.disclaimerTitel,
      disclaimerAbschnitte: s?.disclaimerAbschnitte?.length
        ? s.disclaimerAbschnitte.map((a: any) => ({
            titel: a.titel,
            absatze: (a.absatze || []).map((x: any) => x.text || x).filter(Boolean),
          }))
        : seedImpressum.disclaimerAbschnitte,
    }
  } catch {
    return seedImpressum
  }
}

export type DatenschutzContent = {
  hero: { titel: string }
  abschnitte: Array<{
    titel: string
    unterabschnitte: Array<{ titel: string; text: string }>
  }>
}

export async function getDatenschutzContent(): Promise<DatenschutzContent> {
  const payload = await getPayloadSafe()
  if (!payload) {
    // Seed uses placeholder counts – expose as editable-shaped structure for the page
    return {
      hero: seedDatenschutz.hero,
      abschnitte: seedDatenschutz.abschnitte.map((a) => ({
        titel: a.titel,
        unterabschnitte: a.unterabschnitte.map((u) => ({
          titel: u.titel,
          text: Array.from({ length: u.absatze }, () => seedDatenschutz.platzhalter).join('\n\n'),
        })),
      })),
    }
  }
  try {
    const s = (await payload.findGlobal({ slug: 'datenschutz', depth: 0 })) as any
    if (!s?.abschnitte?.length) {
      return {
        hero: seedDatenschutz.hero,
        abschnitte: seedDatenschutz.abschnitte.map((a) => ({
          titel: a.titel,
          unterabschnitte: a.unterabschnitte.map((u) => ({
            titel: u.titel,
            text: Array.from({ length: u.absatze }, () => seedDatenschutz.platzhalter).join('\n\n'),
          })),
        })),
      }
    }
    return {
      hero: { titel: s?.hero?.titel || seedDatenschutz.hero.titel },
      abschnitte: s.abschnitte.map((a: any) => ({
        titel: a.titel,
        unterabschnitte: (a.unterabschnitte || []).map((u: any) => ({
          titel: u.titel,
          text: u.text || '',
        })),
      })),
    }
  } catch {
    return {
      hero: seedDatenschutz.hero,
      abschnitte: seedDatenschutz.abschnitte.map((a) => ({
        titel: a.titel,
        unterabschnitte: a.unterabschnitte.map((u) => ({
          titel: u.titel,
          text: Array.from({ length: u.absatze }, () => seedDatenschutz.platzhalter).join('\n\n'),
        })),
      })),
    }
  }
}
