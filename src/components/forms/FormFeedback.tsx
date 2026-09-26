'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { FormState } from '@/app/actions'

/** Scrollt zum ersten Fehler. */
export function useFormScroll(state: FormState, formId: string) {
  useEffect(() => {
    if (state.ok) return
    if (!state.errors && !state.message) return

    const order = [
      'name',
      'email',
      'telefon',
      'unternehmen',
      'position',
      'datei',
      'portfolio',
      'consent',
    ]
    const first = order.find((k) => state.errors?.[k]?.length)
    if (first) {
      const el =
        document.querySelector<HTMLElement>(`#${formId} [name="${first}"]`) ||
        document.querySelector<HTMLElement>(`#${formId} [data-field="${first}"]`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (el && 'focus' in el) (el as HTMLElement).focus({ preventScroll: true })
      return
    }
    document
      .querySelector<HTMLElement>(`#${formId} [data-form-alert]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [state, formId])
}

export function FormErrorSummary({
  state,
}: {
  state: FormState
}) {
  if (state.ok) return null
  const hasFieldErrors = Boolean(state.errors && Object.keys(state.errors).length)
  if (!hasFieldErrors && !state.message) return null

  return (
    <div
      data-form-alert
      role="alert"
      className="mt-6 w-full max-w-[560px] rounded-card border border-red-600/40 bg-red-50 px-5 py-4 text-center"
    >
      <p className="font-poppins text-sm font-semibold text-red-700">
        {state.message ||
          'Bitte füllen Sie die markierten Pflichtfelder aus.'}
      </p>
    </div>
  )
}

/** Solid filled thumbs-up (no outline / sharp inner cuts). */
function ThumbsUpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-20 w-20 text-brand-black md:h-28 md:w-28"
      fill="currentColor"
      aria-hidden
    >
      <path d="M1.75 21.5h3.5V10.25H1.75V21.5zm19.82-9.95c.24-.39.37-.84.37-1.32 0-1.38-1.12-2.5-2.5-2.5h-5.34l.8-3.85.03-.28c0-.52-.21-.99-.55-1.33L13.17 1 7.09 7.09c-.34.33-.54.78-.54 1.28v10c0 1.1.9 2 2 2h8.23c.75 0 1.4-.45 1.67-1.11l2.75-6.4c.09-.21.13-.43.13-.65 0-.18-.03-.35-.09-.52l.33.06z" />
    </svg>
  )
}

function DankeOverlay({ onDone }: { onDone: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(onDone, 2200)
    return () => {
      window.clearTimeout(t)
      document.body.style.overflow = prev
    }
  }, [onDone])

  if (!mounted) return null

  return createPortal(
    <div
      className="form-danke-overlay fixed inset-0 z-[200] flex items-center justify-center bg-brand-yellow"
      role="status"
      aria-live="polite"
    >
      <div className="form-danke-content flex flex-col items-center gap-5 px-6 text-center">
        <ThumbsUpIcon />
        <p className="font-unbounded text-[clamp(2.75rem,10vw,6rem)] font-extrabold uppercase leading-none tracking-tight text-brand-black">
          Danke
        </p>
      </div>
    </div>,
    document.body,
  )
}

/** Full-screen Danke, then reset the form (no lasting success card). */
export function FormDankeThenReset({ onFinished }: { onFinished: () => void }) {
  const onFinishedRef = useRef(onFinished)
  useEffect(() => {
    onFinishedRef.current = onFinished
  }, [onFinished])
  const stableDone = useCallback(() => {
    onFinishedRef.current()
  }, [])
  return <DankeOverlay onDone={stableDone} />
}
