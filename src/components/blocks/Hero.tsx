import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { resolveMedia, type MediaLike } from '@/lib/media'

type HeroButton = {
  label: string
  url: string
  stil?: 'primary' | 'secondary' | null
}

export type HeroProps = {
  variante?: 'bildKarte' | 'einfach' | null
  bild?: MediaLike
  titel: string
  untertitel?: string | null
  buttons?: HeroButton[] | null
  hintergrund?: string | null
}

export function Hero({
  variante = 'bildKarte',
  bild,
  titel,
  untertitel,
  buttons,
  hintergrund,
}: HeroProps) {
  const media = resolveMedia(bild, titel)

  if (variante === 'einfach') {
    return (
      <section
        className={`section-pad ${hintergrund ? '' : 'bg-brand-yellow'}`.trim()}
        style={hintergrund ? { backgroundColor: hintergrund } : undefined}
      >
        <div className="container-site text-center">
          <h1 className="heading-hero mx-auto max-w-[18ch] whitespace-pre-line text-brand-black">
            {titel}
          </h1>
          {untertitel ? (
            <p className="body-lead mx-auto mt-6 max-w-[42ch] whitespace-pre-line text-brand-black/80">
              {untertitel}
            </p>
          ) : null}
          {buttons?.length ? (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {buttons.map((btn) => (
                <Button
                  key={`${btn.label}-${btn.url}`}
                  href={btn.url}
                  variant={btn.stil === 'secondary' ? 'secondary' : 'primary'}
                  onYellow
                  size="lg"
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    )
  }

  /* Figma Section / Hero: Höhe ~771, Karte radius 40, padding 64, width 1100 */
  return (
    <section className="relative h-[min(92svh,771px)] min-h-[420px] overflow-hidden md:min-h-[560px]">
      {media ? (
        <Image
          src={media.url}
          alt={media.alt || ''}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 40%, #3a3a3a 0%, #111 45%, #000 100%)',
          }}
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-black/45" aria-hidden />

      <div className="relative z-10 flex h-full items-center justify-center px-5 py-12 sm:px-8 md:py-24">
        <div className="w-full max-w-[1100px] rounded-[40px] bg-brand-yellow px-6 py-10 text-center sm:px-12 sm:py-12 md:px-16 md:py-16">
          <h1 className="heading-hero whitespace-pre-line text-brand-black">{titel}</h1>
          {untertitel ? (
            <p className="body-lead mx-auto mt-6 max-w-[600px] whitespace-pre-line text-brand-black">
              {untertitel}
            </p>
          ) : null}
          {buttons?.length ? (
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
              {buttons.map((btn) => (
                <Button
                  key={`${btn.label}-${btn.url}`}
                  href={btn.url}
                  variant={btn.stil === 'secondary' ? 'secondary' : 'primary'}
                  onYellow
                  size="lg"
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
