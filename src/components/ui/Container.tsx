import type { HTMLAttributes, ReactNode } from 'react'

type ContainerVariant = 'site' | 'text'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav'
  /** site: Inhalt max. 1780 px · text: max. 840 px für lange Fließtexte; Seitenrand jeweils außen */
  variant?: ContainerVariant
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

/* container-site / container-text sind in globals.css definiert */
const variantClasses: Record<ContainerVariant, string> = {
  site: 'container-site',
  text: 'container-text',
}

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  variant = 'site',
  ...rest
}: ContainerProps) {
  return (
    <Tag className={`${variantClasses[variant]} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
