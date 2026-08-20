'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/hooks/useGsapSectionReveal'
import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../../../../paraglide/messages.js'
import { IdeaCard } from './comps/idea-card'
import { useIdeaCardScrollReveal } from './hooks/useIdeaCardScrollReveal'

export function CoreIdeas() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.95, stagger: 0.16, y: 80 })
  useIdeaCardScrollReveal(sectionRef)

  const cards = [
    {
      description: m.about_core_card_1_description({}, { locale }),
      number: m.about_core_card_1_number({}, { locale }),
      title: m.about_core_card_1_title({}, { locale }),
    },
    {
      description: m.about_core_card_2_description({}, { locale }),
      motionSpec: m.about_core_card_2_motion_spec({}, { locale }),
      number: m.about_core_card_2_number({}, { locale }),
      title: m.about_core_card_2_title({}, { locale }),
    },
    {
      description: m.about_core_card_3_description({}, { locale }),
      motionSpec: m.about_core_card_3_motion_spec({}, { locale }),
      number: m.about_core_card_3_number({}, { locale }),
      title: m.about_core_card_3_title({}, { locale }),
    },
    {
      description: m.about_core_card_4_description({}, { locale }),
      motionSpec: m.about_core_card_4_motion_spec({}, { locale }),
      number: m.about_core_card_4_number({}, { locale }),
      title: m.about_core_card_4_title({}, { locale }),
    },
  ]

  return (
    <section
      className="core-ideas bg-neon-bg px-6 py-16 sm:px-10 lg:px-20 lg:py-20"
      ref={sectionRef}
    >
      <div className="mx-auto flex w-full max-w-[80rem] flex-col items-start gap-12">
        <div className="flex w-full flex-col items-start" data-gsap-reveal>
          <p className="flex items-center font-afacad text-[2.5rem] leading-none font-semibold tracking-[0.2em] text-accent">
            <span>{m.about_brand_tex({}, { locale })}</span>
            <span className="font-advent text-primary">{m.about_brand_cra({}, { locale })}</span>
          </p>
          <p className="mt-2 font-geist-mono text-lg leading-[1.875rem] text-accent sm:text-xl">
            {m.about_intro_description({}, { locale })}
          </p>
        </div>

        <div
          className="flex w-full flex-wrap items-center gap-4 border-2 border-primary"
          data-gsap-reveal
        >
          <span className="bg-primary px-5 py-2 font-anton text-[clamp(2.25rem,4.45vw,4rem)] leading-none tracking-[0.06em] text-surface">
            {m.about_core_label({}, { locale })}
          </span>
          <h2 className="min-w-0 px-1 font-anton text-[clamp(2.25rem,4.45vw,4rem)] leading-none tracking-[0.03em] text-neon-accent">
            {m.about_ideas_label({}, { locale })}
          </h2>
        </div>

        <p
          className="max-w-full wrap-break-word font-geist-mono text-[0.6875rem] leading-5 text-chart-5"
          data-gsap-reveal
        >
          {m.about_core_motion_spec({}, { locale })}
        </p>
        <div className="h-px w-full bg-primary/15" />

        <div className="grid w-full gap-5 md:grid-cols-2" data-idea-card-stage>
          {cards.map((card) => (
            <IdeaCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
