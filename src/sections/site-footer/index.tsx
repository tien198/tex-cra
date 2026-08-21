'use client'

import Link from 'next/link'

import { TexcraLogo } from '@/components/TexcraLogo'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
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
        <MessageUI locale={locale} message={m.footer_copy} />
      </p>
      <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-geist-mono text-xs tracking-[0.04em] text-muted-foreground">
        <Link className="transition-colors hover:text-primary-foreground" href="/privacy">
          <MessageUI locale={locale} message={m.footer_privacy} />
        </Link>
        <Link className="transition-colors hover:text-primary-foreground" href="/terms">
          <MessageUI locale={locale} message={m.footer_terms} />
        </Link>
        <a className="transition-colors hover:text-primary-foreground" href="https://twitter.com">
          <MessageUI locale={locale} message={m.footer_twitter} />
        </a>
        <a className="transition-colors hover:text-primary-foreground" href="https://dribbble.com">
          <MessageUI locale={locale} message={m.footer_dribbble} />
        </a>
      </nav>
    </footer>
  )
}
