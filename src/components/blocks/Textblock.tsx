import Image from 'next/image'
import type { ReactNode } from 'react'
import { resolveMedia, type MediaLike } from '@/lib/media'

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
        <p key={i} className="font-poppins text-base leading-relaxed text-brand-black/80 md:text-lg">
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

  return (
    <section className="section-pad bg-white">
      <div className="container-site mx-auto max-w-3xl text-center">
        {eyebrow ? (
          <p className="mb-4 font-poppins text-sm font-bold tracking-[0.2em] text-brand-muted uppercase">
            {eyebrow}
          </p>
        ) : null}
        {ueberschrift ? (
          <h2 className="font-unbounded text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-brand-black">
            {ueberschrift}
          </h2>
        ) : null}
        {body ? <div className="mt-6 space-y-4">{body}</div> : null}
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
      </div>
    </section>
  )
}
