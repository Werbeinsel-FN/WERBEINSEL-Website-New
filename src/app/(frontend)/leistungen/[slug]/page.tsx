import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/components/RenderBlocks'
import { leistungenSlugs, type LeistungSlug } from '@/data/leistungen-struktur'
import { getCmsPage, getLeistungSlugs } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

// Nur die festgelegten Leistungen; andere Slugs (auch Seiten, die noch im CMS stehen) ergeben 404
function isLeistung(slug: string): slug is LeistungSlug {
  return (leistungenSlugs as readonly string[]).includes(slug)
}

export async function generateStaticParams() {
  const slugs = await getLeistungSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  if (!isLeistung(slug)) return {}
  const page = await getCmsPage(slug)
  if (!page) return {}
  return buildMetadata({
    title: page.titel,
    description: page.metaDescription,
    path: `/leistungen/${slug}`,
  })
}

export default async function LeistungPage({ params }: Props) {
  const { slug } = await params
  if (!isLeistung(slug)) notFound()
  const page = await getCmsPage(slug)
  if (!page) notFound()
  return <RenderBlocks blocks={page.blocks} />
}
