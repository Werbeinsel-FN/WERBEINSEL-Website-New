'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { resolveMedia, type MediaLike } from '@/lib/media'

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
  kategorie?: string | null
  items?: ReferenzSlideItem[] | null
}

export function ReferenzSlider({
  eyebrow,
  ueberschrift = 'UNSERE ARBEITEN',
  untertitel,
  items,
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

  if (!slides.length) return null

  /*
   * Figma Section / Portfolio:
   * - padding 128px, gap 64px title→slider
   * - Heading/Section 56 Unbounded · Body/Lead 22 Poppins max ~567
   * - cards 500×889, radius 24, gap 32
   * - yellow prev/next overlays on slider sides
   */
  return (
    <section
      id="arbeiten"
      className="bg-white py-14 md:py-32"
      aria-roledescription="carousel"
      aria-label={ueberschrift || 'Referenzen'}
    >
      <div className="mx-auto w-full max-w-[1780px] px-5 sm:px-8">
        <div className="mx-auto max-w-[840px] text-center">
          {eyebrow ? (
            <p className="mb-3 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="heading-section whitespace-pre-line text-brand-black md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {ueberschrift}
          </h2>
          {untertitel ? (
            <p className="body-lead mx-auto mt-4 max-w-[567px] whitespace-pre-line text-brand-black md:text-[22px]">
              {untertitel}
            </p>
          ) : null}
        </div>
      </div>

      <div className="relative mt-10 md:mt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
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
                  className="min-w-0 shrink-0 grow-0 basis-[min(500px,78vw)]"
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

        {/* Figma: yellow round arrows overlaid on the images */}
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Vorherige Referenz"
          className="circle absolute top-1/2 left-4 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-2xl text-brand-black disabled:opacity-40 md:left-8"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Nächste Referenz"
          className="circle absolute top-1/2 right-4 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-brand-yellow text-2xl text-brand-black disabled:opacity-40 md:right-8"
        >
          ›
        </button>
      </div>
    </section>
  )
}
