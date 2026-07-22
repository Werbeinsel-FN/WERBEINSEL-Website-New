import localFont from 'next/font/local'

/**
 * Lokal gehostete Fonts (DSGVO – kein Google-CDN).
 * WOFF2-Dateien unter /src/fonts/ ablegen.
 */
export const unbounded = localFont({
  src: [
    { path: '../fonts/Unbounded-ExtraBold.woff2', weight: '800', style: 'normal' },
    { path: '../fonts/Unbounded-Black.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-unbounded',
  display: 'swap',
})

export const poppins = localFont({
  src: [
    { path: '../fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Poppins-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Poppins-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/Poppins-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
})
