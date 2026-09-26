/**
 * Befüllt Payload/Neon mit Inhalten aus src/data/seed.ts.
 * Aufruf: npm run seed:cms
 *
 * Idempotent: vorhandene Docs mit gleichem Slug/Titel werden aktualisiert.
 */
import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { getPayload } from 'payload'
import config from '../payload.config'
import {
  navigation,
  footer,
  einstellungen,
  home,
  leistungen,
  leistungenSlugs,
  jobs,
  kontakt,
  impressum,
  datenschutz,
  servicesPage,
  formOptions,
} from '../data/seed'

const mediaCache = new Map<string, number | string>()

function mimeFromName(name: string): string {
  const ext = path.extname(name).toLowerCase()
  if (ext === '.png') return 'image/png'
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.webp') return 'image/webp'
  if (ext === '.gif') return 'image/gif'
  if (ext === '.svg') return 'image/svg+xml'
  return 'application/octet-stream'
}

function isMediaObj(v: unknown): v is { url: string; alt?: string } {
  if (!v || typeof v !== 'object') return false
  const o = v as Record<string, unknown>
  if (typeof o.url !== 'string') return false
  // Button/Link-Objekte haben auch „url" – nur echte Bildpfade behandeln
  if (!o.url.startsWith('/images/') && !o.url.startsWith('/brand/') && !o.url.startsWith('/icons/')) {
    return false
  }
  return true
}

async function ensureMedia(payload: any, urlOrObj: unknown): Promise<number | string | null> {
  if (!isMediaObj(urlOrObj)) return null
  const urlPath = urlOrObj.url
  if (!urlPath.startsWith('/')) return null
  if (mediaCache.has(urlPath)) return mediaCache.get(urlPath)!

  const filePath = path.join(process.cwd(), 'public', urlPath.replace(/^\//, ''))
  if (!fs.existsSync(filePath)) {
    console.warn('  ⚠ Datei fehlt, überspringe Media:', urlPath)
    return null
  }

  const data = fs.readFileSync(filePath)
  const name = path.basename(filePath)
  const alt = urlOrObj.alt || name

  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: name } },
    limit: 1,
  })
  if (existing.docs[0]) {
    mediaCache.set(urlPath, existing.docs[0].id)
    return existing.docs[0].id
  }

  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    file: {
      data,
      mimetype: mimeFromName(name),
      name,
      size: data.length,
    },
  })
  mediaCache.set(urlPath, doc.id)
  console.log('  + Media', name)
  return doc.id
}

/** Entfernt Frontend-only Felder und ersetzt Bild-Objekte durch Media-IDs. */
async function sanitizeBlock(payload: any, block: Record<string, any>): Promise<Record<string, any>> {
  const type = block.blockType
  const out: Record<string, any> = { blockType: type }

  const copyKeys = Object.keys(block).filter((k) => k !== 'blockType' && k !== 'id')
  for (const key of copyKeys) {
    const val = block[key]

    // Collection-getrieben – nicht im Block speichern
    if (
      (type === 'referenzSlider' || type === 'servicesSlider') &&
      key === 'items'
    ) {
      continue
    }
    if (type === 'marquee' && key === 'names') continue
    if (type === 'testimonialsBlock' && (key === 'items' || key === 'testimonials')) continue

    if (isMediaObj(val)) {
      const id = await ensureMedia(payload, val)
      if (id != null) out[key] = id
      continue
    }

    if (Array.isArray(val)) {
      out[key] = []
      for (const item of val) {
        if (typeof item !== 'object' || item == null) {
          out[key].push(item)
          continue
        }
        const row: Record<string, any> = {}
        for (const [rk, rv] of Object.entries(item)) {
          if (isMediaObj(rv)) {
            const id = await ensureMedia(payload, rv)
            if (id != null) row[rk] = id
          } else {
            row[rk] = rv
          }
        }
        out[key].push(row)
      }
      continue
    }

    if (val && typeof val === 'object' && !Array.isArray(val)) {
      // button group etc.
      out[key] = { ...val }
      continue
    }

    out[key] = val
  }

  return out
}

