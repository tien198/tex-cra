'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { usePinnedScrollReveal } from '@/texcra-lib/GSAP/usePinnedScrollReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages'
import { ProcessStep } from './comps/process-step'

export function Process() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.85, stagger: 0.16, x: -60, y: 0 })
  usePinnedScrollReveal(sectionRef)

  const steps = [
    {
      description: <MessageUI locale={locale} message={m.about_process_1_description} />,
      id: 'process-1',
      number: <MessageUI locale={locale} message={m.about_process_1_number} />,
      title: <MessageUI locale={locale} message={m.about_process_1_title} />,
    },
    {
      className: 'opacity-[0.85]',
      description: <MessageUI locale={locale} message={m.about_process_2_description} />,
      id: 'process-2',
      number: <MessageUI locale={locale} message={m.about_process_2_number} />,
      title: <MessageUI locale={locale} message={m.about_process_2_title} />,
    },
    {
      className: 'opacity-[0.65]',
      description: <MessageUI locale={locale} message={m.about_process_3_description} />,
      id: 'process-3',
      number: <MessageUI locale={locale} message={m.about_process_3_number} />,
      title: <MessageUI locale={locale} message={m.about_process_3_title} />,
    },
    {
      className: 'opacity-[0.45]',
      description: <MessageUI locale={locale} message={m.about_process_4_description} />,
      id: 'process-4',
      number: <MessageUI locale={locale} message={m.about_process_4_number} />,
      title: <MessageUI locale={locale} message={m.about_process_4_title} />,
    },
  ]

  return (
    <section
      className="process relative overflow-hidden bg-neon-bg px-6 py-16 sm:px-10 lg:px-[7.5rem] lg:py-[7.5rem]"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[35rem] w-[43.75rem] max-w-[130vw] -translate-x-1/2 -translate-y-[13%] rounded-full bg-cta-glow" />
      <div
        className="relative mx-auto flex w-full max-w-[75rem] flex-col gap-8 lg:gap-16"
        data-pinned-reveal-stage
      >
        <div className="h-18 px-5 sm:px-8 lg:px-20"></div>
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <p
            className="font-aldrich text-sm tracking-[0.5em] text-primary uppercase"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.about_process_eyebrow} />
          </p>
          <h2
            className="font-afacad text-[clamp(3rem,3.9vw,3.5rem)] leading-[1.05] font-semibold text-accent"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.about_process_title} />
          </h2>
          {/* <p
            className="max-w-full break-words font-geist-mono text-[0.6875rem] leading-5 text-chart-5"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.about_process_motion_spec} />
          </p> */}
        </div>

        <div className="grid" data-pinned-reveal-items>
          {steps.map((step) => (
            <ProcessStep key={step.id} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
