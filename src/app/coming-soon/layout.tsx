import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { unbounded, poppins } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'WERBEINSEL – Demnächst an dieser Stelle',
  description:
    'Demnächst an dieser Stelle: unsere neue Website. WERBEINSEL – Außenwerbung, Folierung, Grafik, Foto & Video, Social Media am Bodensee.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'WERBEINSEL – Demnächst an dieser Stelle',
    description: 'Wir kleben sonst Plakate. Diesmal bauen wir eine Website. Bald live.',
  },
}

export default function ComingSoonLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className={`${unbounded.variable} ${poppins.variable}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
