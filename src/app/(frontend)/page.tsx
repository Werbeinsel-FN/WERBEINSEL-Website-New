import { RenderBlocks } from '@/components/RenderBlocks'
import { getCmsPage } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'

export async function generateMetadata() {
  const page = await getCmsPage('home')
  return buildMetadata({
    title: 'Startseite',
    description:
      page?.metaDescription ||
      'WERBEINSEL – Ihre Agentur für klassische Werbung. Plakat, Folie, Pixel – Sichtbarkeit für Marken in der Region.',
    path: '/',
  })
}

export default async function HomePage() {
  const page = await getCmsPage('home')
  return <RenderBlocks blocks={page?.blocks} />
}
