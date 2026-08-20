'use client'

import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../paraglide/messages.js'
import { ServiceCard } from './comps/service-card'

export function Services() {
  const locale = useLocale()
  const cards = [
    {
      description: m.services_card_1_description({}, { locale }),
      number: m.services_card_1_number({}, { locale }),
      title: m.services_card_1_title({}, { locale }),
    },
    {
      description: m.services_card_2_description({}, { locale }),
      number: m.services_card_2_number({}, { locale }),
      title: m.services_card_2_title({}, { locale }),
    },
    {
      description: m.services_card_3_description({}, { locale }),
      number: m.services_card_3_number({}, { locale }),
      title: m.services_card_3_title({}, { locale }),
    },
  ]

  return (
    <section
      className="flex min-h-[43.4375rem] scroll-mt-16 items-center bg-primary-muted px-5 py-20 sm:px-8 lg:px-20"
      id="services"
    >
      <div className="mx-auto flex w-full max-w-[80rem] flex-col items-center gap-12">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <p className="font-geist-mono text-[0.6875rem] tracking-[0.27em] text-primary uppercase">
            {m.services_eyebrow({}, { locale })}
          </p>
          <h2 className="mt-5 font-afacad text-4xl tracking-[0.02em] text-foreground sm:text-5xl">
            {m.services_title({}, { locale })}
          </h2>
          <p className="mt-5 whitespace-pre-line font-geist-mono text-sm leading-7 text-muted-foreground sm:text-base">
            {m.hero_description({}, { locale })}
          </p>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <ServiceCard key={card.number} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
