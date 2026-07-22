import type { HTMLAttributes, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'header' | 'footer' | 'nav'
} & Omit<HTMLAttributes<HTMLElement>, 'children'>

export function Container({
  children,
  className = '',
  as: Tag = 'div',
  ...rest
}: ContainerProps) {
  return (
    <Tag className={`container-site ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
