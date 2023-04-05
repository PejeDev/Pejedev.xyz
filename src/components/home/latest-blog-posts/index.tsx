import { type PostOrPage } from '@tryghost/content-api'
import Style from './latest-blog-posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface LatestBlogPostsProps {
  posts: PostOrPage[]
  title?: string
}

export function LatestBlogPosts ({ posts, title = "Latest's Blog Posts" }: LatestBlogPostsProps): JSX.Element {
  const postsList = posts.map((post) => {
    const formattedDate = new Date(post.published_at ?? '').toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    return (
      <div className={Style.post} key={post.id}>
        <Link href={`/blog/${post.slug}`} title={post.title}>
          <Image className={Style.postImage} src={post.feature_image ?? ''} alt={post.title ?? ''} width={600} height={300} />
        </Link>
        <div className={Style.postInfo}>
          <div>
            <Link href={`/blog/${post.slug}`} title={post.title}>
              <h3>{post.title}</h3>
            </Link>
            <div className={Style.postAuthor}>
              <Image src={post.primary_author?.profile_image ?? ''} alt={post.primary_author?.name ?? ''} width={36} height={36} />
              <div>
                <span style={{ color: 'white', fontWeight: 600 }}>{post.primary_author?.name}</span>
                <span>{formattedDate}, {post.reading_time} min read</span>
              </div>
            </div>
            <p>
              {post.excerpt ?? ''}...
            </p>
          </div>
          <Link href={`/blog/${post.slug}`} title={post.title} className={Style.readMore}>
            Read more!
          </Link>
        </div>
      </div>

    )
  })
  return (
    <div className={Style.latestBlogPosts}>
      <h2>{title}</h2>
      <div className={Style.postsList}>
        {postsList}
      </div>
    </div>
  )
}
