'use client'

import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../paraglide/messages.js'
import { StatItem } from './comps/stat-item'

export function Stats() {
  const locale = useLocale()
  const stats = [
    [m.stats_ttfb_value({}, { locale }), m.stats_ttfb_label({}, { locale })],
    [m.stats_type_safe_value({}, { locale }), m.stats_type_safe_label({}, { locale })],
    [m.stats_technical_debt_value({}, { locale }), m.stats_technical_debt_label({}, { locale })],
    [m.stats_pipeline_value({}, { locale }), m.stats_pipeline_label({}, { locale })],
  ]

  return (
    <section className="bg-neon-bg lg:min-h-[12.5rem]">
      <div className="mx-auto grid max-w-[90rem] grid-cols-2 items-center divide-x divide-y divide-primary lg:min-h-[12.5rem] lg:grid-cols-4 lg:divide-y-0">
        {stats.map(([value, label]) => (
          <StatItem key={label} label={label} value={value} />
        ))}
      </div>
    </section>
  )
}
