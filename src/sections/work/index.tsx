'use client'

import { useLocale } from '@/hooks/useLocale'
import * as m from '../../../paraglide/messages.js'
import { WorkCard } from './comps/work-card'

export function Work() {
  const locale = useLocale()
  const projects = [
    {
      name: m.work_card_1_name({}, { locale }),
      tag: m.work_card_1_tag({}, { locale }),
      thumbnailLabel: m.work_card_1_thumbnail_label({}, { locale }),
    },
    {
      name: m.work_card_2_name({}, { locale }),
      tag: m.work_card_2_tag({}, { locale }),
      thumbnailLabel: m.work_card_2_thumbnail_label({}, { locale }),
    },
    {
      name: m.work_card_3_name({}, { locale }),
      tag: m.work_card_3_tag({}, { locale }),
      thumbnailLabel: m.work_card_3_thumbnail_label({}, { locale }),
    },
  ]

  return (
    <section className="scroll-mt-16 bg-primary-muted px-5 py-20 sm:px-8 lg:px-20" id="work">
      <div className="mx-auto flex w-full max-w-[80rem] flex-col gap-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-2">
            <p className="font-mono text-[0.6875rem] tracking-[0.27em] text-primary uppercase">
              {m.work_eyebrow({}, { locale })}
            </p>
            <h2 className="font-display text-4xl tracking-[0.02em] text-foreground sm:text-5xl">
              {m.work_title({}, { locale })}
            </h2>
          </div>
          <a
            className="w-fit rounded-lg border border-primary bg-secondary px-5 py-2.5 font-mono text-[0.8125rem] text-secondary-foreground transition hover:bg-background"
            href="#contact"
          >
            {m.work_view_all({}, { locale })}
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <WorkCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
