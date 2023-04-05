import GhostContentAPI, { type PostsOrPages } from '@tryghost/content-api'

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://ghost.pejedev.xyz',
  key: 'ce061767c5b53105435ac6f474',
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
