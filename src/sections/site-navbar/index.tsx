'use client'

import { useEffect } from 'react'

import { Globe2 } from 'lucide-react'
import Link from 'next/link'

import { TexcraLogo } from '@/components/TexcraLogo'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MessageUI } from '@/texcra-lib/paraglide/message-ui'
import { setLocale, useLocale } from '@/texcra-lib/paraglide/useLocale'
import * as m from '@/../paraglide/messages'
import type { Locale } from '@/../paraglide/runtime'

export function SiteNavbar() {
  const locale = useLocale()
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex h-18 items-center border-b border-border bg-neon-bg px-5 sm:px-8 lg:px-20">
      <div className="mx-auto flex w-full max-w-[80rem] items-center justify-between">
        <Link aria-label="TexCra" href="/">
          <TexcraLogo />
        </Link>

        <nav
          aria-label={m.nav_primary_label({}, { locale })}
          className="hidden items-center gap-10 font-geist-mono text-[0.8125rem] tracking-[0.115em] text-muted-foreground lg:flex"
        >
          <a className="transition-colors hover:text-primary-foreground" href="#work">
            <MessageUI locale={locale} message={m.nav_work} />
          </a>
          <a className="transition-colors hover:text-primary-foreground" href="#services">
            <MessageUI locale={locale} message={m.nav_services} />
          </a>
          <Link className="transition-colors hover:text-primary-foreground" href="/about">
            <MessageUI locale={locale} message={m.nav_about} />
          </Link>
          <Link className="transition-colors hover:text-primary-foreground" href="/posts">
            <MessageUI locale={locale} message={m.nav_blog} />
          </Link>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <Select onValueChange={(nextLocale) => setLocale(nextLocale as Locale)} value={locale}>
            <SelectTrigger
              aria-label={m.language_label({}, { locale })}
              className="h-9 w-auto cursor-pointer gap-2 rounded-lg border-border bg-transparent px-2.5 py-0 font-geist-mono text-[0.8125rem] text-muted-foreground shadow-none transition-colors hover:text-primary-foreground focus-visible:ring-primary/30 [&>svg:last-child]:size-3 [&>svg:last-child]:opacity-100"
            >
              <Globe2 aria-hidden="true" size={14} strokeWidth={1.6} />
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              align="start"
              className="min-w-[var(--radix-select-trigger-width)] border-border bg-neon-bg font-geist-mono text-[0.8125rem] text-muted-foreground"
              position="popper"
              side="bottom"
            >
              <SelectItem className="focus:bg-primary/20 focus:text-primary-foreground" value="en">
                EN
              </SelectItem>
              <SelectItem className="focus:bg-primary/20 focus:text-primary-foreground" value="vi">
                VI
              </SelectItem>
            </SelectContent>
          </Select>

          <Link
            className="hidden font-geist-mono text-[0.8125rem] text-muted-foreground transition-colors hover:text-primary-foreground sm:block"
            href="/admin"
          >
            <MessageUI locale={locale} message={m.nav_login} />
          </Link>
          <a
            className="hidden rounded-lg bg-primary px-5 py-2.5 font-geist-mono text-[0.8125rem] tracking-[0.04em] text-primary-foreground shadow-neon-nav transition hover:bg-chart-3 min-[28rem]:block"
            href="#contact"
          >
            <MessageUI locale={locale} message={m.nav_cta} />
          </a>
        </div>
      </div>
    </header>
  )
}
