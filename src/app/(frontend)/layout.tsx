// import { Providers } from '@/providers'
// import { InitTheme } from '@/providers/Theme/InitTheme'
// import { Footer } from '@/Footer/Component'
// import { Header } from '@/Header/Component'

import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Abel, Advent_Pro, Afacad_Flux, Aldrich, Alumni_Sans, Anton } from 'next/font/google'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import { SiteNavbar } from '@/sections/site-navbar'
import { SiteFooter } from '@/sections/site-footer'

const abel = Abel({
  variable: '--font-source-abel',
  subsets: ['latin'],
  weight: '400',
})

const adventPro = Advent_Pro({
  variable: '--font-source-advent',
  subsets: ['latin', 'latin-ext'],
  weight: '600',
})

const afacadFlux = Afacad_Flux({
  variable: '--font-source-afacad',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['300', '400', '600'],
})

const aldrich = Aldrich({
  variable: '--font-source-aldrich',
  subsets: ['latin'],
  weight: '400',
})

const alumniSans = Alumni_Sans({
  variable: '--font-source-alumni',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: '300',
})

const anton = Anton({
  variable: '--font-source-anton',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: '400',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        abel.variable,
        adventPro.variable,
        afacadFlux.variable,
        aldrich.variable,
        alumniSans.variable,
        anton.variable,
      )}
      lang="en"

      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        {/* <Providers> */}
        <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        />

        {/* <Header /> */}
        <SiteNavbar />

        {children}
        <SiteFooter />
        {/* <Footer /> */}
        {/* </Providers> */}
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
