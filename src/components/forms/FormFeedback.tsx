'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import type { FormState } from '@/app/actions'

/** Scrollt zum ersten Fehler oder zur Erfolgsmeldung. */
export function useFormScroll(state: FormState, formId: string) {
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (state.ok) {
      successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
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

  return successRef
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
      className="mt-6 w-full max-w-[560px] rounded-[16px] border border-red-600/40 bg-red-50 px-5 py-4 text-center"
    >
      <p className="font-poppins text-sm font-semibold text-red-700">
        {state.message ||
          'Bitte füllen Sie die markierten Pflichtfelder aus.'}
      </p>
    </div>
  )
}

function ThumbsUpIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      className="h-20 w-20 text-brand-black md:h-28 md:w-28"
      fill="currentColor"
      aria-hidden
    >
      <path d="M48.5 28H36.2V16.8c0-4.2-2.6-7.8-6.5-7.8-1.4 0-2.4.9-2.8 2.3L22 28H14c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h28.8c1.8 0 3.4-1.2 3.9-2.9l5.8-19.4c.7-2.4-.9-4.7-3.5-4.7zM18 52H14V32h4v20zm28.8 0H22V30.7l4.8-16.6c.1-.2.2-.3.4-.3.8 0 1.5 1.1 1.5 2.8V32h19.8L43.8 52z" />
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
      <div className="form-danke-content flex flex-col items-center gap-4 px-6 text-center">
        <ThumbsUpIcon />
        <p className="font-unbounded text-[clamp(2.75rem,10vw,6rem)] font-extrabold uppercase leading-none tracking-tight text-brand-black">
          Danke
        </p>
      </div>
    </div>,
    document.body,
  )
}

export function FormSuccess({
  message,
  successRef,
}: {
  message?: string
  successRef: React.RefObject<HTMLDivElement | null>
}) {
  const [showOverlay, setShowOverlay] = useState(true)
  const hideOverlay = useRef(() => setShowOverlay(false)).current

  return (
    <>
      {showOverlay ? <DankeOverlay onDone={hideOverlay} /> : null}
      <div
        ref={successRef}
        role="status"
        className="mx-auto w-full max-w-[900px] rounded-[24px] bg-brand-yellow p-8 text-center text-brand-black md:p-12"
      >
        <p className="font-unbounded text-2xl font-extrabold uppercase md:text-3xl">
          Vielen Dank!
        </p>
        <p className="mt-4 font-poppins text-lg font-semibold leading-relaxed">
          {message || 'Ihre Nachricht ist bei uns eingegangen.'}
        </p>
      </div>
    </>
  )
}
