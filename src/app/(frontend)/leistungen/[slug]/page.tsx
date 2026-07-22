import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/components/RenderBlocks'
import { leistungen, leistungenSlugs, type LeistungSlug } from '@/data/seed'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return leistungenSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const page = leistungen[slug as LeistungSlug]
  if (!page) return {}
  return buildMetadata({
    title: page.titel,
    description: page.metaDescription,
    path: `/leistungen/${slug}`,
  })
}

export default async function LeistungPage({ params }: Props) {
  const { slug } = await params
  if (!leistungenSlugs.includes(slug as LeistungSlug)) notFound()
  const page = leistungen[slug as LeistungSlug]

  return <RenderBlocks blocks={page.blocks as any} />
}
