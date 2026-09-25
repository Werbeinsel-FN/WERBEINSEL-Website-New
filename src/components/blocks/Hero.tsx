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
        className={`flex flex-col items-stretch justify-center self-stretch py-20 md:py-32 ${
          hintergrund ? '' : 'bg-brand-yellow'
        }`}
        style={hintergrund ? { backgroundColor: hintergrund } : undefined}
      >
        <div className="mx-auto flex w-full max-w-[1780px] flex-col items-center gap-6 px-4 text-center sm:px-6 md:px-8">
          <h1 className="heading-hero mx-auto w-full max-w-[1700px] font-black uppercase text-brand-black xl:whitespace-nowrap">
            {titel}
          </h1>
          {untertitel ? (
            <p className="body-lead mx-auto max-w-[1000px] whitespace-pre-line text-brand-black">
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

  /*
   * Figma Section / Hero:
   * - section padding 96px
   * - card: max 1100px, radius 40px, padding 64px
   * - Display/Hero: Unbounded 88/900, lh 95%, tracking -1.76px, uppercase, max 972px
   * - Body/Lead: Poppins 22/500, lh 160%, max ~413px, margin-top 24px
   * - buttons: gap 16px, margin-top 48px, padding 16×32, height 62px
   */
  return (
    <section className="relative overflow-hidden">
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
          style={{ background: 'var(--gradient-hero-fallback)' }}
          aria-hidden
        />
      )}
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 flex items-center justify-center px-5 py-14 sm:px-8 md:py-24">
        <div className="w-full max-w-[1100px] rounded-[40px] bg-brand-yellow px-6 py-10 text-center sm:px-12 sm:py-12 md:p-16">
          <h1 className="heading-hero mx-auto max-w-[972px] whitespace-pre-line font-black text-brand-black">
            {titel}
          </h1>
          {untertitel ? (
            <p className="body-lead mx-auto mt-6 max-w-[413px] whitespace-pre-line text-brand-black">
              {untertitel}
            </p>
          ) : null}
          {buttons?.length ? (
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:items-center">
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
