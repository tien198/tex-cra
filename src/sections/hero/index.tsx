'use client'

import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../paraglide/messages.js'

export function Hero() {
  const locale = useLocale()
  const connector = m.hero_heading_connector({}, { locale })

  return (
    <section
      className="relative flex min-h-[47rem] items-center justify-center overflow-hidden border border-primary bg-surface bg-cover bg-center lg:min-h-[63.9375rem]"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 flex w-full max-w-[90rem] flex-col items-center gap-8 px-5 py-20 text-center sm:px-8 lg:px-20 lg:pt-[7.5rem]">
        <p className="flex items-center gap-2 rounded-full border border-border bg-secondary px-3.5 py-1.5 font-geist-mono text-[0.6875rem] tracking-[0.18em] text-primary uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {m.hero_badge({}, { locale })}
        </p>

        <h1 className="flex max-w-[80rem] flex-col items-center text-muted drop-shadow-neon-heading">
          <span className="font-alumni text-[clamp(3.5rem,6.67vw,6rem)] leading-none font-light tracking-[clamp(0.3rem,1.67vw,1.5rem)] uppercase">
            {m.hero_heading_line_1({}, { locale })}
          </span>
          {connector ? (
            <span className="font-alumni text-[clamp(2.5rem,4vw,4.75rem)] leading-none font-light tracking-[0.2em]">
              {connector}
            </span>
          ) : null}
          <span className="font-afacad text-[clamp(3.5rem,6.67vw,6rem)] leading-none font-normal tracking-[clamp(0.3rem,1.67vw,1.5rem)] uppercase">
            {m.hero_heading_line_2({}, { locale })}
          </span>
        </h1>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="rounded-full border-2 border-primary-foreground bg-primary px-9 py-4 font-abel text-base tracking-[0.095em] text-primary-foreground shadow-neon-button transition hover:bg-chart-3"
            href="#contact"
          >
            {m.hero_primary_cta({}, { locale })}
          </a>
          <a
            className="rounded-full border-2 border-primary bg-secondary px-9 py-4 font-abel text-base tracking-[0.095em] text-secondary-foreground transition hover:bg-background"
            href="#work"
          >
            {m.hero_secondary_cta({}, { locale })}
          </a>
        </div>
      </div>
    </section>
  )
}
