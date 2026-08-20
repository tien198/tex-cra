import { AboutCta } from './sections/about-cta'
import { AboutHero } from './sections/about-hero'
import { AboutStats } from './sections/about-stats'
import { CoreIdeas } from './sections/core-ideas'
import { Principles } from './sections/principles'
import { Process } from './sections/process'

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neon-bg pt-[4.5rem] text-primary-foreground">
      <main>
        <AboutHero />
        <CoreIdeas />
        <Principles />
        <Process />
        <AboutStats />
        <AboutCta />
      </main>
    </div>
  )
}
