'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/hooks/useGsapSectionReveal'
import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../../../../paraglide/messages.js'
import { ProcessStep } from './comps/process-step'

export function Process() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.85, stagger: 0.16, x: -60, y: 0 })

  const steps = [
    {
      description: m.about_process_1_description({}, { locale }),
      number: m.about_process_1_number({}, { locale }),
      title: m.about_process_1_title({}, { locale }),
    },
    {
      className: 'opacity-[0.85]',
      description: m.about_process_2_description({}, { locale }),
      number: m.about_process_2_number({}, { locale }),
      title: m.about_process_2_title({}, { locale }),
    },
    {
      className: 'opacity-[0.65]',
      description: m.about_process_3_description({}, { locale }),
      number: m.about_process_3_number({}, { locale }),
      title: m.about_process_3_title({}, { locale }),
    },
    {
      className: 'opacity-[0.45]',
      description: m.about_process_4_description({}, { locale }),
      number: m.about_process_4_number({}, { locale }),
      title: m.about_process_4_title({}, { locale }),
    },
  ]

  return (
    <section
      className="process relative overflow-hidden bg-neon-bg px-6 py-16 sm:px-10 lg:px-[7.5rem] lg:py-[7.5rem]"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[35rem] w-[43.75rem] max-w-[130vw] -translate-x-1/2 -translate-y-[13%] rounded-full bg-cta-glow" />
      <div className="relative mx-auto flex w-full max-w-[75rem] flex-col gap-8 lg:gap-16">
        <div className="relative z-10 flex flex-col items-center gap-4 text-center">
          <p
            className="font-aldrich text-sm tracking-[0.5em] text-primary uppercase"
            data-gsap-reveal
          >
            {m.about_process_eyebrow({}, { locale })}
          </p>
          <h2
            className="font-afacad text-[clamp(3rem,3.9vw,3.5rem)] leading-[1.05] font-semibold text-[#f5f5f5]"
            data-gsap-reveal
          >
            {m.about_process_title({}, { locale })}
          </h2>
          <p
            className="max-w-full break-words font-geist-mono text-[0.6875rem] leading-5 text-chart-5"
            data-gsap-reveal
          >
            {m.about_process_motion_spec({}, { locale })}
          </p>
        </div>

        <div>
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}
