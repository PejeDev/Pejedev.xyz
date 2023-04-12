import { getPosts, getPost } from '@/lib/ghost'
import Style from './blog-post.module.css'
import Image from 'next/image'
import Ghost from '@/styles/ghost.module.css'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export async function generateMetadata ({ params }: BlogPostProps): Promise<Record<string, unknown>> {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags?.map((tag) => tag.name).join(', ') ?? '',
    authors: [
      {
        name: post.primary_author?.name ?? '',
        url: post.primary_author?.twitter ?? ''
      }
    ],
    openGraph: {
      title: post.og_title ?? post.title,
      description: post.og_description ?? post.excerpt,
      images: [
        {
          url: post.og_image ?? post.feature_image ?? '',
          width: 1200,
          height: 630
        }
      ]
    },
    alternates: {
      canonical: `/blog/${params.slug}`
    }
  }
}

export async function generateStaticParams (): Promise<Record<string, unknown>> {
  const posts = await getPosts(1000)
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
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
