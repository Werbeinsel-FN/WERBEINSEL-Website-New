'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { resolveMedia, type MediaLike } from '@/lib/media'
import { Container } from '@/components/ui/Container'

export type ReferenzSlideItem = {
  titel: string
  kurztext?: string | null
  bild?: MediaLike
  link?: string | null
  kategorie?: string | null
}

export type ReferenzSliderProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  untertitel?: string | null
  untertitelKlein?: boolean | null
  kategorie?: string | null
  items?: ReferenzSlideItem[] | null
  sectionId?: string | null
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-[48%] w-[48%]">
      <path
        d={dir === 'left' ? 'M15 6L9 12L15 18' : 'M9 6L15 12L9 18'}
        stroke="currentColor"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ReferenzSlider({
  eyebrow,
  ueberschrift = 'UNSERE ARBEITEN',
  untertitel,
  untertitelKlein,
  items,
  sectionId = 'arbeiten',
}: ReferenzSliderProps) {
  const slides = items?.filter((i) => i?.titel) ?? []
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  // Auch ohne Bilder die Struktur-Sektion zeigen (Lastenheft: Inhalte folgen später)
  if (!slides.length) {
    return (
      <section
        id={sectionId || undefined}
        className="flex flex-col gap-12 bg-white py-section"
        aria-label={ueberschrift || 'Referenzen'}
      >
        <Container>
          <div className="text-center">
            {eyebrow ? (
              <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="heading-section whitespace-pre-line text-brand-black">
              {ueberschrift}
            </h2>
            {untertitel ? (
              <p className="body-lead mx-auto mt-4 max-w-[567px] whitespace-pre-line text-center text-brand-black">
                {untertitel}
              </p>
            ) : null}
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section
      id={sectionId || undefined}
      className="flex flex-col gap-12 bg-white py-section"
      aria-roledescription="carousel"
      aria-label={ueberschrift || 'Referenzen'}
    >
      <Container>
        <div className="text-center">
          {eyebrow ? (
            <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="heading-section whitespace-pre-line text-brand-black">
            {ueberschrift}
          </h2>
          {untertitel ? (
            <p
              className={
                untertitelKlein
                  ? 'mx-auto mt-4 text-center font-poppins text-base font-normal leading-[1.5] text-brand-black md:mt-6'
                  : 'body-lead mx-auto mt-4 max-w-[567px] whitespace-pre-line text-center text-brand-black'
              }
            >
              {untertitel}
            </p>
          ) : null}
        </div>
      </Container>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 pl-5 sm:pl-8">
            {slides.map((slide, i) => {
              const media = resolveMedia(slide.bild, slide.titel)
              const inner = (
                <article className="h-full w-full overflow-hidden rounded-[24px] bg-brand-card-light">
                  <div className="relative h-full w-full overflow-hidden">
                    {media ? (
                      <Image
                        src={media.url}
                        alt={media.alt}
                        fill
                        sizes="(max-width: 640px) 70vw, 500px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-brand-card-dark" />
                    )}
                  </div>
                </article>
              )

              return (
                <div
                  key={`${slide.titel}-${i}`}
                  className="min-w-0 shrink-0 grow-0 basis-[min(280px,72vw)] sm:basis-[min(360px,55vw)] xl:basis-[500px]"
                  style={{ aspectRatio: '500 / 889' }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} von ${slides.length}`}
                >
                  {slide.link ? <Link href={slide.link}>{inner}</Link> : inner}
                </div>
              )
            })}
          </div>
        </div>

        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Vorherige Folie"
          className="absolute top-1/2 left-3 z-10 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-brand-black shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition disabled:opacity-40 sm:left-6 sm:size-[76px]"
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Nächste Folie"
          className="absolute top-1/2 right-3 z-10 grid size-14 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-brand-black shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition disabled:opacity-40 sm:right-6 sm:size-[76px]"
        >
          <Chevron dir="right" />
        </button>
      </div>
    </section>
  )
}
