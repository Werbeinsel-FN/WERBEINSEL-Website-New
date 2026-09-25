import Image from 'next/image'
import type { ReactNode } from 'react'
import { resolveMedia, type MediaLike } from '@/lib/media'
import { Container } from '@/components/ui/Container'

export type TextblockProps = {
  eyebrow?: string | null
  ueberschrift?: string | null
  text?: string | ReactNode | null
  children?: ReactNode
  bild?: MediaLike
}

function renderBody(text?: string | ReactNode | null, children?: ReactNode) {
  if (children) return children
  if (text == null) return null
  if (typeof text === 'string') {
    return text
      .split(/\n{2,}/)
      .filter(Boolean)
      .map((para, i) => (
        <p
          key={i}
          className="body-lead mx-auto max-w-[528px] whitespace-pre-line text-brand-black first:max-w-[471px]"
        >
          {para.trim()}
        </p>
      ))
  }
  if (typeof text === 'object' && text !== null && !('$$typeof' in (text as object))) {
    return null
  }
  return text
}

export function Textblock({ eyebrow, ueberschrift, text, children, bild }: TextblockProps) {
  const media = resolveMedia(bild, ueberschrift || '')
  const body = renderBody(text, children)

  /* Figma Section / About: padding 128px, heading 840/56 Unbounded 800, Body/Lead 22/500 */
  return (
    <section className="bg-white py-section">
      <Container className="text-center">
        {eyebrow ? (
          <p className="mb-4 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="heading-section mx-auto max-w-[840px] whitespace-pre-line text-brand-black">
            {ueberschrift}
          </h2>
        ) : null}
        {body ? (
          <div className="mt-8 space-y-6 md:mt-8">{body}</div>
        ) : null}
        {media ? (
          <div className="relative mx-auto mt-10 aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-3xl">
            <Image
              src={media.url}
              alt={media.alt}
              fill
              sizes="(max-width: 768px) 100vw, 672px"
              className="object-cover"
            />
          </div>
        ) : null}
      </Container>
    </section>
  )
}
