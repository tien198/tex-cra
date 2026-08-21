'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages'
import { StatItem } from './comps/stat-item'

export function Stats() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { scale: 0.94, stagger: 0.08, start: 'top 88%', y: 20 })

  const stats = [
    {
      id: 'ttfb',
      label: <MessageUI locale={locale} message={m.stats_ttfb_label} />,
      value: <MessageUI locale={locale} message={m.stats_ttfb_value} />,
    },
    {
      id: 'type-safe',
      label: <MessageUI locale={locale} message={m.stats_type_safe_label} />,
      value: <MessageUI locale={locale} message={m.stats_type_safe_value} />,
    },
    {
      id: 'technical-debt',
      label: <MessageUI locale={locale} message={m.stats_technical_debt_label} />,
      value: <MessageUI locale={locale} message={m.stats_technical_debt_value} />,
    },
    {
      id: 'pipeline',
      label: <MessageUI locale={locale} message={m.stats_pipeline_label} />,
      value: <MessageUI locale={locale} message={m.stats_pipeline_value} />,
    },
  ]

  return (
    <section className="bg-neon-bg lg:min-h-[12.5rem]" ref={sectionRef}>
      <div className="mx-auto grid max-w-[90rem] grid-cols-2 items-center divide-x divide-y divide-primary lg:min-h-[12.5rem] lg:grid-cols-4 lg:divide-y-0">
        {stats.map((stat) => (
          <StatItem key={stat.id} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  )
}
