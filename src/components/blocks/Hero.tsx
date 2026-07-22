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
          <h1 className="mx-auto max-w-[18ch] whitespace-pre-line font-unbounded text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.15] text-brand-black">
            {titel}
          </h1>
          {untertitel ? (
            <p className="mx-auto mt-6 max-w-[42ch] whitespace-pre-line font-poppins text-lg leading-relaxed text-brand-black/80 md:text-xl">
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

  return (
    <section className="relative min-h-[min(92svh,900px)] overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex min-h-[min(92svh,900px)] items-center justify-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-[42rem] rounded-[1.75rem] bg-brand-yellow px-7 py-10 text-center sm:rounded-[2rem] sm:px-14 sm:py-14 md:px-16 md:py-16">
          <h1 className="whitespace-pre-line font-unbounded text-[clamp(1.85rem,4.8vw,3.75rem)] font-extrabold leading-[1.12] tracking-tight text-brand-black">
            {titel}
          </h1>
          {untertitel ? (
            <p className="mx-auto mt-5 max-w-[34ch] whitespace-pre-line font-poppins text-base leading-relaxed text-brand-black/85 md:text-lg">
              {untertitel}
            </p>
          ) : null}
          {buttons?.length ? (
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
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
