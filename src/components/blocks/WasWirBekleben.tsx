type IconKey = 'fahrzeug' | 'schaufenster' | 'schilder' | 'bauzaun'

export type BeklebenItem = {
  titel: string
  text?: string | null
  icon?: IconKey | null
}

export type WasWirBeklebenProps = {
  ueberschrift?: string | null
  items?: BeklebenItem[] | null
}

function CardGraphic({ name }: { name: IconKey }) {
  const cls = 'h-auto w-full max-w-[325px]'

  if (name === 'fahrzeug') {
    return (
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
        <g clipPath="url(#clip0_bekleben_fahrzeug)">
          <path
            d="M18 208V148C18 144 20 141.667 24 141L66 134L102 88C104.667 84 108.667 82 114 82H300C305.333 82 308 84.6667 308 90V208H18Z"
            className="stroke-brand-yellow"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path opacity="0.55" d="M72 138L106 94H142V134L72 138Z" className="fill-brand-yellow" />
          <path
            d="M292 102H172C169.791 102 168 103.791 168 106V174C168 176.209 169.791 178 172 178H292C294.209 178 296 176.209 296 174V106C296 103.791 294.209 102 292 102Z"
            className="fill-brand-yellow"
          />
          <path opacity="0.3" d="M160 86V208" className="stroke-brand-yellow" strokeWidth="1.5" />
          <path
            d="M76 229C87.598 229 97 219.598 97 208C97 196.402 87.598 187 76 187C64.402 187 55 196.402 55 208C55 219.598 64.402 229 76 229Z"
            className="stroke-brand-yellow"
            strokeWidth="2.5"
          />
          <path
            d="M256 229C267.598 229 277 219.598 277 208C277 196.402 267.598 187 256 187C244.402 187 235 196.402 235 208C235 219.598 244.402 229 256 229Z"
            className="stroke-brand-yellow"
            strokeWidth="2.5"
          />
          <path opacity="0.3" d="M0 234H325" className="stroke-brand-yellow" strokeWidth="2" strokeDasharray="14 10" />
          <path
            opacity="0.3"
            d="M164.5 262H21.5C19.567 262 18 263.567 18 265.5C18 267.433 19.567 269 21.5 269H164.5C166.433 269 168 267.433 168 265.5C168 263.567 166.433 262 164.5 262Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_bekleben_fahrzeug">
            <rect width="325" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (name === 'schaufenster') {
    return (
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
        <g clipPath="url(#clip0_bekleben_schaufenster)">
          <path opacity="0.55" d="M10 52H315L296 22H29L10 52Z" className="fill-brand-yellow" />
          <path
            d="M295 62H30C27.7909 62 26 63.7909 26 66V226C26 228.209 27.7909 230 30 230H295C297.209 230 299 228.209 299 226V66C299 63.7909 297.209 62 295 62Z"
            className="stroke-brand-yellow"
            strokeWidth="2.5"
          />
          <path opacity="0.3" d="M163 62V230" className="stroke-brand-yellow" strokeWidth="1.5" />
          <path
            d="M163 136C176.255 136 187 125.255 187 112C187 98.7452 176.255 88 163 88C149.745 88 139 98.7452 139 112C139 125.255 149.745 136 163 136Z"
            className="fill-brand-yellow"
          />
          <path
            d="M222.5 150H103.5C100.462 150 98 152.462 98 155.5C98 158.538 100.462 161 103.5 161H222.5C225.538 161 228 158.538 228 155.5C228 152.462 225.538 150 222.5 150Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M201.5 170H124.5C122.567 170 121 171.567 121 173.5C121 175.433 122.567 177 124.5 177H201.5C203.433 177 205 175.433 205 173.5C205 171.567 203.433 170 201.5 170Z"
            className="fill-brand-yellow"
          />
          <path opacity="0.3" d="M299 230H26V240H299V230Z" className="fill-brand-yellow" />
          <path opacity="0.3" d="M0 252H325" className="stroke-brand-yellow" strokeWidth="2" />
          <path
            opacity="0.3"
            d="M134.5 272H21.5C19.567 272 18 273.567 18 275.5C18 277.433 19.567 279 21.5 279H134.5C136.433 279 138 277.433 138 275.5C138 273.567 136.433 272 134.5 272Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_bekleben_schaufenster">
            <rect width="325" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (name === 'schilder') {
    return (
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
        <g clipPath="url(#clip0_bekleben_schilder)">
          <path opacity="0.3" d="M30 250V46H240V250" className="stroke-brand-yellow" strokeWidth="2.5" />
          <path
            opacity="0.3"
            d="M87 78H55C53.3431 78 52 79.3431 52 81V115C52 116.657 53.3431 118 55 118H87C88.6569 118 90 116.657 90 115V81C90 79.3431 88.6569 78 87 78Z"
            className="stroke-brand-yellow"
            strokeWidth="1.5"
          />
          <path
            opacity="0.3"
            d="M87 132H55C53.3431 132 52 133.343 52 135V169C52 170.657 53.3431 172 55 172H87C88.6569 172 90 170.657 90 169V135C90 133.343 88.6569 132 87 132Z"
            className="stroke-brand-yellow"
            strokeWidth="1.5"
          />
          <path
            opacity="0.3"
            d="M87 186H55C53.3431 186 52 187.343 52 189V223C52 224.657 53.3431 226 55 226H87C88.6569 226 90 224.657 90 223V189C90 187.343 88.6569 186 87 186Z"
            className="stroke-brand-yellow"
            strokeWidth="1.5"
          />
          <path
            opacity="0.3"
            d="M147 78H115C113.343 78 112 79.3431 112 81V115C112 116.657 113.343 118 115 118H147C148.657 118 150 116.657 150 115V81C150 79.3431 148.657 78 147 78Z"
            className="stroke-brand-yellow"
            strokeWidth="1.5"
          />
          <path
            opacity="0.3"
            d="M147 132H115C113.343 132 112 133.343 112 135V169C112 170.657 113.343 172 115 172H147C148.657 172 150 170.657 150 169V135C150 133.343 148.657 132 147 132Z"
            className="stroke-brand-yellow"
            strokeWidth="1.5"
          />
          <path
            opacity="0.3"
            d="M147 186H115C113.343 186 112 187.343 112 189V223C112 224.657 113.343 226 115 226H147C148.657 226 150 224.657 150 223V189C150 187.343 148.657 186 147 186Z"
            className="stroke-brand-yellow"
            strokeWidth="1.5"
          />
          <path opacity="0.55" d="M240 96H272" className="stroke-brand-yellow" strokeWidth="3" />
          <path
            d="M303 70H201C198.239 70 196 72.2386 196 75V117C196 119.761 198.239 122 201 122H303C305.761 122 308 119.761 308 117V75C308 72.2386 305.761 70 303 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M209 182H169C167.343 182 166 183.343 166 185V247C166 248.657 167.343 250 169 250H209C210.657 250 212 248.657 212 247V185C212 183.343 210.657 182 209 182Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            d="M209 146H169C167.343 146 166 147.343 166 149V163C166 164.657 167.343 166 169 166H209C210.657 166 212 164.657 212 163V149C212 147.343 210.657 146 209 146Z"
            className="fill-brand-yellow"
          />
          <path opacity="0.3" d="M0 250H325" className="stroke-brand-yellow" strokeWidth="2" />
          <path
            opacity="0.3"
            d="M154.5 272H21.5C19.567 272 18 273.567 18 275.5C18 277.433 19.567 279 21.5 279H154.5C156.433 279 158 277.433 158 275.5C158 273.567 156.433 272 154.5 272Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_bekleben_schilder">
            <rect width="325" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
      <g clipPath="url(#clip0_bekleben_bauzaun)">
        <path
          opacity="0.3"
          d="M105 70H19C17.3431 70 16 71.3431 16 73V217C16 218.657 17.3431 220 19 220H105C106.657 220 108 218.657 108 217V73C108 71.3431 106.657 70 105 70Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path opacity="0.3" d="M62 220V242" className="stroke-brand-yellow" strokeWidth="2" />
        <path
          opacity="0.3"
          d="M82 242H42C39.7909 242 38 243.791 38 246C38 248.209 39.7909 250 42 250H82C84.2091 250 86 248.209 86 246C86 243.791 84.2091 242 82 242Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M205 70H119C117.343 70 116 71.3431 116 73V217C116 218.657 117.343 220 119 220H205C206.657 220 208 218.657 208 217V73C208 71.3431 206.657 70 205 70Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path opacity="0.3" d="M162 220V242" className="stroke-brand-yellow" strokeWidth="2" />
        <path
          opacity="0.3"
          d="M182 242H142C139.791 242 138 243.791 138 246C138 248.209 139.791 250 142 250H182C184.209 250 186 248.209 186 246C186 243.791 184.209 242 182 242Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M305 70H219C217.343 70 216 71.3431 216 73V217C216 218.657 217.343 220 219 220H305C306.657 220 308 218.657 308 217V73C308 71.3431 306.657 70 305 70Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path opacity="0.3" d="M262 220V242" className="stroke-brand-yellow" strokeWidth="2" />
        <path
          opacity="0.3"
          d="M282 242H242C239.791 242 238 243.791 238 246C238 248.209 239.791 250 242 250H282C284.209 250 286 248.209 286 246C286 243.791 284.209 242 282 242Z"
          className="fill-brand-yellow"
        />
        <path
          d="M290 94H34C31.7909 94 30 95.7909 30 98V192C30 194.209 31.7909 196 34 196H290C292.209 196 294 194.209 294 192V98C294 95.7909 292.209 94 290 94Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.55"
          d="M30 99C32.7614 99 35 96.7614 35 94C35 91.2386 32.7614 89 30 89C27.2386 89 25 91.2386 25 94C25 96.7614 27.2386 99 30 99Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path
          opacity="0.55"
          d="M294 99C296.761 99 299 96.7614 299 94C299 91.2386 296.761 89 294 89C291.239 89 289 91.2386 289 94C289 96.7614 291.239 99 294 99Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path opacity="0.3" d="M0 250H325" className="stroke-brand-yellow" strokeWidth="2" />
        <path
          opacity="0.3"
          d="M124.5 272H21.5C19.567 272 18 273.567 18 275.5C18 277.433 19.567 279 21.5 279H124.5C126.433 279 128 277.433 128 275.5C128 273.567 126.433 272 124.5 272Z"
          className="fill-brand-yellow"
        />
      </g>
      <defs>
        <clipPath id="clip0_bekleben_bauzaun">
          <rect width="325" height="300" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const DEFAULT_ICONS: IconKey[] = ['fahrzeug', 'schaufenster', 'schilder', 'bauzaun']

export function WasWirBekleben({
  ueberschrift = 'WAS WIR BEKLEBEN',
  items,
}: WasWirBeklebenProps) {
  const list =
    items?.filter((i) => i?.titel).map((item, i) => ({
      ...item,
      icon: item.icon || DEFAULT_ICONS[i] || 'fahrzeug',
    })) ?? []

  if (!list.length) return null

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-[1780px] flex-col items-center gap-10 px-5 sm:px-8 md:gap-12">
        <h2 className="heading-section w-full max-w-[1716px] text-center text-brand-black">
          {ueberschrift}
        </h2>

        <div className="w-full max-w-[1716px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-8">
            {list.map((item) => (
              <article
                key={item.titel}
                className="@container flex min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-[24px] bg-brand-black p-6 sm:p-8 lg:p-6 xl:min-h-[720px] xl:p-10"
              >
                <CardGraphic name={item.icon as IconKey} />
                <div className="flex min-w-0 flex-col gap-2">
                  <h3 className="font-unbounded text-[clamp(0.875rem,9cqi,1.75rem)] font-extrabold leading-[1.15] tracking-normal text-brand-yellow [text-transform:none] [overflow-wrap:anywhere]">
                    {item.titel}
                  </h3>
                  {item.text ? (
                    <p className="font-poppins text-[clamp(0.75rem,5.5cqi,1rem)] font-normal leading-[1.5] text-brand-muted">
                      {item.text}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
