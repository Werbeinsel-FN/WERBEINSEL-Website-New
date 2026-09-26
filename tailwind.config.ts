import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: 'var(--color-yellow)',
          black: 'var(--color-black)',
          muted: 'var(--color-text-muted)',
          'card-dark': 'var(--color-card-dark)',
          'card-light': 'var(--color-card-light)',
        },
      },
      fontFamily: {
        unbounded: ['var(--font-unbounded)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
