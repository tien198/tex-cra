'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useGsapSectionReveal } from '@/hooks/useGsapSectionReveal'
import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../../../../paraglide/messages.js'
import { AboutStat } from './comps/about-stat'

gsap.registerPlugin(ScrollTrigger)

export function AboutStats() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 0.85, stagger: 0.1, y: 36 })

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const media = gsap.matchMedia(section)

    media.add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.create({
        once: true,
        onEnter: () => {
          section.querySelectorAll<HTMLElement>('[data-about-count]').forEach((target) => {
            const end = Number(target.dataset.countTo ?? 0)
            const finalValue = target.dataset.finalValue ?? String(end)
            const counter = { value: 0 }

            gsap.to(counter, {
              duration: 1.6,
              ease: 'power3.out',
              onComplete: () => {
                target.textContent = finalValue
              },
              onUpdate: () => {
                target.textContent = finalValue.replace(/^\d+/, String(Math.round(counter.value)))
              },
              value: end,
            })
          })
        },
        start: 'top 82%',
        trigger: section,
      })
    })

    return () => media.revert()
  }, [locale])

  const stats = [
    {
      caption: m.about_stat_1_caption({}, { locale }),
      countTo: 3,
      label: m.about_stat_1_label({}, { locale }),
      value: m.about_stat_1_value({}, { locale }),
    },
    {
      caption: m.about_stat_2_caption({}, { locale }),
      countTo: 40,
      label: m.about_stat_2_label({}, { locale }),
      value: m.about_stat_2_value({}, { locale }),
    },
    {
      caption: m.about_stat_3_caption({}, { locale }),
      countTo: 5,
      label: m.about_stat_3_label({}, { locale }),
      value: m.about_stat_3_value({}, { locale }),
    },
    {
      caption: m.about_stat_4_caption({}, { locale }),
      countTo: 100,
      label: m.about_stat_4_label({}, { locale }),
      value: m.about_stat_4_value({}, { locale }),
    },
  ]

  return (
    <section
      className="stats bg-surface px-6 py-16 sm:px-10 lg:px-[7.5rem] lg:py-24"
      ref={sectionRef}
    >
      <div className="mx-auto flex w-full max-w-[75rem] flex-col items-center gap-12">
        <p
          className="font-aldrich text-sm tracking-[0.5em] text-primary uppercase"
          data-gsap-reveal
        >
          {m.about_stats_eyebrow({}, { locale })}
        </p>
        <p
          className="max-w-full break-words text-center font-geist-mono text-[0.6875rem] leading-5 text-chart-5"
          data-gsap-reveal
        >
          {m.about_stats_motion_spec({}, { locale })}
        </p>

        <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:gap-0">
          {stats.map((stat) => (
            <AboutStat key={stat.label} {...stat} />
          ))}
        </div>

        <div className="flex justify-center gap-2 md:hidden" aria-hidden="true">
          <span className="h-2 w-6 rounded-full bg-primary" />
          <span className="size-2 rounded-full bg-muted-foreground" />
          <span className="size-2 rounded-full bg-muted-foreground" />
          <span className="size-2 rounded-full bg-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
