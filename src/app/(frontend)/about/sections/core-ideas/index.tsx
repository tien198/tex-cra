'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { usePinnedScrollReveal } from '@/texcra-lib/GSAP/usePinnedScrollReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages.js'
import { IdeaCard } from './comps/idea-card'

export function CoreIdeas() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.95, stagger: 0.16, y: 80 })
  usePinnedScrollReveal(sectionRef)

  const cards = [
    {
      description: <MessageUI locale={locale} message={m.about_core_card_1_description} />,
      id: 'core-idea-1',
      number: <MessageUI locale={locale} message={m.about_core_card_1_number} />,
      title: <MessageUI locale={locale} message={m.about_core_card_1_title} />,
    },
    {
      description: <MessageUI locale={locale} message={m.about_core_card_2_description} />,
      id: 'core-idea-2',
      motionSpec: <MessageUI locale={locale} message={m.about_core_card_2_motion_spec} />,
      number: <MessageUI locale={locale} message={m.about_core_card_2_number} />,
      title: <MessageUI locale={locale} message={m.about_core_card_2_title} />,
    },
    {
      description: <MessageUI locale={locale} message={m.about_core_card_3_description} />,
      id: 'core-idea-3',
      motionSpec: <MessageUI locale={locale} message={m.about_core_card_3_motion_spec} />,
      number: <MessageUI locale={locale} message={m.about_core_card_3_number} />,
      title: <MessageUI locale={locale} message={m.about_core_card_3_title} />,
    },
    {
      description: <MessageUI locale={locale} message={m.about_core_card_4_description} />,
      id: 'core-idea-4',
      motionSpec: <MessageUI locale={locale} message={m.about_core_card_4_motion_spec} />,
      number: <MessageUI locale={locale} message={m.about_core_card_4_number} />,
      title: <MessageUI locale={locale} message={m.about_core_card_4_title} />,
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
            <span>
              <MessageUI locale={locale} message={m.about_brand_tex} />
            </span>
            <span className="font-advent text-primary">
              <MessageUI locale={locale} message={m.about_brand_cra} />
            </span>
          </p>
          <p className="mt-2 font-geist-mono text-lg leading-[1.875rem] text-accent sm:text-xl">
            <MessageUI locale={locale} message={m.about_intro_description} />
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-12" data-pinned-reveal-stage>
          <div className="h-18 px-5 sm:px-8 lg:px-20"></div>
          <div
            className="flex w-full flex-wrap items-center gap-4 border-2 border-primary"
            data-gsap-reveal
          >
            <span className="bg-primary px-5 py-2 font-anton text-[clamp(2.25rem,4.45vw,4rem)] leading-none tracking-[0.06em] text-surface">
              <MessageUI locale={locale} message={m.about_core_label} />
            </span>
            <h2 className="min-w-0 px-1 font-anton text-[clamp(2.25rem,4.45vw,4rem)] leading-none tracking-[0.03em] text-neon-accent">
              <MessageUI locale={locale} message={m.about_ideas_label} />
            </h2>
            <div data-gsap-reveal />
          </div>

          {/* <p
            className="max-w-full wrap-break-word font-geist-mono text-[0.6875rem] leading-5 text-chart-5"

          >
            <MessageUI locale={locale} message={m.about_core_motion_spec} />
          </p> */}

          <div className="grid w-full gap-5 md:grid-cols-2" data-pinned-reveal-items>
            {cards.map((card) => (
              <IdeaCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
