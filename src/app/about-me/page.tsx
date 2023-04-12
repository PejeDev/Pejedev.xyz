import { getPage } from '@/lib/ghost'
import Image from 'next/image'
import Style from './about-me.module.css'
import Ghost from '@/styles/ghost.module.css'

const metaTagRegex = /<meta\s+[^>]*property=["']pj:post-logo["'][^>]*>/i
const contentRegex = /content=["']([^"']+)["']/i

export const metadata = {
  title: 'About Me',
  description: 'About me page with information about me and my work experience.',
  keywords: 'about me, about me page, about me website, about me website page',
  alternates: {
    canonical: '/about-me'
  }
}

export default async function AboutMePage (): Promise<JSX.Element> {
  const page = await getPage('about-me')
  const metaTag = page?.html?.match(metaTagRegex) ?? ''
  const logoTag = metaTag[0].match(contentRegex) ?? ''
  const logoUrl = logoTag[1]

  return (
    <>
      <Image className={Style['page-banner']} src={page.feature_image ?? ''} alt={page.title ?? ''} width={1920} height={1080} />
      <div className={Style['page-header']}>
        <Image src={logoUrl} alt={page.title ?? ''} width={400} height={400} />
        <h1>{page.title}</h1>
      </div>
      <div className={Ghost['gh-content']} dangerouslySetInnerHTML={{ __html: page.html ?? '' }} />
    </>
  )
}
