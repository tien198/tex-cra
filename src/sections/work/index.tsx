'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages'
import { WorkCard } from './comps/work-card'

export function Work() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { scale: 0.98, stagger: 0.1, y: 40 })

  const projects = [
    {
      id: 'nebula',
      name: <MessageUI locale={locale} message={m.work_card_1_name} />,
      tag: <MessageUI locale={locale} message={m.work_card_1_tag} />,
      thumbnailLabel: <MessageUI locale={locale} message={m.work_card_1_thumbnail_label} />,
    },
    {
      id: 'vertex',
      name: <MessageUI locale={locale} message={m.work_card_2_name} />,
      tag: <MessageUI locale={locale} message={m.work_card_2_tag} />,
      thumbnailLabel: <MessageUI locale={locale} message={m.work_card_2_thumbnail_label} />,
    },
    {
      id: 'pulse',
      name: <MessageUI locale={locale} message={m.work_card_3_name} />,
      tag: <MessageUI locale={locale} message={m.work_card_3_tag} />,
      thumbnailLabel: <MessageUI locale={locale} message={m.work_card_3_thumbnail_label} />,
    },
  ]

  return (
    <section
      className="scroll-mt-16 bg-primary-muted px-5 py-20 sm:px-8 lg:px-20"
      id="work"
      ref={sectionRef}
    >
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-2" data-gsap-reveal>
            <p className="font-geist-mono text-[0.6875rem] tracking-[0.27em] text-primary uppercase">
              <MessageUI locale={locale} message={m.work_eyebrow} />
            </p>
            <h2 className="font-afacad text-4xl tracking-[0.02em] text-foreground sm:text-5xl">
              <MessageUI locale={locale} message={m.work_title} />
            </h2>
          </div>
          <a
            className="w-fit rounded-lg border border-primary bg-secondary px-5 py-2.5 font-geist-mono text-[0.8125rem] text-secondary-foreground transition hover:bg-background"
            data-gsap-reveal
            href="#contact"
          >
            <MessageUI locale={locale} message={m.work_view_all} />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <WorkCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
