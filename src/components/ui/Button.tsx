import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

export type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: Variant
  size?: Size
  /** Auf gelbem Hintergrund: Outline wird weiß statt schwarz. */
  onYellow?: boolean
  className?: string
  newTab?: boolean
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
}

function variantClasses(variant: Variant, onYellow: boolean): string {
  switch (variant) {
    case 'primary':
      // Figma: schwarzer Pill mit weißem Text (auf Gelb)
      return onYellow
        ? 'bg-brand-black text-white hover:bg-black/90'
        : 'bg-brand-yellow text-brand-black hover:bg-brand-yellow/90'
    case 'secondary':
      // Figma Hero: weißer Pill mit schwarzem Text
      return onYellow
        ? 'border-2 border-brand-black bg-white text-brand-black hover:bg-brand-black hover:text-white'
        : 'border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-black'
    case 'ghost':
      return onYellow
        ? 'bg-transparent text-brand-black hover:bg-brand-black/10'
        : 'bg-transparent text-white hover:bg-white/10'
    default:
      return ''
  }
}

const base =
  'inline-flex items-center justify-center rounded-full font-poppins font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-yellow disabled:opacity-50'

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onYellow = false,
  className = '',
  newTab = false,
  type = 'button',
  ...rest
}: ButtonProps) {
  const classes = `${base} ${sizeClasses[size]} ${variantClasses(variant, onYellow)} ${className}`.trim()

  if (href) {
    const external = href.startsWith('http') || newTab
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}
