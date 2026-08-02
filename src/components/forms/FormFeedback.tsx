'use client'

import { useEffect, useRef } from 'react'
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

export function FormSuccess({
  message,
  successRef,
}: {
  message?: string
  successRef: React.RefObject<HTMLDivElement | null>
}) {
  return (
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
  )
}
