'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import { Carousel, CarouselContent, CarouselDots, CarouselItem } from '@/texcra-lib/ui/carousel'
import * as m from '@/../paraglide/messages'
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
            const valueTarget = target.querySelector<HTMLElement>('strong') ?? target

            gsap.to(counter, {
              duration: 1.6,
              ease: 'power3.out',
              onComplete: () => {
                valueTarget.textContent = finalValue
              },
              onUpdate: () => {
                valueTarget.textContent = finalValue.replace(
                  /^\d+/,
                  String(Math.round(counter.value)),
                )
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
      caption: <MessageUI locale={locale} message={m.about_stat_3_caption} />,
      countTo: 5,
      finalValue: m.about_stat_3_value({}, { locale }),
      id: 'average-time',
      label: <MessageUI locale={locale} message={m.about_stat_3_label} />,
      value: <MessageUI locale={locale} message={m.about_stat_3_value} />,
    },
    {
      caption: <MessageUI locale={locale} message={m.about_stat_4_caption} />,
      countTo: 100,
      finalValue: m.about_stat_4_value({}, { locale }),
      id: 'returning-clients',
      label: <MessageUI locale={locale} message={m.about_stat_4_label} />,
      value: <MessageUI locale={locale} message={m.about_stat_4_value} />,
    },
    {
      caption: <MessageUI locale={locale} message={m.about_stat_2_caption} />,
      countTo: 40,
      finalValue: m.about_stat_2_value({}, { locale }),
      id: 'websites-delivered',
      label: <MessageUI locale={locale} message={m.about_stat_2_label} />,
      value: <MessageUI locale={locale} message={m.about_stat_2_value} />,
    },
    {
      caption: <MessageUI locale={locale} message={m.about_stat_1_caption} />,
      countTo: 3,
      finalValue: m.about_stat_1_value({}, { locale }),
      id: 'team-experts',
      label: <MessageUI locale={locale} message={m.about_stat_1_label} />,
      value: <MessageUI locale={locale} message={m.about_stat_1_value} />,
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
          <MessageUI locale={locale} message={m.about_stats_eyebrow} />
        </p>
        {/* <p
          className="max-w-full break-words text-center font-geist-mono text-[0.6875rem] leading-5 text-chart-5"
          data-gsap-reveal
        >
          <MessageUI locale={locale} message={m.about_stats_motion_spec} />
        </p> */}

        <Carousel aria-label={m.about_stats_eyebrow({}, { locale })}>
          <CarouselContent>
            {stats.map((stat) => (
              <CarouselItem key={stat.id} className="flex">
                <AboutStat {...stat} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  )
}
