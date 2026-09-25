type IconKey = 'events' | 'social' | 'image' | 'website'

export type AufnehmenItem = {
  titel: string
  text?: string | null
  icon?: IconKey | null
}

export type WasWirAufnehmenProps = {
  ueberschrift?: string | null
  items?: AufnehmenItem[] | null
}

function CardGraphic({ name }: { name: IconKey }) {
  const wrap = 'w-full max-w-[325px]'

  if (name === 'events') {
    return (
      <div className={wrap} aria-hidden>
        <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <g clipPath="url(#clip0_aufnehmen_events)">
            <path
              opacity="0.55"
              d="M8 42V18C8 11.3333 11.3333 8 18 8H42"
              className="stroke-brand-yellow"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              opacity="0.55"
              d="M317 42V18C317 11.3333 313.667 8 307 8H283"
              className="stroke-brand-yellow"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              opacity="0.55"
              d="M8 202V226C8 232.667 11.3333 236 18 236H42"
              className="stroke-brand-yellow"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              opacity="0.55"
              d="M317 202V226C317 232.667 313.667 236 307 236H283"
              className="stroke-brand-yellow"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M36 280C40.4183 280 44 276.418 44 272C44 267.582 40.4183 264 36 264C31.5817 264 28 267.582 28 272C28 276.418 31.5817 280 36 280Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M121 267H61C58.2386 267 56 269.239 56 272C56 274.761 58.2386 277 61 277H121C123.761 277 126 274.761 126 272C126 269.239 123.761 267 121 267Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.3"
              d="M323 244H2C0.89543 244 0 244.895 0 246C0 247.105 0.89543 248 2 248H323C324.105 248 325 247.105 325 246C325 244.895 324.105 244 323 244Z"
              className="fill-brand-yellow"
            />
            <path
              d="M194 244H2C0.89543 244 0 244.895 0 246C0 247.105 0.89543 248 2 248H194C195.105 248 196 247.105 196 246C196 244.895 195.105 244 194 244Z"
              className="fill-brand-yellow"
            />
            <path
              d="M92 176C106.359 176 118 164.359 118 150C118 135.641 106.359 124 92 124C77.6406 124 66 135.641 66 150C66 164.359 77.6406 176 92 176Z"
              className="fill-brand-yellow"
            />
            <path
              d="M62.1016 236C62.1016 194.267 72.0682 173.4 92.0016 173.4C111.935 173.4 121.902 194.267 121.902 236H62.1016Z"
              className="fill-brand-yellow"
            />
            <path
              d="M150 166C168.778 166 184 150.778 184 132C184 113.222 168.778 98 150 98C131.222 98 116 113.222 116 132C116 150.778 131.222 166 150 166Z"
              className="fill-brand-yellow"
            />
            <path
              d="M110.898 236C110.898 187.067 123.932 162.6 149.998 162.6C176.065 162.6 189.098 187.067 189.098 236H110.898Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M214 176C227.255 176 238 165.255 238 152C238 138.745 227.255 128 214 128C200.745 128 190 138.745 190 152C190 165.255 200.745 176 214 176Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M186.398 236C186.398 194.4 195.598 173.6 213.998 173.6C232.398 173.6 241.598 194.4 241.598 236H186.398Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M254 182C263.941 182 272 173.941 272 164C272 154.059 263.941 146 254 146C244.059 146 236 154.059 236 164C236 173.941 244.059 182 254 182Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M233.301 236C233.301 198.8 240.201 180.2 254.001 180.2C267.801 180.2 274.701 198.8 274.701 236H233.301Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M52 182C61.9411 182 70 173.941 70 164C70 154.059 61.9411 146 52 146C42.0589 146 34 154.059 34 164C34 173.941 42.0589 182 52 182Z"
              className="fill-brand-yellow"
            />
            <path
              opacity="0.55"
              d="M31.3008 236C31.3008 198.8 38.2008 180.2 52.0008 180.2C65.8008 180.2 72.7008 198.8 72.7008 236H31.3008Z"
              className="fill-brand-yellow"
            />
          </g>
          <defs>
            <clipPath id="clip0_aufnehmen_events">
              <rect width="325" height="300" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }

  if (name === 'social') {
    return (
      <div className={wrap} aria-hidden>
        <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <g opacity="0.3">
            <path
              d="M100.4 40H22C17.5817 40 14 43.5817 14 48V200C14 204.418 17.5817 208 22 208H100.4C104.818 208 108.4 204.418 108.4 200V48C108.4 43.5817 104.818 40 100.4 40Z"
              className="stroke-brand-yellow"
              strokeWidth="2.5"
            />
            <path d="M54 115.2L70.8 124L54 132.8V115.2Z" className="fill-brand-yellow" />
            <path
              d="M99.2 195.2H23.2C22.5373 195.2 22 195.737 22 196.4C22 197.063 22.5373 197.6 23.2 197.6H99.2C99.8627 197.6 100.4 197.063 100.4 196.4C100.4 195.737 99.8627 195.2 99.2 195.2Z"
              className="fill-brand-yellow"
            />
          </g>
          <g opacity="0.3">
            <path
              d="M307.4 40H229C224.582 40 221 43.5817 221 48V200C221 204.418 224.582 208 229 208H307.4C311.818 208 315.4 204.418 315.4 200V48C315.4 43.5817 311.818 40 307.4 40Z"
              className="stroke-brand-yellow"
              strokeWidth="2.5"
            />
            <path d="M261 115.2L277.8 124L261 132.8V115.2Z" className="fill-brand-yellow" />
            <path
              d="M306.2 195.2H230.2C229.537 195.2 229 195.737 229 196.4C229 197.063 229.537 197.6 230.2 197.6H306.2C306.863 197.6 307.4 197.063 307.4 196.4C307.4 195.737 306.863 195.2 306.2 195.2Z"
              className="fill-brand-yellow"
            />
          </g>
          <path
            d="M211 10H113C107.477 10 103 14.4772 103 20V210C103 215.523 107.477 220 113 220H211C216.523 220 221 215.523 221 210V20C221 14.4772 216.523 10 211 10Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path d="M153 104L174 115L153 126V104Z" className="fill-brand-yellow" />
          <path
            d="M209.5 204H114.5C113.672 204 113 204.672 113 205.5C113 206.328 113.672 207 114.5 207H209.5C210.328 207 211 206.328 211 205.5C211 204.672 210.328 204 209.5 204Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M139.5 266H106.5C104.567 266 103 267.567 103 269.5C103 271.433 104.567 273 106.5 273H139.5C141.433 273 143 271.433 143 269.5C143 267.567 141.433 266 139.5 266Z"
            className="fill-brand-yellow"
          />
          <path
            d="M187.5 266H154.5C152.567 266 151 267.567 151 269.5C151 271.433 152.567 273 154.5 273H187.5C189.433 273 191 271.433 191 269.5C191 267.567 189.433 266 187.5 266Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M235.5 266H202.5C200.567 266 199 267.567 199 269.5C199 271.433 200.567 273 202.5 273H235.5C237.433 273 239 271.433 239 269.5C239 267.567 237.433 266 235.5 266Z"
            className="fill-brand-yellow"
          />
        </svg>
      </div>
    )
  }

  if (name === 'image') {
    return (
      <div className={wrap} aria-hidden>
        <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <path
            opacity="0.3"
            d="M309 60H16C12.6863 60 10 62.6863 10 66V204C10 207.314 12.6863 210 16 210H309C312.314 210 315 207.314 315 204V66C315 62.6863 312.314 60 309 60Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            opacity="0.3"
            d="M36 70H24C22.8954 70 22 70.8954 22 72V80C22 81.1046 22.8954 82 24 82H36C37.1046 82 38 81.1046 38 80V72C38 70.8954 37.1046 70 36 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M36 188H24C22.8954 188 22 188.895 22 190V198C22 199.105 22.8954 200 24 200H36C37.1046 200 38 199.105 38 198V190C38 188.895 37.1046 188 36 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M74 70H62C60.8954 70 60 70.8954 60 72V80C60 81.1046 60.8954 82 62 82H74C75.1046 82 76 81.1046 76 80V72C76 70.8954 75.1046 70 74 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M74 188H62C60.8954 188 60 188.895 60 190V198C60 199.105 60.8954 200 62 200H74C75.1046 200 76 199.105 76 198V190C76 188.895 75.1046 188 74 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M112 70H100C98.8954 70 98 70.8954 98 72V80C98 81.1046 98.8954 82 100 82H112C113.105 82 114 81.1046 114 80V72C114 70.8954 113.105 70 112 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M112 188H100C98.8954 188 98 188.895 98 190V198C98 199.105 98.8954 200 100 200H112C113.105 200 114 199.105 114 198V190C114 188.895 113.105 188 112 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M150 70H138C136.895 70 136 70.8954 136 72V80C136 81.1046 136.895 82 138 82H150C151.105 82 152 81.1046 152 80V72C152 70.8954 151.105 70 150 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M150 188H138C136.895 188 136 188.895 136 190V198C136 199.105 136.895 200 138 200H150C151.105 200 152 199.105 152 198V190C152 188.895 151.105 188 150 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M188 70H176C174.895 70 174 70.8954 174 72V80C174 81.1046 174.895 82 176 82H188C189.105 82 190 81.1046 190 80V72C190 70.8954 189.105 70 188 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M188 188H176C174.895 188 174 188.895 174 190V198C174 199.105 174.895 200 176 200H188C189.105 200 190 199.105 190 198V190C190 188.895 189.105 188 188 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M226 70H214C212.895 70 212 70.8954 212 72V80C212 81.1046 212.895 82 214 82H226C227.105 82 228 81.1046 228 80V72C228 70.8954 227.105 70 226 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M226 188H214C212.895 188 212 188.895 212 190V198C212 199.105 212.895 200 214 200H226C227.105 200 228 199.105 228 198V190C228 188.895 227.105 188 226 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M264 70H252C250.895 70 250 70.8954 250 72V80C250 81.1046 250.895 82 252 82H264C265.105 82 266 81.1046 266 80V72C266 70.8954 265.105 70 264 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M264 188H252C250.895 188 250 188.895 250 190V198C250 199.105 250.895 200 252 200H264C265.105 200 266 199.105 266 198V190C266 188.895 265.105 188 264 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M302 70H290C288.895 70 288 70.8954 288 72V80C288 81.1046 288.895 82 290 82H302C303.105 82 304 81.1046 304 80V72C304 70.8954 303.105 70 302 70Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M302 188H290C288.895 188 288 188.895 288 190V198C288 199.105 288.895 200 290 200H302C303.105 200 304 199.105 304 198V190C304 188.895 303.105 188 302 188Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M96 92H30C27.7909 92 26 93.7909 26 96V174C26 176.209 27.7909 178 30 178H96C98.2091 178 100 176.209 100 174V96C100 93.7909 98.2091 92 96 92Z"
            className="fill-brand-yellow"
          />
          <path
            d="M196 92H130C127.791 92 126 93.7909 126 96V174C126 176.209 127.791 178 130 178H196C198.209 178 200 176.209 200 174V96C200 93.7909 198.209 92 196 92Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M296 92H230C227.791 92 226 93.7909 226 96V174C226 176.209 227.791 178 230 178H296C298.209 178 300 176.209 300 174V96C300 93.7909 298.209 92 296 92Z"
            className="fill-brand-yellow"
          />
          <path
            d="M185 252H65C62.2386 252 60 254.239 60 257C60 259.761 62.2386 262 65 262H185C187.761 262 190 259.761 190 257C190 254.239 187.761 252 185 252Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M142 270H64C61.7909 270 60 271.791 60 274C60 276.209 61.7909 278 64 278H142C144.209 278 146 276.209 146 274C146 271.791 144.209 270 142 270Z"
            className="fill-brand-yellow"
          />
        </svg>
      </div>
    )
  }

  return (
    <div className={wrap} aria-hidden>
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
        <path
          opacity="0.3"
          d="M309 30H16C10.4772 30 6 34.4772 6 40V260C6 265.523 10.4772 270 16 270H309C314.523 270 319 265.523 319 260V40C319 34.4772 314.523 30 309 30Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path opacity="0.3" d="M6 66H319" className="stroke-brand-yellow" strokeWidth="2" />
        <path
          opacity="0.55"
          d="M22 52.5C24.4853 52.5 26.5 50.4853 26.5 48C26.5 45.5147 24.4853 43.5 22 43.5C19.5147 43.5 17.5 45.5147 17.5 48C17.5 50.4853 19.5147 52.5 22 52.5Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.55"
          d="M38 52.5C40.4853 52.5 42.5 50.4853 42.5 48C42.5 45.5147 40.4853 43.5 38 43.5C35.5147 43.5 33.5 45.5147 33.5 48C33.5 50.4853 35.5147 52.5 38 52.5Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.55"
          d="M54 52.5C56.4853 52.5 58.5 50.4853 58.5 48C58.5 45.5147 56.4853 43.5 54 43.5C51.5147 43.5 49.5 45.5147 49.5 48C49.5 50.4853 51.5147 52.5 54 52.5Z"
          className="fill-brand-yellow"
        />
        <path
          d="M299 80H26C22.6863 80 20 82.6863 20 86V192C20 195.314 22.6863 198 26 198H299C302.314 198 305 195.314 305 192V86C305 82.6863 302.314 80 299 80Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.55"
          d="M165.5 212H24.5C22.0147 212 20 214.015 20 216.5C20 218.985 22.0147 221 24.5 221H165.5C167.985 221 170 218.985 170 216.5C170 214.015 167.985 212 165.5 212Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M236.5 230H23.5C21.567 230 20 231.567 20 233.5C20 235.433 21.567 237 23.5 237H236.5C238.433 237 240 235.433 240 233.5C240 231.567 238.433 230 236.5 230Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M196.5 244H23.5C21.567 244 20 245.567 20 247.5C20 249.433 21.567 251 23.5 251H196.5C198.433 251 200 249.433 200 247.5C200 245.567 198.433 244 196.5 244Z"
          className="fill-brand-yellow"
        />
      </svg>
    </div>
  )
}

const DEFAULT_ICONS: IconKey[] = ['events', 'social', 'image', 'website']

export function WasWirAufnehmen({
  ueberschrift = 'WAS WIR AUFNEHMEN',
  items,
}: WasWirAufnehmenProps) {
  const list =
    items?.filter((i) => i?.titel).map((item, i) => ({
      ...item,
      icon: item.icon || DEFAULT_ICONS[i] || 'events',
    })) ?? []

  if (!list.length) return null

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-[1780px] flex-col items-center gap-12 px-5 sm:px-8">
        <h2 className="heading-section w-full max-w-[1716px] text-center text-brand-black">
          {ueberschrift}
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {list.map((item) => (
            <article
              key={item.titel}
              className="@container flex min-w-0 flex-col justify-between gap-10 rounded-[24px] bg-brand-black p-10 xl:h-[720px]"
            >
              <CardGraphic name={item.icon as IconKey} />
              <div className="flex min-w-0 flex-col gap-2.5">
                <h3 className="font-unbounded text-[clamp(1.25rem,8cqi,1.75rem)] font-extrabold leading-[1.1] tracking-normal text-brand-yellow [text-transform:none]">
                  {item.titel}
                </h3>
                {item.text ? (
                  <p className="font-poppins text-[clamp(0.875rem,4.5cqi,1rem)] font-normal leading-[1.5] text-brand-muted">
                    {item.text}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
