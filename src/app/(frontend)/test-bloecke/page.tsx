import type { Metadata } from 'next'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/components/RenderBlocks'
import { blockTestSections } from '@/data/block-test'
import { isPreviewEnvironment } from '@/lib/preview'

/*
 * Testseite mit allen CMS-Blöcken für Screenshot-Vergleiche (T7).
 * Nur lokal und in der Vorschau erreichbar, in Produktion 404.
 * Nicht in Navigation oder Sitemap verlinkt.
 */
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Testseite CMS-Blöcke',
  robots: { index: false, follow: false, nocache: true },
}

export default function BlockTestPage() {
  if (!isPreviewEnvironment()) notFound()

  return (
    <>
      {blockTestSections.map(({ name, block }, i) => (
        <Fragment key={`${name}-${i}`}>
          <div
            className="bg-brand-divider px-gutter py-2 font-poppins text-small text-brand-white"
            data-block={block.blockType}
          >
            Block {i + 1} / {blockTestSections.length} · {name}
          </div>
          <RenderBlocks blocks={[block]} />
        </Fragment>
      ))}
    </>
  )
}
