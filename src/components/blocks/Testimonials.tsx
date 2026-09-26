'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type TestimonialItem = {
  zitat: string
  /** CMS-Feld */
  autor?: string | null
  /** Seed-/Alias-Feld für Autor */
  name?: string | null
  firma?: string | null
  rolle?: string | null
}

export type TestimonialsProps = {
  ueberschrift?: string | null
  testimonials?: TestimonialItem[] | null
  items?: TestimonialItem[] | null
}

function ChevronLeftIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M40 48L24 32L40 16"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M24 16L40 32L24 48"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Testimonials({ ueberschrift, testimonials, items }: TestimonialsProps) {
  const raw = testimonials ?? items ?? []
  const list = raw
    .map((t) => ({
      zitat: t.zitat,
      autor: t.autor || t.name || '',
      firma: t.firma || t.rolle || null,
    }))
    .filter((t) => t.zitat && t.autor)

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })
  const [selected, setSelected] = useState(0)

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  if (!list.length) return null

  return (
    <Section
      background="black"
      className="relative flex min-h-[480px] flex-col justify-center md:min-h-[640px] lg:min-h-[820px]"
      aria-roledescription="carousel"
      aria-label={ueberschrift || 'Kundenstimmen'}
    >
      {ueberschrift ? (
        <Container>
          <Heading size="section" className="mb-stack text-center text-white">{ueberschrift}</Heading>
        </Container>
      ) : null}

      {/* Desktop: arrows on the sides */}
      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        aria-label="Vorheriges Zitat"
        className="absolute top-1/2 left-6 z-10 hidden -translate-y-1/2 text-white/90 transition hover:text-white lg:grid lg:place-items-center xl:left-12"
      >
        <ChevronLeftIcon />
      </button>

      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        aria-label="Nächstes Zitat"
        className="absolute top-1/2 right-6 z-10 hidden -translate-y-1/2 text-white/90 transition hover:text-white lg:grid lg:place-items-center xl:right-12"
      >
        <ChevronRightIcon />
      </button>

      <Container variant="text">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {list.map((item, i) => (
              <div
                key={`${item.autor}-${i}`}
                className="min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} von ${list.length}`}
                aria-hidden={i !== selected}
              >
                <blockquote className="flex flex-col items-center text-center">
                  <p className="font-poppins text-[clamp(1.35rem,2.8vw,2.5rem)] font-semibold leading-[1.4] text-white">
                    &ldquo;{item.zitat}&rdquo;
                  </p>

                  <footer className="flex w-full flex-col items-center pt-10 md:pt-12">
                    <cite className="not-italic">
                      {item.firma ? (
                        <span className="block font-poppins text-step font-bold leading-[1.5] text-white">
                          {item.firma}
                        </span>
                      ) : null}
                      <span className="mt-0 block font-poppins text-body font-normal leading-[1.5] text-white/80">
                        {item.autor}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet/Mobile: equal pill track · Desktop: yellow 32×12 + round dots */}
        <div
          className="mx-auto mt-8 flex w-full max-w-[420px] items-center justify-center gap-2 lg:mt-8 lg:max-w-none"
          role="tablist"
          aria-label="Testimonials"
        >
          {list.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Zitat ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`rounded-pill p-0 transition-all ${
                i === selected
                  ? 'h-3 flex-1 bg-brand-yellow lg:w-8 lg:flex-none'
                  : 'h-3 flex-1 bg-white/35 hover:bg-white/50 lg:w-3 lg:flex-none'
              }`}
            />
          ))}
        </div>

        {/* Tablet + mobile: arrows under the quote (Figma) */}
        <div className="mt-8 flex items-center justify-center gap-8 lg:hidden">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Vorheriges Zitat"
            className="text-white/90"
          >
            <ChevronLeftIcon className="h-12 w-12 md:h-16 md:w-16" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Nächstes Zitat"
            className="text-white/90"
          >
            <ChevronRightIcon className="h-12 w-12 md:h-16 md:w-16" />
          </button>
        </div>
      </Container>
    </Section>
  )
}
