'use client'

import { useRef } from 'react'
import { Layers3, Shield, Zap } from 'lucide-react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { usePinnedScrollReveal } from '@/texcra-lib/GSAP/usePinnedScrollReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages.js'
import { PrincipleCard } from './comps/principle-card'

export function Principles() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.9, scale: 0.9, stagger: 0.12, y: 120 })
  usePinnedScrollReveal(sectionRef)

  const principles = [
    {
      description: <MessageUI locale={locale} message={m.about_principle_1_description} />,
      id: 'velocity',
      icon: Zap,
      title: <MessageUI locale={locale} message={m.about_principle_1_title} />,
    },
    {
      className: 'opacity-50 md:opacity-100',
      description: <MessageUI locale={locale} message={m.about_principle_2_description} />,
      id: 'integrity',
      icon: Shield,
      title: <MessageUI locale={locale} message={m.about_principle_2_title} />,
    },
    {
      className: 'opacity-50 md:opacity-100',
      description: <MessageUI locale={locale} message={m.about_principle_3_description} />,
      id: 'depth',
      icon: Layers3,
      title: <MessageUI locale={locale} message={m.about_principle_3_title} />,
    },
  ]

  return (
    <section className="bg-primary-muted py-16 lg:px-[7.5rem] lg:py-[7.5rem]" ref={sectionRef}>
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-12" data-pinned-reveal-stage>
        <div className="h-18 px-5 sm:px-8 lg:px-20"></div>
        <div className="flex flex-col items-start gap-4 px-6 sm:px-10 lg:px-0">
          <p
            className="font-aldrich text-sm tracking-[0.5em] text-primary uppercase"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.about_principles_eyebrow} />
          </p>
          <h2
            className="font-afacad text-[clamp(3rem,3.9vw,3.5rem)] leading-[1.05] font-semibold text-surface"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.about_principles_title} />
          </h2>
          {/* <p
            className="max-w-full break-words font-geist-mono text-[0.6875rem] leading-5 text-surface"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.about_principles_motion_spec} />
          </p> */}
        </div>

        <div
          className="grid w-full gap-4 px-6 pb-2 sm:px-10 md:grid-cols-3 md:gap-6 lg:px-0"
          data-pinned-reveal-items
        >
          {principles.map((principle) => (
            <PrincipleCard key={principle.id} {...principle} />
          ))}
        </div>
      </div>
    </section>
  )
}
