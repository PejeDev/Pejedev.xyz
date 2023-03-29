import '@/styles/globals.css'
import { Footer } from '@/components/core/Footer'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import { NavBar } from '@/components/core/NavBar'
config.autoAddCss = false

export const metadata = {
  title: 'PejeDev Blog & Portfolio',
  description:
    'PejeDev is blog about web development, programming, and other stuff'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
