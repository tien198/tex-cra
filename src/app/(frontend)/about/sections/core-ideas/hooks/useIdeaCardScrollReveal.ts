'use client'

import { useEffect, type RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useIdeaCardScrollReveal(scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const section = scope.current

    if (!section) return

    const stage = section.querySelector<HTMLElement>('[data-idea-card-stage]')
    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-idea-card]'))

    if (!stage || !cards.length) return

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
          pin: stage,
          pinSpacing: true,
          scrub: 0.65,
          start: 'top 18%',
          trigger: stage,
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
      cards.forEach((card) => {
        const reveal = gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            scale: 0.98,
            y: 72,
          },
          {
            autoAlpha: 1,
            duration: 0.72,
            ease: 'power3.out',
            paused: true,
            scale: 1,
            y: 0,
          },
        )

        ScrollTrigger.create({
          animation: reveal,
          end: 'bottom 14%',
          start: 'top 86%',
          toggleActions: 'play reverse play reverse',
          trigger: card,
        })
      })

      ScrollTrigger.refresh()
    })

    return () => media.revert()
  }, [scope])
}
