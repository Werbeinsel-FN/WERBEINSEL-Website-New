import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  SITE_GATE_COOKIE,
  isSiteGateEnabled,
  isValidAccessToken,
} from '@/lib/site-gate'

const PUBLIC_PREFIXES = [
  '/coming-soon',
  '/admin',
  '/api',
  '/_next',
  '/brand',
  '/images',
  '/fonts',
  '/favicon',
  '/robots.txt',
  '/sitemap.xml',
]

function isPublicPath(pathname: string): boolean {
  if (
    pathname === '/favicon.ico' ||
    pathname === '/icon.svg' ||
    pathname === '/apple-icon.png'
  ) {
    return true
  }
  return PUBLIC_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))
}

export function middleware(request: NextRequest) {
  if (!isSiteGateEnabled()) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (isPublicPath(pathname)) {
    return NextResponse.next()
  }

  const cookie = request.cookies.get(SITE_GATE_COOKIE)?.value
  if (isValidAccessToken(cookie)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/coming-soon'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2)$).*)',
  ],
}
