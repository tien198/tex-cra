'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages'
import { ServiceCard } from './comps/service-card'

export function Services() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { scale: 0.98, stagger: 0.09, y: 36 })

  const cards = [
    {
      description: <MessageUI locale={locale} message={m.services_card_1_description} />,
      id: 'service-1',
      number: <MessageUI locale={locale} message={m.services_card_1_number} />,
      title: <MessageUI locale={locale} message={m.services_card_1_title} />,
    },
    {
      description: <MessageUI locale={locale} message={m.services_card_2_description} />,
      id: 'service-2',
      number: <MessageUI locale={locale} message={m.services_card_2_number} />,
      title: <MessageUI locale={locale} message={m.services_card_2_title} />,
    },
    {
      description: <MessageUI locale={locale} message={m.services_card_3_description} />,
      id: 'service-3',
      number: <MessageUI locale={locale} message={m.services_card_3_number} />,
      title: <MessageUI locale={locale} message={m.services_card_3_title} />,
    },
  ]

  return (
    <section
      className="flex min-h-[43.4375rem] scroll-mt-16 items-center bg-primary-muted px-5 py-20 sm:px-8 lg:px-20"
      id="services"
      ref={sectionRef}
    >
      <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center gap-12">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <p
            className="font-geist-mono text-[0.6875rem] tracking-[0.27em] text-primary uppercase"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.services_eyebrow} />
          </p>
          <h2
            className="mt-5 font-afacad text-4xl tracking-[0.02em] text-foreground sm:text-5xl"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.services_title} />
          </h2>
          <p
            className="mt-5 whitespace-pre-line font-geist-mono text-sm leading-7 text-muted-foreground sm:text-base"
            data-gsap-reveal
          >
            <MessageUI locale={locale} message={m.hero_description} />
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
