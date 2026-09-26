import type { HTMLAttributes, ReactNode } from 'react'

export type SectionBackground = 'yellow' | 'black' | 'white'

type SectionProps = {
  children: ReactNode
  className?: string
  as?: 'section' | 'div' | 'article' | 'aside'
  /** Hintergrund läuft über die volle Breite; Inhalt mit <Container> begrenzen. null = eigener Hintergrund (z. B. per style) */
  background?: SectionBackground | null
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

const backgroundClasses: Record<SectionBackground, string> = {
  yellow: 'bg-brand-yellow text-brand-black',
  black: 'bg-brand-black text-brand-white',
  white: 'bg-brand-white text-brand-black',
}

export function Section({
  children,
  className = '',
  as: Tag = 'section',
  background = 'white',
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={[
        'py-section',
        background ? backgroundClasses[background] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}
