'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string; theme?: string },
      ) => string
      reset: (id?: string) => void
    }
  }
}

/** Cloudflare Turnstile – nur sichtbar, wenn Site-Key gesetzt ist. */
export function TurnstileField() {
  const ref = useRef<HTMLDivElement>(null)
  const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

  useEffect(() => {
    if (!sitekey || !ref.current) return

    let widgetId: string | undefined
    let cancelled = false

    function tryRender() {
      if (cancelled || !ref.current || !window.turnstile) return
      ref.current.innerHTML = ''
      widgetId = window.turnstile.render(ref.current, {
        sitekey,
        theme: 'light',
      })
    }

    if (window.turnstile) {
      tryRender()
    } else {
      const t = window.setInterval(() => {
        if (window.turnstile) {
          window.clearInterval(t)
          tryRender()
        }
      }, 200)
      return () => {
        cancelled = true
        window.clearInterval(t)
      }
    }

    return () => {
      cancelled = true
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.reset(widgetId)
        } catch {
          /* ignore */
        }
      }
    }
  }, [sitekey])

  if (!sitekey) return null

  return <div ref={ref} className="mt-6" />
}
