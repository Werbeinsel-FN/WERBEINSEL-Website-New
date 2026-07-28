import Link from 'next/link'

type Props = {
  className?: string
  href?: string | null
  /** dark = gelbes Logo auf Schwarz (Footer) · light = Kontrastlogo für gelben Header */
  tone?: 'light' | 'dark'
}

export function Logo({ className = '', href = '/', tone = 'light' }: Props) {
  // light: gelbe Marke + schwarze Wortmarke (Header auf Gelb)
  // dark: Original gelbes Logo (Footer auf Schwarz)
  const src =
    tone === 'dark'
      ? '/brand/logo-footer.png'
      : '/brand/logo-header-contrast.png?v=11'

  const mark = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="WERBEINSEL"
      width={170}
      height={40}
      className={`h-10 w-auto ${className}`}
    />
  )

  if (!href) return mark
  return (
    <Link href={href} className="inline-flex" aria-label="WERBEINSEL Startseite">
      {mark}
    </Link>
  )
}
