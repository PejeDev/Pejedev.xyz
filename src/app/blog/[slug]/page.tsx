import { getPost } from '@/lib/ghost'
import Style from './blog-post.module.css'
import Image from 'next/image'
import Ghost from '@/styles/ghost.module.css'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export default async function BlogPost ({ params }: BlogPostProps): Promise<JSX.Element> {
  const post = await getPost(params.slug)
  const formattedDate = new Date(post.published_at ?? '').toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  return (
    <>
      <Image className={Style['post-banner']} src={post.feature_image ?? ''} alt={post.title ?? ''} width={1920} height={1080} />
      <div className={Style['post-header']}>
        <h1>{post.title}</h1>
        <div className={Style['post-author']}>
              <Image src={post.primary_author?.profile_image ?? ''} alt={post.primary_author?.name ?? ''} width={36} height={36} />
              <div>
                <span style={{ fontWeight: 600 }}>{post.primary_author?.name}</span>
                <span>{formattedDate}, {post.reading_time} min read</span>
              </div>
        </div>
        <hr />
      </div>
      <div className={Ghost['gh-content']} dangerouslySetInnerHTML={{ __html: post.html ?? '' }} />
    </>
  )
}
