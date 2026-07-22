import { Button } from '@/components/ui/Button'

export type CTAProps = {
  ueberschrift: string
  text?: string | null
  button?: { label: string; url: string } | null
  /** Default true (gelbe CTA). false = schwarze Variante. */
  yellow?: boolean
}

export function CTA({ ueberschrift, text, button, yellow = true }: CTAProps) {
  const isYellow = yellow !== false

  return (
    <section className={`section-pad ${isYellow ? 'bg-brand-yellow' : 'bg-brand-black'}`}>
      <div className="container-site text-center">
        <h2
          className={`mx-auto max-w-[16ch] font-unbounded text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[1.15] uppercase ${
            isYellow ? 'text-brand-black' : 'text-brand-yellow'
          }`}
        >
          {ueberschrift}
        </h2>
        {text ? (
          <p
            className={`mx-auto mt-6 max-w-[40ch] font-poppins text-lg leading-relaxed md:text-xl ${
              isYellow ? 'text-brand-black/80' : 'text-white/70'
            }`}
          >
            {text}
          </p>
        ) : null}
        {button?.label && button?.url ? (
          <div className="mt-10">
            <Button
              href={button.url}
              variant="primary"
              onYellow={isYellow}
              size="lg"
              className={!isYellow ? 'bg-brand-yellow text-brand-black hover:bg-brand-yellow/90' : undefined}
            >
              {button.label}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
