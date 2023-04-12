import '@/styles/globals.css'
import '@/styles/ghost-components.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from 'next'

import { config } from '@fortawesome/fontawesome-svg-core'
import { NavBar } from '@/components/core/nav-bar'
import { Footer } from '@/components/core/footer'

config.autoAddCss = false

export const metadata: Metadata = {
  title: {
    default: 'Home | PejeDev Blog & Portfolio',
    template: '%s | PejeDev Blog & Portfolio'
  },
  description:
    'PejeDev is blog about web development, programming, and other stuff',
  keywords: 'web development, programming, javascript, typescript, react, nextjs, nodejs, css, html, blog, portfolio, pejedev',
  alternates: {
    canonical: '/'
  }

}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="all" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👩‍🎤</text></svg>" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
