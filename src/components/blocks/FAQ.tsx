'use client'

import { useId, useState } from 'react'
import { JsonLd } from '@/components/JsonLd'
import { faqPageJsonLd } from '@/lib/seo'
import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type FAQItem = { frage: string; antwort: string }

export type FAQProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  fragen?: FAQItem[] | null
  layout?: 'accordion' | 'zweiSpalten'
}

export function buildFaqJsonLd(fragen: FAQItem[]) {
  return faqPageJsonLd(fragen)
}

function AccordionItem({
  item,
  open,
  onToggle,
  panelId,
  buttonId,
}: {
  item: FAQItem
  open: boolean
  onToggle: () => void
  panelId: string
  buttonId: string
}) {
  return (
    <div className="border-b border-white/15">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-4 py-5 text-left font-unbounded text-step font-extrabold text-white transition hover:text-brand-yellow"
        >
          <span>{item.frage}</span>
          <span
            className={`circle mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-pill bg-brand-yellow text-brand-black transition ${open ? 'rotate-45' : ''}`}
            aria-hidden
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className={open ? 'pb-6' : undefined}
      >
        {open ? (
          <p className="max-w-[60ch] font-poppins text-body leading-relaxed text-white/70">
            {item.antwort}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export function FAQ({
  eyebrow = 'FAQ',
  ueberschrift = 'Häufige Fragen',
  fragen,
  layout = 'accordion',
}: FAQProps) {
  const baseId = useId()
  const list = fragen?.filter((f) => f?.frage && f?.antwort) ?? []
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!list.length) return null

  return (
    <Section background="black">
      <JsonLd data={buildFaqJsonLd(list)} />
      <Container>
        {eyebrow ? (
          <p className="mb-4 font-poppins text-small font-bold tracking-[0.2em] text-brand-yellow uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <Heading size="section" className="max-w-[18ch] text-white">
            {ueberschrift}
          </Heading>
        ) : null}

        {layout === 'zweiSpalten' ? (
          <div className="mt-stack grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            {list.map((item, i) => (
              <div key={`${item.frage}-${i}`}>
                <h3 className="font-unbounded text-step font-extrabold text-white">
                  {item.frage}
                </h3>
                <p className="mt-3 font-poppins text-body leading-relaxed text-white/70">
                  {item.antwort}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-stack max-w-3xl">
            {list.map((item, i) => (
              <AccordionItem
                key={`${item.frage}-${i}`}
                item={item}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                panelId={`${baseId}-panel-${i}`}
                buttonId={`${baseId}-btn-${i}`}
              />
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
