import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

export type EchtNichtGeneriertPunkt = {
  titel: string
  text?: string | null
}

export type EchtNichtGeneriertProps = {
  ueberschrift?: string | null
  text?: string | null
  punkte?: EchtNichtGeneriertPunkt[] | null
}

function Graphic() {
  return (
    <svg
      viewBox="0 0 440 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full"
      aria-hidden
    >
      <path
        opacity="0.3"
        d="M220 424C332.666 424 424 332.666 424 220C424 107.334 332.666 16 220 16C107.334 16 16 107.334 16 220C16 332.666 107.334 424 220 424Z"
        className="stroke-brand-yellow"
        strokeWidth="2"
      />
      <path
        d="M410 220C409.992 253.348 401.207 286.107 384.528 314.984C367.849 343.862 343.863 367.841 314.981 384.511C286.098 401.182 253.337 409.957 219.989 409.955C186.641 409.953 153.88 401.174 125 384.5L410 220Z"
        className="stroke-brand-yellow"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M315 384.5C286.12 401.174 253.359 409.953 220.011 409.955C186.663 409.957 153.902 401.182 125.019 384.511C96.1371 367.841 72.1512 343.862 55.472 314.984C38.7928 286.107 30.0079 253.348 30 220L315 384.5Z"
        className="stroke-brand-yellow"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M125.001 384.5C96.1379 367.818 72.1725 343.836 55.5109 314.961C38.8493 286.087 30.0781 253.337 30.0781 220C30.0781 186.663 38.8493 153.913 55.5109 125.039C72.1725 96.1644 96.1379 72.182 125.001 55.5V384.5Z"
        className="stroke-brand-yellow"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M30 220C30.0079 186.652 38.7928 153.893 55.472 125.016C72.1512 96.1383 96.1371 72.1594 125.019 55.4888C153.902 38.8181 186.663 30.0428 220.011 30.0448C253.359 30.0468 286.12 38.8259 315 55.5L30 220Z"
        className="stroke-brand-yellow"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M125 55.5C153.88 38.8259 186.641 30.0468 219.989 30.0448C253.337 30.0428 286.098 38.8181 314.981 55.4888C343.863 72.1594 367.849 96.1383 384.528 125.016C401.207 153.893 409.992 186.652 410 220L125 55.5Z"
        className="stroke-brand-yellow"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        opacity="0.5"
        d="M315 55.5C343.863 72.182 367.828 96.1644 384.49 125.039C401.151 153.913 409.922 186.663 409.922 220C409.922 253.337 401.151 286.087 384.49 314.961C367.828 343.836 343.863 367.818 315 384.5V55.5Z"
        className="stroke-brand-yellow"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M220 254C238.778 254 254 238.778 254 220C254 201.222 238.778 186 220 186C201.222 186 186 201.222 186 220C186 238.778 201.222 254 220 254Z"
        className="fill-brand-yellow"
      />
    </svg>
  )
}

export function EchtNichtGeneriert({
  ueberschrift = 'ECHT. NICHT GENERIERT.',
  text,
  punkte,
}: EchtNichtGeneriertProps) {
  const list = punkte?.filter((p) => p?.titel) ?? []

  return (
    <Section background="black">
      <Container className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-[88px]">
        <div className="w-full max-w-[min(100%,440px)] shrink-0 lg:w-[min(100%,440px)]">
          <Graphic />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
          <Heading size="section" className="w-full text-brand-yellow">
            {ueberschrift}
          </Heading>

          {text ? (
            <p className="body-lead w-full max-w-[1188px] text-white">
              {text}
            </p>
          ) : null}

          {list.length ? (
            <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {list.map((punkt) => (
                <div
                  key={punkt.titel}
                  className="flex min-w-0 flex-1 flex-col items-start gap-2.5 border-t-[3px] border-brand-yellow pt-5"
                >
                  <h3 className="w-full font-unbounded text-step font-bold leading-[1.5] text-brand-yellow [text-transform:none]">
                    {punkt.titel}
                  </h3>
                  {punkt.text ? (
                    <p className="w-full font-poppins text-body font-normal leading-[1.5] text-brand-muted">
                      {punkt.text}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  )
}
