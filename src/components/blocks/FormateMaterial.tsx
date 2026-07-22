import Image from 'next/image'
import { resolveMedia, type MediaLike } from '@/lib/media'

export type FormatItem = {
  name: string
  beschreibung?: string | null
  bild?: MediaLike
}

export type FormateMaterialProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  formate?: FormatItem[] | null
}

export function FormateMaterial({
  eyebrow,
  ueberschrift = 'Formate & Material',
  formate,
}: FormateMaterialProps) {
  const list = formate?.filter((f) => f?.name) ?? []
  if (!list.length) return null

  return (
    <section className="section-pad bg-brand-black text-white">
      <div className="container-site">
        {eyebrow ? (
          <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="max-w-[16ch] heading-section">
            {ueberschrift}
          </h2>
        ) : null}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((format, i) => {
            const media = resolveMedia(format.bild, format.name)
            return (
              <article
                key={`${format.name}-${i}`}
                className="overflow-hidden rounded-3xl bg-brand-card-dark"
              >
                {media ? (
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={media.url}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6 md:p-7">
                  <h3 className="font-unbounded text-xl font-extrabold text-white">{format.name}</h3>
                  {format.beschreibung ? (
                    <p className="mt-3 font-poppins text-sm leading-relaxed text-white/65 md:text-base">
                      {format.beschreibung}
                    </p>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
