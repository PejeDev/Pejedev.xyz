import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import type { Metadata } from 'next'

import { Footer } from '@/components/core/footer'
import { NavBar } from '@/components/core/nav-bar'

export const metadata: Metadata = {
  title: {
    default: 'Home | PejeDev Blog & Portfolio',
    template: '%s | PejeDev Blog & Portfolio',
  },
  description:
    'PejeDev is blog about web development, programming, and other stuff',
  keywords:
    'web development, programming, javascript, typescript, react, nextjs, nodejs, css, html, blog, portfolio, pejedev',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍🎤</text></svg>"
        />
      </head>
      <body>
        <NextUIProvider>
          <NavBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  )
}
