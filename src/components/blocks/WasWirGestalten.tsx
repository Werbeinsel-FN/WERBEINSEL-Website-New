import { Container } from '@/components/ui/Container'
import { Heading } from '@/components/ui/Heading'
import { Section } from '@/components/ui/Section'

type IconKey = 'logo' | 'druck' | 'social' | 'plakat'

export type GestaltenItem = {
  titel: string
  text?: string | null
  icon?: IconKey | null
}

export type WasWirGestaltenProps = {
  ueberschrift?: string | null
  items?: GestaltenItem[] | null
}

function CardGraphic({ name }: { name: IconKey }) {
  const cls = 'h-auto w-full max-w-[325px]'

  if (name === 'logo') {
    return (
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
        <g clipPath="url(#clip0_gestalten_logo)">
          <path
            d="M90 118C113.196 118 132 99.196 132 76C132 52.804 113.196 34 90 34C66.804 34 48 52.804 48 76C48 99.196 66.804 118 90 118Z"
            className="fill-brand-yellow"
          />
          <path
            d="M216 34H160C152.268 34 146 40.268 146 48V104C146 111.732 152.268 118 160 118H216C223.732 118 230 111.732 230 104V48C230 40.268 223.732 34 216 34Z"
            className="stroke-brand-yellow"
            strokeWidth="4"
          />
          <path
            opacity="0.55"
            d="M250 118L292 34L334 118H250Z"
            className="stroke-brand-yellow"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M40 199C50.4934 199 59 190.493 59 180C59 169.507 50.4934 161 40 161C29.5066 161 21 169.507 21 180C21 190.493 29.5066 199 40 199Z"
            className="fill-brand-yellow"
          />
          <path
            d="M84 199C94.4934 199 103 190.493 103 180C103 169.507 94.4934 161 84 161C73.5066 161 65 169.507 65 180C65 190.493 73.5066 199 84 199Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M128 199C138.493 199 147 190.493 147 180C147 169.507 138.493 161 128 161C117.507 161 109 169.507 109 180C109 190.493 117.507 199 128 199Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M172 199C182.493 199 191 190.493 191 180C191 169.507 182.493 161 172 161C161.507 161 153 169.507 153 180C153 190.493 161.507 199 172 199Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M216 199C226.493 199 235 190.493 235 180C235 169.507 226.493 161 216 161C205.507 161 197 169.507 197 180C197 190.493 205.507 199 216 199Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.55"
            d="M193 228H27C23.134 228 20 231.134 20 235C20 238.866 23.134 242 27 242H193C196.866 242 200 238.866 200 235C200 231.134 196.866 228 193 228Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M256 252H24C21.7909 252 20 253.791 20 256C20 258.209 21.7909 260 24 260H256C258.209 260 260 258.209 260 256C260 253.791 258.209 252 256 252Z"
            className="fill-brand-yellow"
          />
          <path
            opacity="0.3"
            d="M216 268H24C21.7909 268 20 269.791 20 272C20 274.209 21.7909 276 24 276H216C218.209 276 220 274.209 220 272C220 269.791 218.209 268 216 268Z"
            className="fill-brand-yellow"
          />
        </g>
        <defs>
          <clipPath id="clip0_gestalten_logo">
            <rect width="325" height="300" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }

  if (name === 'druck') {
    return (
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
        <path opacity="0.3" d="M291 22H34V264H291V22Z" className="stroke-brand-yellow" strokeWidth="1.5" strokeDasharray="7 5" />
        <path opacity="0.55" d="M279 34H46V252H279V34Z" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M46 8V32" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M20 34H44" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M279 8V32" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M305 34H281" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M46 278V254" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M20 252H44" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M279 278V254" className="stroke-brand-yellow" strokeWidth="2" />
        <path d="M305 252H281" className="stroke-brand-yellow" strokeWidth="2" />
        <path
          d="M257 52H68C65.7909 52 64 53.7909 64 56V144C64 146.209 65.7909 148 68 148H257C259.209 148 261 146.209 261 144V56C261 53.7909 259.209 52 257 52Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.55"
          d="M178.5 164H69.5C66.4624 164 64 166.462 64 169.5C64 172.538 66.4624 175 69.5 175H178.5C181.538 175 184 172.538 184 169.5C184 166.462 181.538 164 178.5 164Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M253.5 186H67.5C65.567 186 64 187.567 64 189.5C64 191.433 65.567 193 67.5 193H253.5C255.433 193 257 191.433 257 189.5C257 187.567 255.433 186 253.5 186Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M213.5 200H67.5C65.567 200 64 201.567 64 203.5C64 205.433 65.567 207 67.5 207H213.5C215.433 207 217 205.433 217 203.5C217 201.567 215.433 200 213.5 200Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M102 282H50C47.7909 282 46 283.791 46 286C46 288.209 47.7909 290 50 290H102C104.209 290 106 288.209 106 286C106 283.791 104.209 282 102 282Z"
          className="fill-brand-yellow"
        />
        <path
          d="M273 280H225C221.686 280 219 282.686 219 286C219 289.314 221.686 292 225 292H273C276.314 292 279 289.314 279 286C279 282.686 276.314 280 273 280Z"
          className="fill-brand-yellow"
        />
      </svg>
    )
  }

  if (name === 'social') {
    return (
      <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
        <g opacity="0.3">
          <path
            d="M102 96H22C17.5817 96 14 99.5817 14 104V184C14 188.418 17.5817 192 22 192H102C106.418 192 110 188.418 110 184V104C110 99.5817 106.418 96 102 96Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            d="M61.9997 150.72C71.013 150.72 78.3197 143.413 78.3197 134.4C78.3197 125.387 71.013 118.08 61.9997 118.08C52.9864 118.08 45.6797 125.387 45.6797 134.4C45.6797 143.413 52.9864 150.72 61.9997 150.72Z"
            className="fill-brand-yellow"
          />
          <path
            d="M87.7992 155.52H36.1992C34.5424 155.52 33.1992 156.863 33.1992 158.52C33.1992 160.177 34.5424 161.52 36.1992 161.52H87.7992C89.4561 161.52 90.7992 160.177 90.7992 158.52C90.7992 156.863 89.4561 155.52 87.7992 155.52Z"
            className="fill-brand-yellow"
          />
        </g>
        <g opacity="0.55">
          <path
            d="M216 66H136C131.582 66 128 69.5817 128 74V214C128 218.418 131.582 222 136 222H216C220.418 222 224 218.418 224 214V74C224 69.5817 220.418 66 216 66Z"
            className="stroke-brand-yellow"
            strokeWidth="2"
          />
          <path
            d="M176 144.72C185.013 144.72 192.32 137.413 192.32 128.4C192.32 119.387 185.013 112.08 176 112.08C166.986 112.08 159.68 119.387 159.68 128.4C159.68 137.413 166.986 144.72 176 144.72Z"
            className="fill-brand-yellow"
          />
          <path
            d="M201.799 162.72H150.199C148.542 162.72 147.199 164.063 147.199 165.72C147.199 167.377 148.542 168.72 150.199 168.72H201.799C203.456 168.72 204.799 167.377 204.799 165.72C204.799 164.063 203.456 162.72 201.799 162.72Z"
            className="fill-brand-yellow"
          />
        </g>
        <path
          d="M300 96H252C247.582 96 244 99.5817 244 104V202C244 206.418 247.582 210 252 210H300C304.418 210 308 206.418 308 202V104C308 99.5817 304.418 96 300 96Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path
          d="M276.001 152.48C282.01 152.48 286.881 147.609 286.881 141.6C286.881 135.591 282.01 130.72 276.001 130.72C269.992 130.72 265.121 135.591 265.121 141.6C265.121 147.609 269.992 152.48 276.001 152.48Z"
          className="fill-brand-yellow"
        />
        <path
          d="M292.201 166.68H259.801C258.144 166.68 256.801 168.023 256.801 169.68C256.801 171.337 258.144 172.68 259.801 172.68H292.201C293.858 172.68 295.201 171.337 295.201 169.68C295.201 168.023 293.858 166.68 292.201 166.68Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M106.5 216H17.5C15.567 216 14 217.567 14 219.5C14 221.433 15.567 223 17.5 223H106.5C108.433 223 110 221.433 110 219.5C110 217.567 108.433 216 106.5 216Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.55"
          d="M220.5 240H131.5C129.567 240 128 241.567 128 243.5C128 245.433 129.567 247 131.5 247H220.5C222.433 247 224 245.433 224 243.5C224 241.567 222.433 240 220.5 240Z"
          className="fill-brand-yellow"
        />
        <path
          d="M304.5 224H247.5C245.567 224 244 225.567 244 227.5C244 229.433 245.567 231 247.5 231H304.5C306.433 231 308 229.433 308 227.5C308 225.567 306.433 224 304.5 224Z"
          className="fill-brand-yellow"
        />
        <path
          opacity="0.3"
          d="M150 272H18C15.7909 272 14 273.791 14 276C14 278.209 15.7909 280 18 280H150C152.209 280 154 278.209 154 276C154 273.791 152.209 272 150 272Z"
          className="fill-brand-yellow"
        />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 325 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls} aria-hidden>
      <g opacity="0.3">
        <path
          d="M158 40H16C13.7909 40 12 41.7909 12 44V248C12 250.209 13.7909 252 16 252H158C160.209 252 162 250.209 162 248V44C162 41.7909 160.209 40 158 40Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path
          d="M87 143.06C99.4264 143.06 109.5 132.986 109.5 120.56C109.5 108.134 99.4264 98.06 87 98.06C74.5736 98.06 64.5 108.134 64.5 120.56C64.5 132.986 74.5736 143.06 87 143.06Z"
          className="fill-brand-yellow"
        />
        <path
          d="M136 171.44H38C36.8954 171.44 36 172.335 36 173.44V180.04C36 181.145 36.8954 182.04 38 182.04H136C137.105 182.04 138 181.145 138 180.04V173.44C138 172.335 137.105 171.44 136 171.44Z"
          className="fill-brand-yellow"
        />
        <path
          d="M103 196.88H38C36.8954 196.88 36 197.775 36 198.88V205.48C36 206.585 36.8954 207.48 38 207.48H103C104.105 207.48 105 206.585 105 205.48V198.88C105 197.775 104.105 196.88 103 196.88Z"
          className="fill-brand-yellow"
        />
      </g>
      <g opacity="0.55">
        <path
          d="M212 66H100C97.7909 66 96 67.7909 96 70V232C96 234.209 97.7909 236 100 236H212C214.209 236 216 234.209 216 232V70C216 67.7909 214.209 66 212 66Z"
          className="stroke-brand-yellow"
          strokeWidth="2"
        />
        <path
          d="M156 148.6C165.941 148.6 174 140.541 174 130.6C174 120.659 165.941 112.6 156 112.6C146.059 112.6 138 120.659 138 130.6C138 140.541 146.059 148.6 156 148.6Z"
          className="fill-brand-yellow"
        />
        <path
          d="M194.799 171.4H117.199C116.095 171.4 115.199 172.295 115.199 173.4V177.9C115.199 179.005 116.095 179.9 117.199 179.9H194.799C195.904 179.9 196.799 179.005 196.799 177.9V173.4C196.799 172.295 195.904 171.4 194.799 171.4Z"
          className="fill-brand-yellow"
        />
        <path
          d="M168.399 191.8H117.199C116.095 191.8 115.199 192.695 115.199 193.8V198.3C115.199 199.405 116.095 200.3 117.199 200.3H168.399C169.504 200.3 170.399 199.405 170.399 198.3V193.8C170.399 192.695 169.504 191.8 168.399 191.8Z"
          className="fill-brand-yellow"
        />
      </g>
      <path
        d="M310 96H240C237.791 96 236 97.7909 236 100V202C236 204.209 237.791 206 240 206H310C312.209 206 314 204.209 314 202V100C314 97.7909 312.209 96 310 96Z"
        className="stroke-brand-yellow"
        strokeWidth="2"
      />
      <path
        d="M275.001 149.5C281.463 149.5 286.701 144.262 286.701 137.8C286.701 131.338 281.463 126.1 275.001 126.1C268.539 126.1 263.301 131.338 263.301 137.8C263.301 144.262 268.539 149.5 275.001 149.5Z"
        className="fill-brand-yellow"
      />
      <path
        d="M299.52 164.2H250.48C249.376 164.2 248.48 165.095 248.48 166.2V167.7C248.48 168.805 249.376 169.7 250.48 169.7H299.52C300.625 169.7 301.52 168.805 301.52 167.7V166.2C301.52 165.095 300.625 164.2 299.52 164.2Z"
        className="fill-brand-yellow"
      />
      <path
        d="M282.36 177.4H250.48C249.376 177.4 248.48 178.295 248.48 179.4V180.9C248.48 182.005 249.376 182.9 250.48 182.9H282.36C283.465 182.9 284.36 182.005 284.36 180.9V179.4C284.36 178.295 283.465 177.4 282.36 177.4Z"
        className="fill-brand-yellow"
      />
      <path
        opacity="0.3"
        d="M68.5 266H15.5C13.567 266 12 267.567 12 269.5C12 271.433 13.567 273 15.5 273H68.5C70.433 273 72 271.433 72 269.5C72 267.567 70.433 266 68.5 266Z"
        className="fill-brand-yellow"
      />
      <path
        opacity="0.55"
        d="M152.5 266H99.5C97.567 266 96 267.567 96 269.5C96 271.433 97.567 273 99.5 273H152.5C154.433 273 156 271.433 156 269.5C156 267.567 154.433 266 152.5 266Z"
        className="fill-brand-yellow"
      />
      <path
        d="M292.5 266H239.5C237.567 266 236 267.567 236 269.5C236 271.433 237.567 273 239.5 273H292.5C294.433 273 296 271.433 296 269.5C296 267.567 294.433 266 292.5 266Z"
        className="fill-brand-yellow"
      />
    </svg>
  )
}

const DEFAULT_ICONS: IconKey[] = ['logo', 'druck', 'social', 'plakat']

export function WasWirGestalten({
  ueberschrift = 'WAS WIR GESTALTEN',
  items,
}: WasWirGestaltenProps) {
  const list =
    items?.filter((i) => i?.titel).map((item, i) => ({
      ...item,
      icon: item.icon || DEFAULT_ICONS[i] || 'logo',
    })) ?? []

  if (!list.length) return null

  return (
    <Section background="white">
      <Container className="flex flex-col items-center gap-stack">
        <Heading size="section" className="w-full text-center text-brand-black">
          {ueberschrift}
        </Heading>

        <div className="w-full">
          <div className="grid grid-cols-1 gap-gap sm:grid-cols-2 lg:grid-cols-4">
            {list.map((item) => (
              <article
                key={item.titel}
                className="@container flex min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-card bg-brand-black p-card xl:min-h-[720px]"
              >
                <CardGraphic name={item.icon as IconKey} />
                <div className="flex min-w-0 flex-col gap-2">
                  <h3 className="font-unbounded text-cq-title font-extrabold leading-[1.15] tracking-normal text-brand-yellow [text-transform:none] [overflow-wrap:anywhere]">
                    {item.titel}
                  </h3>
                  {item.text ? (
                    <p className="font-poppins text-cq-body font-normal leading-[1.5] text-brand-muted">
                      {item.text}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
