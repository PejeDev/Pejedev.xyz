import GhostContentAPI, { type PostsOrPages, type PostOrPage } from '@tryghost/content-api'

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

export async function getPost (slug: string): Promise<PostOrPage | never> {
  try {
    const post = await api.posts.read({
      slug
    }, {
      include: ['tags', 'authors']
    })
    return post
  } catch (error) {
    console.error(error)
    throw error
  }
}

export async function getPage (slug: string): Promise<PostOrPage | never> {
  try {
    const page = await api.pages.read({
      slug
    })
    return page
  } catch (error) {
    console.error(error)
    throw error
  }
}
