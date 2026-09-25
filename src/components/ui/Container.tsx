import type { HTMLAttributes, ReactNode } from 'react'

type ContainerVariant = 'site' | 'text'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav'
  /** site: Inhaltsbreite 1780 px · text: 840 px für lange Fließtexte */
  variant?: ContainerVariant
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

const variantClasses: Record<ContainerVariant, string> = {
  site: 'max-w-site',
  text: 'max-w-text',
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  variant = 'site',
  ...rest
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-gutter ${variantClasses[variant]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
