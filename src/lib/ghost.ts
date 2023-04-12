import GhostContentAPI, { type PostsOrPages } from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_API_URL != null ? process.env.GHOST_API_URL : '',
  key: process.env.GHOST_CONTENT_API_KEY != null ? process.env.GHOST_CONTENT_API_KEY : '',
  version: 'v5.0'
})

export async function getPosts (n: number = 2, page: number = 1): Promise<PostsOrPages | never[]> {
  try {
    const posts = await api.posts.browse({
      limit: n,
      page,
      include: ['tags', 'authors']
    })
    return posts
  } catch (error) {
    console.error(error)
    return []
  }
}
