import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export type CTAProps = {
  ueberschrift: string
  text?: string | null
  button?: { label: string; url: string } | null
  /** Default true (gelbe CTA). false = schwarze Variante. */
  yellow?: boolean | null
}

export function CTA({ ueberschrift, text, button, yellow = true }: CTAProps) {
  const isYellow = yellow !== false

  return (
    <section
      className={`flex flex-col items-stretch justify-center self-stretch py-section ${
        isYellow ? 'bg-brand-yellow' : 'bg-brand-black'
      }`}
    >
      <Container className="flex flex-col items-center text-center">
        <h2
          className={`heading-section mx-auto whitespace-pre-line uppercase ${
            isYellow
              ? 'max-w-[900px] text-brand-black'
              : 'max-w-[1200px] text-brand-yellow'
          }`}
        >
          {ueberschrift}
        </h2>
        {text ? (
          <p
            className={`body-lead mx-auto mt-6 whitespace-pre-line ${
              isYellow
                ? 'max-w-[508px] text-brand-black'
                : 'max-w-[850px] text-white'
            }`}
          >
            {text}
          </p>
        ) : null}
        {button?.label && button?.url ? (
          <div className="mt-8 md:mt-10">
            <Button
              href={button.url}
              variant="primary"
              onYellow={isYellow}
              size="lg"
              className={!isYellow ? 'font-bold' : undefined}
            >
              {button.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  )
}
