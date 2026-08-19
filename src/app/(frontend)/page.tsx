'use client'

import { baseLocale, getLocale, setLocale, type Locale } from '../../../paraglide/runtime.js'
import { useEffect, useSyncExternalStore } from 'react'

import { SiteNavbar } from '@/sections/site-navbar'
import { SiteFooter } from '@/sections/site-footer'
import { ContactCta } from '@/sections/contact-cta'
import { Hero } from '@/sections/hero'
import { Services } from '@/sections/services'
import { Stats } from '@/sections/stats'
import { Work } from '@/sections/work'

const localeListeners = new Set<() => void>()

function subscribeToLocale(listener: () => void) {
  localeListeners.add(listener)
  return () => localeListeners.delete(listener)
}

function getServerLocale(): Locale {
  return baseLocale
}

export default function HomePage() {
  const locale = useSyncExternalStore<Locale>(subscribeToLocale, getLocale, getServerLocale)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function handleLocaleChange(nextLocale: Locale) {
    setLocale(nextLocale, { reload: false })
    localeListeners.forEach((listener) => listener())
  }

  return (
    <div className="texcra-home min-h-screen w-full overflow-x-hidden bg-primary-muted text-foreground">
      <SiteNavbar locale={locale} onLocaleChange={handleLocaleChange} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Stats locale={locale} />
        <Work locale={locale} />
        <ContactCta locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  )
}
