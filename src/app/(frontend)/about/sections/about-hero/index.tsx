'use client'

import { useRef } from 'react'

import { useGsapSectionReveal } from '@/texcra-lib/GSAP/useGsapSectionReveal'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages.js'

export function AboutHero() {
  const locale = useLocale()
  const sectionRef = useRef<HTMLElement>(null)

  useGsapSectionReveal(sectionRef, { duration: 1, stagger: 0.12, y: 34 })

  return (
    <section
      className="relative flex min-h-[50.5625rem] items-center justify-center overflow-hidden bg-surface bg-cover bg-center px-6 py-20 text-center sm:px-10 lg:px-[7.5rem]"
      ref={sectionRef}
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 mx-auto flex w-full max-w-[80rem] flex-col items-center gap-8">
        <p
          className="font-alumni-sans text-primary text-2xl font-light tracking-[0.17em] uppercase"
          data-gsap-reveal
        >
          {m.about_hero_eyebrow({}, { locale })}
        </p>
        <h1
          className="font-aldrich text-[clamp(3rem,6.67vw,6rem)] leading-[1.1] tracking-[0.02em] text-accent drop-shadow-neon-heading"
          data-gsap-reveal
        >
          {m.about_hero_title({}, { locale })}
        </h1>
        <p
          className="max-w-[68rem] font-geist-mono text-lg leading-8 text-ring sm:text-xl"
          data-gsap-reveal
        >
          {m.about_hero_description({}, { locale })}
        </p>
      </div>
    </section>
  )
}
