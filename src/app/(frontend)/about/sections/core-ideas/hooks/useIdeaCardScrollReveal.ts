'use client'

import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useIdeaCardScrollReveal(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = scope.current

    if (!section) return

    const timelineStage = section.querySelector<HTMLElement>('[data-idea-card-timeline-stage]')
    const stage = section.querySelector<HTMLElement>('[data-idea-card-stage]')
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-idea-card]'))

    if (!timelineStage || !stage || !cards.length) return

    const media = gsap.matchMedia(section)

    media.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const revealTimeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'none',
        },
        scrollTrigger: {
          anticipatePin: 1,
          end: () => `+=${Math.max(window.innerHeight * 2, cards.length * 360)}`,
          invalidateOnRefresh: true,
          pin: timelineStage,
          pinSpacing: true,
          scrub: 0.65,
          start: 'top top',
          trigger: timelineStage,
        },
      })

      revealTimeline.set(cards, {
        autoAlpha: 0,
        scale: 0.97,
        y: 72,
      })

      cards.forEach((card, index) => {
        revealTimeline.to(
          card,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
          },
          index === 0 ? 0 : '+=0.3',
        )
      })

      ScrollTrigger.refresh()
    })

    media.add('(max-width: 767px) and (prefers-reduced-motion: no-preference)', () => {
      const revealTimeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'none',
        },
        scrollTrigger: {
          anticipatePin: 1,
          end: () => `+=${Math.max(window.innerHeight * cards.length, cards.length * 480)}`,
          invalidateOnRefresh: true,
          pin: timelineStage,
          pinSpacing: true,
          scrub: 0.65,
          start: 'top top',
          trigger: timelineStage,
        },
      })

      revealTimeline.set(stage, { overflow: 'hidden' }).set(cards, {
        autoAlpha: 0,
        gridArea: '1 / 1',
        xPercent: 110,
      })

      revealTimeline.to(cards[0], {
        autoAlpha: 1,
        xPercent: 0,
      })

      cards.forEach((card, index) => {
        revealTimeline.to(card, { duration: 0.35 })

        const nextCard = cards[index + 1]

        if (!nextCard) return

        revealTimeline
          .to(card, {
            autoAlpha: 0,
            xPercent: -110,
          })
          .to(
            nextCard,
            {
              autoAlpha: 1,
              xPercent: 0,
            },
            '<',
          )
      })

      ScrollTrigger.refresh()
    })

    return () => media.revert()
  }, [scope])
}
