import { ChevronDown, Globe2 } from 'lucide-react'
import Link from 'next/link'

import { TexcraLogo } from '@/components/TexcraLogo'
import * as m from '../../../paraglide/messages.js'
import type { Locale } from '../../../paraglide/runtime.js'

interface SiteHeaderProps {
  locale: Locale
  onLocaleChange: (locale: Locale) => void
}

export function SiteHeader({ locale, onLocaleChange }: SiteHeaderProps) {
  return (
    <header className="relative z-20 flex h-[4.5rem] items-center border-b border-border bg-neon-bg px-5 sm:px-8 lg:px-20">
      <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between">
        <Link aria-label="TexCra" href="/">
          <TexcraLogo />
        </Link>

        <nav
          aria-label={m.nav_primary_label({}, { locale })}
          className="hidden items-center gap-10 font-mono text-[0.8125rem] tracking-[0.115em] text-muted-foreground lg:flex"
        >
          <a className="transition-colors hover:text-primary-foreground" href="#work">
            {m.nav_work({}, { locale })}
          </a>
          <a className="transition-colors hover:text-primary-foreground" href="#services">
            {m.nav_services({}, { locale })}
          </a>
          <Link className="transition-colors hover:text-primary-foreground" href="/about">
            {m.nav_about({}, { locale })}
          </Link>
          <Link className="transition-colors hover:text-primary-foreground" href="/posts">
            {m.nav_blog({}, { locale })}
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <label className="relative flex h-9 cursor-pointer items-center gap-2 rounded-lg border border-border px-2.5 font-mono text-[0.8125rem] text-muted-foreground transition-colors hover:text-primary-foreground">
            <Globe2 aria-hidden="true" size={14} strokeWidth={1.6} />
            <span>{locale.toUpperCase()}</span>
            <ChevronDown aria-hidden="true" size={12} strokeWidth={1.6} />
            <select
              aria-label={m.language_label({}, { locale })}
              className="absolute inset-0 cursor-pointer opacity-0"
              onChange={(event) => onLocaleChange(event.target.value as Locale)}
              value={locale}
            >
              <option value="en">EN</option>
              <option value="vi">VI</option>
            </select>
          </label>

          <Link
            className="hidden font-mono text-[0.8125rem] text-muted-foreground transition-colors hover:text-primary-foreground sm:block"
            href="/admin"
          >
            {m.nav_login({}, { locale })}
          </Link>
          <a
            className="hidden rounded-lg bg-primary px-5 py-2.5 font-mono text-[0.8125rem] tracking-[0.04em] text-primary-foreground shadow-neon-nav transition hover:bg-chart-3 min-[28rem]:block"
            href="#contact"
          >
            {m.nav_cta({}, { locale })}
          </a>
        </div>
      </div>
    </header>
  )
}
