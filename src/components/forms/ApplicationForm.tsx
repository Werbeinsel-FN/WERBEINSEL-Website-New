'use client'

import Link from 'next/link'
import { useActionState, useState } from 'react'
import { sendApplication, type FormState } from '@/app/actions'
import { formOptions as seedFormOptions } from '@/data/seed'
import { TurnstileField } from '@/components/forms/TurnstileField'
import {
  FormErrorSummary,
  FormDankeThenReset,
  useFormScroll,
} from '@/components/forms/FormFeedback'

const initial: FormState = { ok: false }
const FORM_ID = 'bewerbung-form'

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

type Props = {
  positions: string[]
  formOptions?: { verfuegbarAb: string[]; services?: string[] }
}

export function ApplicationForm({ positions, formOptions = seedFormOptions }: Props) {
  const [formKey, setFormKey] = useState(0)
  return (
    <ApplicationFormInner
      key={formKey}
      positions={positions}
      formOptions={formOptions}
      onSuccessDone={() => setFormKey((k) => k + 1)}
    />
  )
}

function ApplicationFormInner({
  positions,
  formOptions = seedFormOptions,
  onSuccessDone,
}: Props & { onSuccessDone: () => void }) {
  const [state, formAction, pending] = useActionState(sendApplication, initial)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telefon, setTelefon] = useState('')
  const [position, setPosition] = useState('')
  const [verfuegbarAb, setVerfuegbarAb] = useState('')
  const [services, setServices] = useState<string[]>([])
  const [file, setFile] = useState<File | null>(null)
  const [portfolio, setPortfolio] = useState('')
  const [nachricht, setNachricht] = useState('')
  const [consent, setConsent] = useState(false)
  const serviceOptions = formOptions.services ?? seedFormOptions.services
  useFormScroll(state, FORM_ID)

  const allPositions = [...positions, 'Initiativbewerbung']

  if (state.ok) {
    return <FormDankeThenReset onFinished={onSuccessDone} />
  }

  function submitAction(formData: FormData) {
    // File input is cleared by React after action; keep selection in state.
    if (file) formData.set('datei', file)
    else formData.delete('datei')
    return formAction(formData)
  }

  return (
    <form
      id={FORM_ID}
      action={submitAction}
      noValidate
      className="mx-auto flex w-full max-w-[900px] flex-col items-center"
    >
      <div className="grid w-full gap-6 md:grid-cols-2">
        <Field
          name="name"
          label="Name *"
          error={state.errors?.name}
          value={name}
          onChange={setName}
        />
        <Field
          name="email"
          type="email"
          label="E-Mail *"
          error={state.errors?.email}
          value={email}
          onChange={setEmail}
        />
        <Field
          name="telefon"
          label="Telefon *"
          error={state.errors?.telefon}
          className="md:col-span-2"
          value={telefon}
          onChange={setTelefon}
        />
      </div>

      <fieldset className="mt-12 flex w-full flex-col items-center" data-field="position">
        <legend className={`${sectionTitleClass} mb-6 w-full`}>Gewünschte Position *</legend>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {allPositions.map((p) => {
            const active = position === p
            return (
              <label key={p} className={chipClass(active)}>
                <input
                  type="radio"
                  name="position"
                  value={p}
                  checked={active}
                  onChange={() => setPosition(p)}
                  className="sr-only"
                />
                {p}
              </label>
            )
          })}
        </div>
        {state.errors?.position && (
          <p className="mt-2 text-sm text-red-600">{state.errors.position[0]}</p>
        )}
      </fieldset>

      <fieldset className="mt-12 flex w-full flex-col items-center">
        <legend className={`${sectionTitleClass} mb-6 w-full`}>Verfügbar ab</legend>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {formOptions.verfuegbarAb.map((v) => {
            const active = verfuegbarAb === v
            return (
              <label key={v} className={chipClass(active)}>
                <input
                  type="radio"
                  name="verfuegbarAb"
                  value={v}
                  checked={active}
                  onChange={() => setVerfuegbarAb(v)}
                  className="sr-only"
                />
                {v}
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset className="mt-12 flex w-full flex-col items-center">
        <legend className={`${sectionTitleClass} mb-6 w-full`}>Interessensbereiche</legend>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {serviceOptions.map((s) => {
            const active = services.includes(s)
            return (
              <label key={s} className={chipClass(active)}>
                <input
                  type="checkbox"
                  name="services"
                  value={s}
                  checked={active}
                  onChange={() =>
                    setServices((prev) =>
                      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
                    )
                  }
                  className="sr-only"
                />
                {s}
              </label>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-12 w-full" data-field="datei">
        <label className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[24px] border-[1.7px] border-dashed border-brand-black bg-white px-12 py-12 text-center transition hover:bg-brand-card-light/50">
          <UploadIcon />
          <span className="font-poppins text-base font-semibold text-brand-black">
            {file?.name || 'Lebenslauf & Arbeitsproben hier ablegen *'}
          </span>
          <span className="font-poppins text-sm font-normal text-brand-black/60">
            oder klicken zum Auswählen – PDF, DOC, JPG, PNG, ZIP (max. 10 MB)
          </span>
          <input
            type="file"
            name="datei"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.zip,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png,application/zip"
            className="sr-only"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </label>
        {state.errors?.datei && (
          <p className="mt-2 text-center text-sm text-red-600">{state.errors.datei[0]}</p>
        )}
      </div>

      <div className="mt-6 w-full">
        <Field
          name="portfolio"
          type="url"
          label="Portfolio / Behance / Dribbble / LinkedIn (optional)"
          error={state.errors?.portfolio}
          value={portfolio}
          onChange={setPortfolio}
        />
      </div>

      <div className="mt-6 w-full">
        <textarea
          name="nachricht"
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
          placeholder="Möchtest du uns noch etwas mitteilen? (optional)"
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
          value="on"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1 size-4 shrink-0 accent-brand-black"
        />
        <span>
          Ich habe die{' '}
          <Link href="/datenschutz" className="underline underline-offset-2 hover:opacity-80">
            Datenschutzerklärung
          </Link>{' '}
          gelesen und akzeptiere sie. Ich bin damit einverstanden, dass meine Daten zur
          Bearbeitung meiner Bewerbung verwendet werden. *
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
        className="mt-12 inline-flex h-[62px] items-center justify-center whitespace-nowrap rounded-full bg-brand-black px-8 font-poppins text-lg font-bold text-brand-yellow transition hover:bg-black/90 disabled:opacity-50 sm:px-12 sm:text-xl"
      >
        {pending ? 'WIRD GESENDET …' : 'BEWERBUNG ABSENDEN'}
      </button>
    </form>
  )
}

function Field({
  name,
  label,
  type = 'text',
  error,
  className = '',
  value,
  onChange,
}: {
  name: string
  label: string
  type?: string
  error?: string[]
  className?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className={`flex w-full flex-col gap-1 ${className}`} data-field={name}>
      <input
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
        aria-label={label}
        aria-invalid={Boolean(error)}
        className={`${inputClass} ${error ? inputErrorClass : ''}`}
      />
      {error && <p className="text-sm text-red-600">{error[0]}</p>}
    </div>
  )
}

function UploadIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden className="mb-1">
      <path
        d="M12 16V4M12 4L7 9M12 4L17 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
