'use client'

import Link from 'next/link'

import { TexcraLogo } from '@/components/TexcraLogo'
import { useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages.js'

export function SiteFooter() {
  const locale = useLocale()

  return (
    <footer className="flex min-h-[20.1875rem] flex-col items-center justify-center gap-6 border-t border-border bg-surface px-5 py-10 text-center">
      <Link aria-label="TexCra" href="/">
        <TexcraLogo />
      </Link>
      <p className="font-geist-mono text-xs tracking-[0.04em] text-primary">
        {m.footer_copy({}, { locale })}
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-geist-mono text-xs tracking-[0.04em] text-muted-foreground">
        <Link className="transition-colors hover:text-primary-foreground" href="/privacy">
          {m.footer_privacy({}, { locale })}
        </Link>
        <Link className="transition-colors hover:text-primary-foreground" href="/terms">
          {m.footer_terms({}, { locale })}
        </Link>
        <a className="transition-colors hover:text-primary-foreground" href="https://twitter.com">
          {m.footer_twitter({}, { locale })}
        </a>
        <a className="transition-colors hover:text-primary-foreground" href="https://dribbble.com">
          {m.footer_dribbble({}, { locale })}
        </a>
      </nav>
    </footer>
  )
}
