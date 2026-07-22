import Link from 'next/link'

type Props = {
  className?: string
  href?: string | null
  /** Wordmark color – circle stays yellow. */
  tone?: 'light' | 'dark'
}

export function Logo({ className = '', href = '/', tone = 'light' }: Props) {
  const word = tone === 'dark' ? 'text-white' : 'text-brand-black'

  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className="circle grid h-9 w-9 place-items-center rounded-full bg-brand-yellow font-unbounded text-base font-black text-brand-black sm:h-10 sm:w-10 sm:text-lg"
        aria-hidden
      >
        W
      </span>
      <span className={`font-unbounded text-base font-extrabold tracking-tight sm:text-lg ${word}`}>
        WERBEINSEL
      </span>
    </span>
  )

  if (!href) return mark
  return (
    <Link href={href} className="inline-flex" aria-label="WERBEINSEL Startseite">
      {mark}
    </Link>
  )
}
