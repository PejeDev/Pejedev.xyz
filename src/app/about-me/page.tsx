import { getPage } from '@/lib/ghost'
import Image from 'next/image'
import Style from './about-me.module.css'
import '@/styles/ghost.css'

const metaTagRegex = /<meta\s+[^>]*property=["']pj:post-logo["'][^>]*>/i
const contentRegex = /content=["']([^"']+)["']/i

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
      <div className={Style['page-content']} dangerouslySetInnerHTML={{ __html: page.html ?? '' }} />
    </>
  )
}
