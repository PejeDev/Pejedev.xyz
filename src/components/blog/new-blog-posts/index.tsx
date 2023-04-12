'use client'
import { LatestBlogPosts } from '@/components/home/latest-blog-posts'
import { getPosts } from '@/lib/ghost'
import { type PostOrPage } from '@tryghost/content-api'
import { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

interface NewBlogPostsProps {
  posts: PostOrPage[]
  title?: string
  pageSize?: number
  isInfiniteScroll?: boolean
}

export function NewBlogPosts ({ posts, title = "New's Blog Posts", pageSize = 2, isInfiniteScroll = false }: NewBlogPostsProps): JSX.Element {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const [hasNextPage, setHasNextPage] = useState(isInfiniteScroll)
  const [postList, setPosts] = useState<PostOrPage[]>(posts)
  const [page, setPage] = useState(2)

  const loadMore = (): void => {
    setLoading(true)
    getPosts(pageSize, page)
      .then((posts) => {
        setPosts(postList.concat(posts))
        setPage(page + 1)
        setHasNextPage(posts.length === pageSize)
        setLoading(false)
      })
      .catch((err) => {
        setHasNextPage(false)
        setError(err)
      })
  }

  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: error ?? false
  })

  return (
    <>
      <LatestBlogPosts posts={postList} title={title} />
      {(loading || hasNextPage) && (
        <div style={{ margin: 'auto' }} ref={sentryRef}>
          loading...
        </div>
      )}
    </>
  )
}
