import Link from 'next/link'

type Props = {
  className?: string
  href?: string | null
  /** dark = footer/logo on black, light = logo on yellow/white */
  tone?: 'light' | 'dark'
}

export function Logo({ className = '', href = '/', tone = 'light' }: Props) {
  const src = tone === 'dark' ? '/brand/logo-footer.png' : '/brand/logo-header.png'

  const mark = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="WERBEINSEL"
      width={204}
      height={48}
      className={`h-9 w-auto sm:h-10 ${className}`}
    />
  )

  if (!href) return mark
  return (
    <Link href={href} className="inline-flex" aria-label="WERBEINSEL Startseite">
      {mark}
    </Link>
  )
}
