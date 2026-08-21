'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages.js'

export function ContactCta() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.9, stagger: 0.11, y: 30 })

  return (
    <section
      className="relative flex min-h-[42.5rem] scroll-mt-16 flex-col items-center justify-center gap-6 overflow-hidden bg-neon-bg px-5 py-20 text-center sm:px-8"
      id="contact"
      ref={sectionRef}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[35rem] w-[43.75rem] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cta-glow" />
      <p
        className="relative font-geist-mono text-[0.6875rem] tracking-[0.36em] text-chart-1 uppercase"
        data-gsap-reveal
      >
        <MessageUI locale={locale} message={m.cta_eyebrow} />
      </p>
      <h2
        className="relative max-w-[56.25rem] whitespace-pre-line font-afacad text-[clamp(2.75rem,4.45vw,4rem)] leading-[1.05] tracking-[0.015em] text-primary-foreground drop-shadow-neon-heading"
        data-gsap-reveal
      >
        <MessageUI locale={locale} message={m.cta_heading} />
      </h2>
      <p
        className="relative font-geist-mono text-sm text-ring sm:text-[0.9375rem]"
        data-gsap-reveal
      >
        <MessageUI locale={locale} message={m.cta_description} />
      </p>
      <a
        className="relative mt-1 rounded-lg bg-primary px-12 py-[1.125rem] font-abel text-lg tracking-[0.095em] text-primary-foreground shadow-neon-cta transition hover:bg-chart-3"
        data-gsap-reveal
        href="mailto:hello@texcra.com"
      >
        <MessageUI locale={locale} message={m.cta_button} />
      </a>
    </section>
  )
}
