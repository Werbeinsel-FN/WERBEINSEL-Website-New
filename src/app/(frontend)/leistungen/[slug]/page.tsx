import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/components/RenderBlocks'
import { getCmsPage, getLeistungSlugs } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getLeistungSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
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
  const page = await getCmsPage(slug)
  if (!page) notFound()
  return <RenderBlocks blocks={page.blocks} />
}
