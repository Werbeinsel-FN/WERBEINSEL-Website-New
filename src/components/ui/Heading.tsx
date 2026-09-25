import type { HTMLAttributes, ReactNode } from 'react'

export type HeadingSize = 'hero' | 'section' | 'sub' | 'card' | 'step'
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

type HeadingProps = {
  children: ReactNode
  className?: string
  /** Optische Größe aus den Tokens (--text-hero … --text-step). */
  size: HeadingSize
  /** Semantische Ebene, unabhängig von der Größe. Standard je Größe siehe defaultTags. */
  as?: HeadingTag
} & Omit<HTMLAttributes<HTMLHeadingElement>, 'children'>

const defaultTags: Record<HeadingSize, HeadingTag> = {
  hero: 'h1',
  section: 'h2',
  sub: 'h3',
  card: 'h3',
  step: 'h4',
}

/* Figma: Display/Hero und Heading/Section in Versalien; kleinere Größen in normaler Schreibung */
const sizeClasses: Record<HeadingSize, string> = {
  hero: 'text-hero font-black uppercase leading-[0.95]',
  section: 'text-section font-extrabold uppercase leading-[1.1]',
  sub: 'text-sub font-extrabold normal-case leading-[1.15]',
  card: 'text-card font-extrabold normal-case leading-[1.15]',
  step: 'text-step font-extrabold normal-case leading-[1.15]',
}

export function Heading({ children, className = '', size, as, ...rest }: HeadingProps) {
  const Tag = as ?? defaultTags[size]
  return (
    <Tag className={`font-unbounded tracking-[-0.02em] ${sizeClasses[size]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
