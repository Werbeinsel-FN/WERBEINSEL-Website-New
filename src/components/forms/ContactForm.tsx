'use client'

import Link from 'next/link'
import { useActionState, useState } from 'react'
import { sendContact, type FormState } from '@/app/actions'
import { formOptions as seedFormOptions } from '@/data/seed'
import { TurnstileField } from '@/components/forms/TurnstileField'
import {
  FormErrorSummary,
  FormSuccess,
  useFormScroll,
} from '@/components/forms/FormFeedback'

const initial: FormState = { ok: false }
const FORM_ID = 'kontakt-form'

const inputClass =
  'h-[70px] w-full rounded-[24px] border-[1.7px] border-brand-black bg-white px-8 py-5 font-poppins text-lg font-medium leading-[1.5] text-brand-black outline-none placeholder:text-brand-black/70 focus:border-brand-black'
const inputErrorClass = 'border-red-600'

const chipClass = (active: boolean) =>
  `cursor-pointer rounded-full border-[1.7px] border-brand-black px-6 py-4 font-poppins text-base font-semibold leading-[1.5] transition ${
    active
      ? 'bg-brand-black text-brand-yellow'
      : 'bg-white text-brand-black hover:bg-brand-black hover:text-brand-yellow'
  }`

const sectionTitleClass =
  'text-center font-unbounded text-[clamp(1.5rem,3vw,2rem)] font-extrabold leading-[1.2] text-brand-black'

export type ContactFormOptions = {
  services: string[]
  budgets: string[]
  zeitraeume: string[]
}

export function ContactForm({ formOptions = seedFormOptions }: { formOptions?: ContactFormOptions }) {
  const [state, action, pending] = useActionState(sendContact, initial)
  const [services, setServices] = useState<string[]>([])
  const [budget, setBudget] = useState('')
  const [zeitraum, setZeitraum] = useState('')
  const successRef = useFormScroll(state, FORM_ID)

  if (state.ok) {
    return <FormSuccess message={state.message} successRef={successRef} />
  }

  function toggleService(value: string) {
    setServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    )
  }

  return (
    <form
      id={FORM_ID}
      action={action}
      noValidate
      className="mx-auto flex w-full max-w-[900px] flex-col items-center"
    >
      <div className="grid w-full gap-6 md:grid-cols-2">
        <Field name="name" label="Name *" error={state.errors?.name} />
        <Field name="email" type="email" label="E-Mail *" error={state.errors?.email} />
        <Field name="unternehmen" label="Unternehmen" />
        <Field name="telefon" label="Telefon *" error={state.errors?.telefon} />
      </div>

      <fieldset className="mt-12 flex w-full flex-col items-center">
        <legend className={`${sectionTitleClass} w-full whitespace-pre-line md:mb-6`}>
          {'Welche Services\ninteressieren Sie?'}
        </legend>
        <div className="grid w-full max-w-[326px] grid-cols-2 items-start justify-items-center gap-3 pt-8 md:flex md:max-w-none md:flex-wrap md:items-center md:justify-center md:pt-0">
          {formOptions.services.map((s, i) => {
            const active = services.includes(s)
            const alone = i === 0 || i === formOptions.services.length - 1
            return (
              <label
                key={s}
                className={`${chipClass(active)} ${alone ? 'col-span-2' : ''}`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={s}
                  checked={active}
                  onChange={() => toggleService(s)}
                  className="sr-only"
                />
                {s}
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="mt-12 flex w-full flex-col items-center">
        <legend className={`${sectionTitleClass} mb-6 w-full`}>Geplantes Budget</legend>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {formOptions.budgets.map((b) => {
            const active = budget === b
            return (
              <label key={b} className={chipClass(active)}>
                <input
                  type="radio"
                  name="budget"
                  value={b}
                  checked={active}
                  onChange={() => setBudget(b)}
                  className="sr-only"
                />
                {b}
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="mt-14 flex w-full flex-col items-center pt-8">
        <legend className={`${sectionTitleClass} mb-6 w-full`}>Gewünschter Zeitrahmen</legend>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {formOptions.zeitraeume.map((z) => {
            const active = zeitraum === z
            return (
              <label key={z} className={chipClass(active)}>
                <input
                  type="radio"
                  name="zeitraum"
                  value={z}
                  checked={active}
                  onChange={() => setZeitraum(z)}
                  className="sr-only"
                />
                {z}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-12 w-full">
        <textarea
          name="nachricht"
          placeholder="Ihre Nachricht an uns (optional)"
          rows={8}
          className="min-h-[260px] w-full resize-y rounded-[24px] border-[1.7px] border-brand-black bg-white px-8 py-5 font-poppins text-lg font-medium leading-[1.5] text-brand-black outline-none placeholder:text-brand-black/70 focus:border-brand-black"
        />
      </div>

      <label
        data-field="consent"
        className="mt-8 flex w-full max-w-[560px] items-start gap-3 font-poppins text-base font-normal leading-[1.5] text-brand-black"
      >
        <input
          type="checkbox"
          name="consent"
          className="mt-1 size-4 shrink-0 accent-brand-black"
        />
        <span>
          Ich habe die{' '}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:opacity-80">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und akzeptiere sie. Ich bin damit einverstanden, dass meine Daten zur
          Bearbeitung meiner Anfrage verwendet werden. *
        </span>
      </label>
      {state.errors?.consent && (
        <p className="mt-2 text-sm text-red-600">{state.errors.consent[0]}</p>
      )}

      <TurnstileField />
      <FormErrorSummary state={state} />

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex h-[62px] items-center justify-center rounded-full bg-brand-black px-12 font-poppins text-xl font-bold text-brand-yellow transition hover:bg-black/90 disabled:opacity-50"
      >
        {pending ? 'WIRD GESENDET …' : 'ANFRAGE SENDEN'}
      </button>
    </form>
  )
}

function Field({
  name,
  label,
  type = 'text',
  error,
}: {
  name: string
  label: string
  type?: string
  error?: string[]
}) {
  return (
    <div className="flex w-full flex-col gap-1" data-field={name}>
      <input
        name={name}
        type={type}
        placeholder={label}
        aria-label={label}
        aria-invalid={Boolean(error)}
        className={`${inputClass} ${error ? inputErrorClass : ''}`}
      />
      {error && <p className="text-sm text-red-600">{error[0]}</p>}
    </div>
  )
}
