import { Container } from '@/components/ui/Container'

export type FormatItem = {
  label: string
  icon: 'visitenkarte' | 'social' | 'reel' | 'plakat'
}

export type EinMotivProps = {
  ueberschrift?: string | null
  text?: string | null
  items?: FormatItem[] | null
}

function FormatGraphic({ name }: { name: FormatItem['icon'] }) {
  if (name === 'visitenkarte') {
    return (
      <svg
        viewBox="0 0 255 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-[min(100%,clamp(7.5rem,16cqi,255px))]"
        aria-hidden
      >
        <g clipPath="url(#clip0_einmotiv_vk)">
          <path
            opacity="0.35"
            d="M246 1H9C4.58172 1 1 4.58172 1 9V153C1 157.418 4.58172 161 9 161H246C250.418 161 254 157.418 254 153V9C254 4.58172 250.418 1 246 1Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            d="M127.501 95.58C142.711 95.58 155.041 83.2499 155.041 68.04C155.041 52.8301 142.711 40.5 127.501 40.5C112.291 40.5 99.9609 52.8301 99.9609 68.04C99.9609 83.2499 112.291 95.58 127.501 95.58Z"
            className="fill-brand-yellow"
          />
          <path
            d="M179.549 109.35H75.4475C72.2534 109.35 69.6641 111.939 69.6641 115.133C69.6641 118.327 72.2534 120.917 75.4475 120.917H179.549C182.743 120.917 185.332 118.327 185.332 115.133C185.332 111.939 182.743 109.35 179.549 109.35Z"
            className="fill-brand-yellow"
          />
          <path
            d="M160.274 131.382H94.7287C91.5346 131.382 88.9453 133.971 88.9453 137.165C88.9453 140.36 91.5346 142.949 94.7287 142.949H160.274C163.468 142.949 166.057 140.36 166.057 137.165C166.057 133.971 163.468 131.382 160.274 131.382Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_einmotiv_vk">
            <rect width="255" height="162" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (name === 'social') {
    return (
      <svg
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-[min(100%,clamp(8.5rem,19cqi,300px))]"
        aria-hidden
      >
        <g clipPath="url(#clip0_einmotiv_social)">
          <path
            opacity="0.35"
            d="M291 1H9C4.58172 1 1 4.58172 1 9V291C1 295.418 4.58172 299 9 299H291C295.418 299 299 295.418 299 291V9C299 4.58172 295.418 1 291 1Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            d="M150 177C178.167 177 201 154.167 201 126C201 97.8335 178.167 75 150 75C121.833 75 99 97.8335 99 126C99 154.167 121.833 177 150 177Z"
            className="fill-brand-yellow"
          />
          <path
            d="M246.388 202.5H53.6084C47.6935 202.5 42.8984 207.295 42.8984 213.21C42.8984 219.125 47.6935 223.92 53.6084 223.92H246.388C252.303 223.92 257.098 219.125 257.098 213.21C257.098 207.295 252.303 202.5 246.388 202.5Z"
            className="fill-brand-yellow"
          />
          <path
            d="M210.692 243.3H89.3116C83.3966 243.3 78.6016 248.095 78.6016 254.01C78.6016 259.925 83.3966 264.72 89.3116 264.72H210.692C216.607 264.72 221.402 259.925 221.402 254.01C221.402 248.095 216.607 243.3 210.692 243.3Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_einmotiv_social">
            <rect width="300" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (name === 'reel') {
    return (
      <svg
        viewBox="0 0 200 356"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-[min(100%,clamp(5.5rem,12.5cqi,200px))]"
        aria-hidden
      >
        <g clipPath="url(#clip0_einmotiv_reel)">
          <path
            opacity="0.35"
            d="M191 1H9C4.58172 1 1 4.58172 1 9V347C1 351.418 4.58172 355 9 355H191C195.418 355 199 351.418 199 347V9C199 4.58172 195.418 1 191 1Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            d="M100 183.52C118.778 183.52 134 168.298 134 149.52C134 130.742 118.778 115.52 100 115.52C81.2223 115.52 66 130.742 66 149.52C66 168.298 81.2223 183.52 100 183.52Z"
            className="fill-brand-yellow"
          />
          <path
            d="M164.262 200.52H35.7416C31.7983 200.52 28.6016 203.717 28.6016 207.66C28.6016 211.603 31.7983 214.8 35.7416 214.8H164.262C168.205 214.8 171.402 211.603 171.402 207.66C171.402 203.717 168.205 200.52 164.262 200.52Z"
            className="fill-brand-yellow"
          />
          <path
            d="M140.458 227.72H59.5384C55.5951 227.72 52.3984 230.917 52.3984 234.86C52.3984 238.803 55.5951 242 59.5384 242H140.458C144.402 242 147.598 238.803 147.598 234.86C147.598 230.917 144.402 227.72 140.458 227.72Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_einmotiv_reel">
            <rect width="200" height="356" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  /* Plakat – Rahmen aus Figma + Motiv analog zu den anderen Formaten */
  return (
    <svg
      viewBox="0 0 260 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-[min(100%,clamp(7rem,16.5cqi,260px))]"
      aria-hidden
    >
      <path
        opacity="0.35"
        d="M251 1H9C4.58172 1 1 4.58172 1 9V359C1 363.418 4.58172 367 9 367H251C255.418 367 259 363.418 259 359V9C259 4.58172 255.418 1 251 1Z"
        className="stroke-brand-yellow"
        strokeWidth="2"
      />
      <path
        d="M130 190C154.853 190 175 169.853 175 145C175 120.147 154.853 100 130 100C105.147 100 85 120.147 85 145C85 169.853 105.147 190 130 190Z"
        className="fill-brand-yellow"
      />
      <path
        d="M214 212H46C41.0294 212 37 216.029 37 221C37 225.971 41.0294 230 46 230H214C218.971 230 223 225.971 223 221C223 216.029 218.971 212 214 212Z"
        className="fill-brand-yellow"
      />
      <path
        d="M182 248H78C73.0294 248 69 252.029 69 257C69 261.971 73.0294 266 78 266H182C186.971 266 191 261.971 191 257C191 252.029 186.971 248 182 248Z"
        className="fill-brand-yellow"
      />
    </svg>
  )
}

const DEFAULT_ITEMS: FormatItem[] = [
  { label: 'Visitenkarte', icon: 'visitenkarte' },
  { label: 'Social-Post', icon: 'social' },
  { label: 'Reel', icon: 'reel' },
  { label: 'Plakat', icon: 'plakat' },
]

export function EinMotiv({
  ueberschrift = 'EIN MOTIV, ALLE FORMATE',
  text,
  items,
}: EinMotivProps) {
  const list = items?.length ? items : DEFAULT_ITEMS

  return (
    <section className="bg-brand-black py-section">
      <Container className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <h2 className="heading-section text-brand-yellow">
            {ueberschrift}
          </h2>
          {text ? (
            <p className="body-lead max-w-[1100px] text-white">
              {text}
            </p>
          ) : null}
        </div>

        <div className="@container mt-7 w-full pt-7">
          <div className="flex flex-nowrap items-end justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-8 xl:gap-11">
            {list.map((item) => (
              <div
                key={item.label}
                className="flex min-w-0 shrink flex-col items-center gap-2 sm:gap-3"
              >
                <FormatGraphic name={item.icon} />
                <p className="w-full text-center font-poppins text-[clamp(0.7rem,2.5cqi,0.875rem)] font-normal leading-[1.5] text-brand-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
