'use client'

import { useRef } from 'react'
import { Layers3, Shield, Zap } from 'lucide-react'

import { useGsapSectionReveal } from '@/hooks/useGsapSectionReveal'
import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../../../../paraglide/messages.js'
import { PrincipleCard } from './comps/principle-card'

export function Principles() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.9, scale: 0.9, stagger: 0.12, y: 120 })

  const principles = [
    {
      description: m.about_principle_1_description({}, { locale }),
      icon: Zap,
      title: m.about_principle_1_title({}, { locale }),
    },
    {
      className: 'opacity-50 md:opacity-100',
      description: m.about_principle_2_description({}, { locale }),
      icon: Shield,
      title: m.about_principle_2_title({}, { locale }),
    },
    {
      className: 'opacity-50 md:opacity-100',
      description: m.about_principle_3_description({}, { locale }),
      icon: Layers3,
      title: m.about_principle_3_title({}, { locale }),
    },
  ]

  return (
    <section className="bg-primary-muted py-16 lg:px-[7.5rem] lg:py-[7.5rem]" ref={sectionRef}>
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-12">
        <div className="flex flex-col items-start gap-4 px-6 sm:px-10 lg:px-0">
          <p
            className="font-aldrich text-sm tracking-[0.5em] text-primary uppercase"
            data-gsap-reveal
          >
            {m.about_principles_eyebrow({}, { locale })}
          </p>
          <h2
            className="font-afacad text-[clamp(3rem,3.9vw,3.5rem)] leading-[1.05] font-semibold text-surface"
            data-gsap-reveal
          >
            {m.about_principles_title({}, { locale })}
          </h2>
          <p
            className="max-w-full break-words font-geist-mono text-[0.6875rem] leading-5 text-surface"
            data-gsap-reveal
          >
            {m.about_principles_motion_spec({}, { locale })}
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-10 md:gap-6 lg:px-0">
          {principles.map((principle) => (
            <PrincipleCard key={principle.title} {...principle} />
          ))}
        </div>

        <div className="flex justify-center gap-2 md:hidden" aria-hidden="true">
          <span className="h-2 w-6 rounded-full bg-primary" />
          <span className="size-2 rounded-full bg-muted-foreground" />
          <span className="size-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
