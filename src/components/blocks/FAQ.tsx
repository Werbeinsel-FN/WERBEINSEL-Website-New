'use client'

import { useId, useState } from 'react'
import { JsonLd } from '@/components/JsonLd'
import { faqPageJsonLd } from '@/lib/seo'

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
          className="flex w-full items-start justify-between gap-4 py-5 text-left font-unbounded text-lg font-extrabold text-white transition hover:text-brand-yellow md:text-xl"
        >
          <span>{item.frage}</span>
          <span
            className={`circle mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-black transition ${open ? 'rotate-45' : ''}`}
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
          <p className="max-w-[60ch] font-poppins text-base leading-relaxed text-white/70">
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
    <section className="section-pad bg-brand-black text-white">
      <JsonLd data={buildFaqJsonLd(list)} />
      <div className="container-site">
        {eyebrow ? (
          <p className="mb-4 font-poppins text-sm font-bold tracking-[0.2em] text-brand-yellow uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="max-w-[18ch] font-unbounded text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white">
            {ueberschrift}
          </h2>
        ) : null}

        {layout === 'zweiSpalten' ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
            {list.map((item, i) => (
              <div key={`${item.frage}-${i}`}>
                <h3 className="font-unbounded text-lg font-extrabold text-white md:text-xl">
                  {item.frage}
                </h3>
                <p className="mt-3 font-poppins text-base leading-relaxed text-white/70">
                  {item.antwort}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 max-w-3xl">
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
      </div>
    </section>
  )
}