async function upsertPage(
  payload: any,
  data: {
    titel: string
    slug: string
    metaDescription?: string
    blocks: Record<string, any>[]
  },
) {
  const layout = []
  for (const b of data.blocks) {
    layout.push(await sanitizeBlock(payload, b))
  }

  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: data.slug } },
    limit: 1,
  })

  const docData = {
    titel: data.titel,
    slug: data.slug,
    status: 'veroeffentlicht',
    layout,
    seo: {
      metaTitle: data.titel,
      metaDescription: data.metaDescription || '',
    },
  }

  if (existing.docs[0]) {
    await payload.update({
      collection: 'pages',
      id: existing.docs[0].id,
      data: docData,
    })
    console.log('  ~ Page', data.slug)
  } else {
    await payload.create({
      collection: 'pages',
      data: docData,
    })
    console.log('  + Page', data.slug)
  }
}

async function clearCollection(payload: any, slug: string) {
  const all = await payload.find({ collection: slug, limit: 500, depth: false })
  for (const doc of all.docs) {
    await payload.delete({ collection: slug, id: doc.id })
  }
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL fehlt in .env')
    process.exit(1)
  }
  if (!process.env.PAYLOAD_SECRET) {
    console.error('PAYLOAD_SECRET fehlt in .env')
    process.exit(1)
  }

  const payload = await getPayload({ config })
  console.log('Payload verbunden. Seede Inhalte…')

  // --- Globals ---
  await payload.updateGlobal({
    slug: 'navigation',
    data: { items: navigation.items },
  })
  console.log('✓ Navigation')

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      tagline: footer.tagline,
      spalten: footer.spalten,
      rechtslinks: footer.rechtslinks,
    },
  })
  console.log('✓ Footer')

  await payload.updateGlobal({
    slug: 'einstellungen',
    data: {
      firma: einstellungen.firma,
      url: einstellungen.url,
      telefon: einstellungen.telefon,
      email: einstellungen.email,
      whatsapp: einstellungen.whatsapp,
      adresse: einstellungen.adresse,
      socials: einstellungen.socials,
      formServices: formOptions.services.map((label) => ({ label })),
      formBudgets: formOptions.budgets.map((label) => ({ label })),
      formZeitraeume: formOptions.zeitraeume.map((label) => ({ label })),
      formVerfuegbarAb: formOptions.verfuegbarAb.map((label) => ({ label })),
    },
  })
  console.log('✓ Einstellungen')

  await payload.updateGlobal({
    slug: 'jobsSeite',
    data: {
      hero: jobs.hero,
      openingsTitle: jobs.openingsTitle,
      formTitle: jobs.formTitle,
      formSubtitle: jobs.formSubtitle,
      process: jobs.process,
      cta: { ueberschrift: jobs.cta.ueberschrift, text: jobs.cta.text },
    },
  })
  console.log('✓ JobsSeite')

  await payload.updateGlobal({
    slug: 'kontaktSeite',
    data: kontakt,
  })
  console.log('✓ KontaktSeite')

  // Services-Karten mit Media
  const serviceItems: any[] = []
  for (const item of servicesPage.items) {
    const bild = await ensureMedia(payload, item.bild)
    serviceItems.push({
      nr: item.nr,
      kategorie: item.kategorie,
      titel: item.titel,
      kurztext: item.kurztext,
      link: item.link,
      ...(bild != null ? { bild } : {}),
    })
  }
  await payload.updateGlobal({
    slug: 'servicesSeite',
    data: {
      hero: servicesPage.hero,
      sectionTitle: servicesPage.sectionTitle,
      items: serviceItems,
      cta: servicesPage.cta,
    },
  })
  console.log('✓ ServicesSeite')

  await payload.updateGlobal({
    slug: 'impressum',
    data: {
      hero: impressum.hero,
      angabenTitel: impressum.angabenTitel,
      firma: impressum.firma,
      adresse: impressum.adresse.map((zeile) => ({ zeile })),
      kontaktTitel: impressum.kontaktTitel,
      kontaktZeilen: impressum.kontaktZeilen.map((zeile) => ({ zeile })),
      ustTitel: impressum.ustTitel,
      ustText: impressum.ustText,
      verantwortlichTitel: impressum.verantwortlichTitel,
      verantwortlichZeilen: impressum.verantwortlichZeilen.map((zeile) => ({ zeile })),
      disclaimerTitel: impressum.disclaimerTitel,
      disclaimerAbschnitte: impressum.disclaimerAbschnitte.map((a) => ({
        titel: a.titel,
        absatze: a.absatze.map((text) => ({ text })),
      })),
    },
  })
  console.log('✓ Impressum')

  await payload.updateGlobal({
    slug: 'datenschutz',
    data: {
      hero: datenschutz.hero,
      abschnitte: datenschutz.abschnitte.map((a) => ({
        titel: a.titel,
        unterabschnitte: a.unterabschnitte.map((u) => ({
          titel: u.titel,
          text: Array.from({ length: u.absatze }, () => datenschutz.platzhalter).join('\n\n'),
        })),
      })),
    },
  })
  console.log('✓ Datenschutz')

  // --- Collections (frisch, damit Seed reproduzierbar ist) ---
  console.log('Leere Collections…')
  for (const slug of ['jobs', 'leistungen', 'referenzen', 'testimonials', 'kundenlogos'] as const) {
    await clearCollection(payload, slug)
  }

  for (const [i, job] of jobs.list.entries()) {
    await payload.create({
      collection: 'jobs',
      data: {
        titel: job.titel,
        badges: job.badges.map((text) => ({ text })),
        standort: job.standort,
        pensum: job.pensum,
        intro: job.intro,
        aufgaben: job.aufgaben.map((punkt) => ({ punkt })),
        anforderungen: job.anforderungen.map((punkt) => ({ punkt })),
        benefits: job.benefits.map((punkt) => ({ punkt })),
        aktiv: job.aktiv,
        reihenfolge: i,
      },
    })
  }
  console.log('✓ Jobs', jobs.list.length)

  for (const [i, item] of home.services.items.entries()) {
    const bild = await ensureMedia(payload, item.bild)
    await payload.create({
      collection: 'leistungen',
      data: {
        titel: item.titel,
        kurztext: item.kurztext,
        link: item.link,
        reihenfolge: i,
        ...(bild != null ? { bild } : {}),
      } as any,
    })
  }
  console.log('✓ Leistungen', home.services.items.length)

  const refSources: Array<{ titel: string; bild: any; kategorie: string; i: number }> = []
  for (const [i, item] of home.referenzen.items.entries()) {
    refSources.push({ titel: item.titel, bild: item.bild, kategorie: 'portfolio', i })
  }
  // Keine Fake-Referenzen aus Leistungsseiten – Lastenheft: Inhalte folgen später.
  for (const ref of refSources) {
    const bild = await ensureMedia(payload, ref.bild)
    if (!bild) continue
    await payload.create({
      collection: 'referenzen',
      data: {
        titel: ref.titel,
        bild,
        kategorie: ref.kategorie as 'plakat' | 'foto' | 'grafik' | 'folierung' | 'social',
        reihenfolge: ref.i,
      } as any,
    })
  }
  console.log('✓ Referenzen')

  for (const [i, t] of home.testimonials.items.entries()) {
    await payload.create({
      collection: 'testimonials',
      data: {
        zitat: t.zitat,
        autor: t.name,
        firma: t.rolle,
        reihenfolge: i,
      },
    })
  }
  console.log('✓ Testimonials')

  for (const name of home.kunden.names) {
    await payload.create({
      collection: 'kundenlogos',
      data: { name },
    })
  }
  console.log('✓ Kundenlogos', home.kunden.names.length)

  // --- Pages ---
  await upsertPage(payload, {
    titel: 'Startseite',
    slug: 'home',
    metaDescription:
      'WERBEINSEL – Ihre Agentur für klassische Werbung. Plakat, Folie, Pixel – Sichtbarkeit für Marken in der Region.',
    blocks: [
      home.hero,
      home.about,
      home.services,
      home.referenzen,
      home.kunden,
      home.testimonials,
      home.cta,
    ],
  })

  for (const slug of leistungenSlugs) {
    const page = leistungen[slug]
    await upsertPage(payload, {
      titel: page.titel,
      slug,
      metaDescription: page.metaDescription,
      blocks: page.blocks,
    })
  }

  console.log('\nFertig. Admin: /admin – Inhalte unter Seiten / Globals / Sammlungen.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
