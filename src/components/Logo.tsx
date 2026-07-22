import Link from 'next/link'

type Props = {
  className?: string
  href?: string | null
  /** dark = white wordmark (auf Schwarz), light = black wordmark */
  tone?: 'light' | 'dark'
}

export function Logo({ className = '', href = '/', tone = 'light' }: Props) {
  const src =
    tone === 'dark' ? '/brand/logo-wordmark-dark.svg' : '/brand/logo-wordmark.svg'

  const mark = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="WERBEINSEL"
      width={200}
      height={36}
      className={`h-8 w-auto sm:h-9 ${className}`}
    />
  )

  if (!href) return mark
  return (
    <Link href={href} className="inline-flex" aria-label="WERBEINSEL Startseite">
      {mark}
    </Link>
  )
}
