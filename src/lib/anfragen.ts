import { getPayloadSafe } from '@/lib/payload'

/** Speichert Einsendung in Collection „anfragen" (+ optional Datei in Media). */
export async function persistAnfrage(opts: {
  typ: 'kontakt' | 'bewerbung'
  daten: Record<string, unknown>
  file?: File | null
}): Promise<{ id?: string | number; fileUrl?: string | null }> {
  const payload = await getPayloadSafe()
  if (!payload) {
    console.warn('[anfragen] Payload nicht verfügbar – Speicherung übersprungen.')
    return {}
  }

  let dateiId: number | string | undefined
  let fileUrl: string | null = null

  if (opts.file && opts.file.size > 0) {
    try {
      const buffer = Buffer.from(await opts.file.arrayBuffer())
      const media = await payload.create({
        collection: 'media',
        data: {
          alt: `Bewerbung Anhang: ${opts.file.name}`,
        },
        file: {
          data: buffer,
          mimetype: opts.file.type || 'application/octet-stream',
          name: opts.file.name,
          size: opts.file.size,
        },
        overrideAccess: true,
      })
      dateiId = media.id
      fileUrl = typeof media.url === 'string' ? media.url : null
    } catch (err) {
      console.error('[anfragen] Media-Upload fehlgeschlagen:', err)
    }
  }

  try {
    const doc = await payload.create({
      collection: 'anfragen',
      data: {
        typ: opts.typ,
        daten: opts.daten,
        ...(dateiId != null ? { datei: dateiId as number } : {}),
      } as any,
      overrideAccess: true,
    })
    return { id: doc.id, fileUrl }
  } catch (err) {
    console.error('[anfragen] Speicherung fehlgeschlagen:', err)
    return { fileUrl }
  }
}
