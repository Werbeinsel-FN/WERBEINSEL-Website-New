import Image from 'next/image'
import { resolveMedia, type MediaLike } from '@/lib/media'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

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
    <Section background="black">
      <Container>
        {eyebrow ? (
          <p className="mb-3 font-poppins text-small font-bold tracking-[0.2em] text-brand-yellow uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <Heading size="section" className="max-w-[16ch]">
            {ueberschrift}
          </Heading>
        ) : null}

        <div className="mt-stack grid gap-gap sm:grid-cols-2 lg:grid-cols-3">
          {list.map((format, i) => {
            const media = resolveMedia(format.bild, format.name)
            return (
              <article
                key={`${format.name}-${i}`}
                className="overflow-hidden rounded-card bg-brand-card-dark"
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
                <div className="p-card">
                  <h3 className="font-unbounded text-card font-extrabold text-white">{format.name}</h3>
                  {format.beschreibung ? (
                    <p className="mt-3 font-poppins text-body leading-relaxed text-white/65">
                      {format.beschreibung}
                    </p>
                  ) : null}
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
