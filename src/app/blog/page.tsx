import { NewBlogPosts } from '@/components/blog/new-blog-posts'
import Style from './blog.module.css'
import { getPosts } from '@/lib/ghost'

export const metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/blog'
  }
}

export default async function BlogPage (): Promise<JSX.Element> {
  const posts = await getPosts(8)
  const isInfiniteScroll = posts.length === 8

  return (
    <main className={Style.main}>
      <NewBlogPosts posts={posts} pageSize={posts.length} isInfiniteScroll={isInfiniteScroll}/>
    </main>
  )
}
