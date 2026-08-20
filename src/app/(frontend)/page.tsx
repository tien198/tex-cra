import { ContactCta } from '@/sections/contact-cta'
import { Hero } from '@/sections/hero'
import { Services } from '@/sections/services'
import { Stats } from '@/sections/stats'
import { Work } from '@/sections/work'

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-primary-muted text-foreground">
      <main>
        <Hero />
        <Services />
        <Stats />
        <Work />
        <ContactCta />
      </main>
    </div>
  )
}
