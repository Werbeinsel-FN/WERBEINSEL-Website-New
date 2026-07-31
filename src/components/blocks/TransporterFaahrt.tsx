export type TransporterPunkt = {
  titel: string
  text?: string | null
}

export type TransporterFaahrtProps = {
  ueberschrift?: string | null
  text?: string | null
  punkte?: TransporterPunkt[] | null
}

function VanGraphic() {
  return (
    <svg
      viewBox="0 0 720 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto h-auto w-full max-w-[720px]"
      aria-hidden
    >
      <path
        d="M40 236V150C40 144.667 42.6667 141.333 48 140L118 128L176 62C180 56.6667 186 54 194 54H654C663.333 54 668 58.6667 668 68V236H40Z"
        stroke="#FFED00"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path opacity="0.5" d="M128 136L182 72H244V130L128 136Z" fill="#FFED00" />
      <path opacity="0.3" d="M300 60V236" stroke="#FFED00" strokeWidth="2" />
      <path
        d="M150 270C168.778 270 184 254.778 184 236C184 217.222 168.778 202 150 202C131.222 202 116 217.222 116 236C116 254.778 131.222 270 150 270Z"
        stroke="#FFED00"
        strokeWidth="3.5"
      />
      <path
        d="M556 270C574.778 270 590 254.778 590 236C590 217.222 574.778 202 556 202C537.222 202 522 217.222 522 236C522 254.778 537.222 270 556 270Z"
        stroke="#FFED00"
        strokeWidth="3.5"
      />
      <path
        opacity="0.5"
        d="M150 248C156.627 248 162 242.627 162 236C162 229.373 156.627 224 150 224C143.373 224 138 229.373 138 236C138 242.627 143.373 248 150 248Z"
        fill="#FFED00"
      />
      <path
        opacity="0.5"
        d="M556 248C562.627 248 568 242.627 568 236C568 229.373 562.627 224 556 224C549.373 224 544 229.373 544 236C544 242.627 549.373 248 556 248Z"
        fill="#FFED00"
      />
      <path
        d="M638 86H328C324.686 86 322 88.6863 322 92V206C322 209.314 324.686 212 328 212H638C641.314 212 644 209.314 644 206V92C644 88.6863 641.314 86 638 86Z"
        fill="#FFED00"
      />
    </svg>
  )
}

export function TransporterFaahrt({
  ueberschrift = 'IHR TRANSPORTER FÄHRT SOWIESO',
  text,
  punkte,
}: TransporterFaahrtProps) {
  const list = punkte?.filter((p) => p?.titel) ?? []

  return (
    <section className="bg-brand-black py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-[1780px] flex-col items-center gap-12 px-5 sm:px-8 md:gap-16">
        <div className="flex w-full max-w-[1716px] flex-col items-center gap-5 text-center">
          <h2 className="heading-section text-brand-yellow md:text-[56px] md:leading-none md:tracking-[-0.56px]">
            {ueberschrift}
          </h2>
          {text ? (
            <p className="body-lead max-w-[1120px] text-white md:text-[22px] md:leading-[1.6]">
              {text}
            </p>
          ) : null}
        </div>

        <VanGraphic />

        {list.length ? (
          <div className="grid w-full max-w-[1716px] grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-8">
            {list.map((punkt) => (
              <div
                key={punkt.titel}
                className="flex min-w-0 flex-1 flex-col items-start gap-2.5 border-t-[3px] border-brand-yellow pt-5"
              >
                <h3 className="w-full font-unbounded text-2xl font-bold leading-[1.5] text-brand-yellow [text-transform:none]">
                  {punkt.titel}
                </h3>
                {punkt.text ? (
                  <p className="w-full font-poppins text-base font-normal leading-[1.5] text-[#B8B8B8]">
                    {punkt.text}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
