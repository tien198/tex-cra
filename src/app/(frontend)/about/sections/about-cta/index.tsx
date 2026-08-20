'use client'

import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages.js'

export function AboutCta() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 1.5, stagger: 0.12, y: 40 })

  return (
    <section
      className="cta relative overflow-hidden border-t border-primary/15 bg-neon-bg px-6 py-20 text-center sm:px-10 lg:px-[7.5rem] lg:py-40"
      id="contact"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[35rem] w-[43.75rem] max-w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta-glow" />
      <div className="relative z-10 mx-auto flex w-full max-w-[75rem] flex-col items-center gap-8">
        <p
          className="font-aldrich text-sm tracking-[0.5em] text-primary uppercase"
          data-gsap-reveal
        >
          {m.about_cta_eyebrow({}, { locale })}
        </p>
        <h2
          className="whitespace-pre-line font-aldrich text-[clamp(3rem,5vw,4.5rem)] leading-[1.1] text-white"
          data-gsap-reveal
        >
          {m.about_cta_heading({}, { locale })}
        </h2>
        <p
          className="max-w-[56rem] whitespace-pre-line font-afacad text-lg leading-[1.7] text-ring"
          data-gsap-reveal
        >
          {m.about_cta_description({}, { locale })}
        </p>

        <div
          className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center"
          data-gsap-reveal
        >
          <a
            className="flex items-center justify-center gap-2.5 rounded-md bg-primary px-10 py-4 font-aldrich text-sm tracking-[0.14em] text-white transition hover:bg-chart-3"
            href="mailto:hello@texcra.com"
          >
            {m.about_cta_primary({}, { locale })}
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          <a
            className="flex items-center justify-center rounded-md border border-primary/40 px-10 py-4 font-aldrich text-sm tracking-[0.14em] text-ring transition hover:border-primary hover:text-white"
            href="/#work"
          >
            {m.about_cta_secondary({}, { locale })}
          </a>
        </div>

        <p
          className="max-w-full break-words font-geist-mono text-[0.6875rem] leading-5 text-chart-5"
          data-gsap-reveal
        >
          {m.about_cta_motion_spec({}, { locale })}
        </p>
      </div>
    </section>
  )
}
