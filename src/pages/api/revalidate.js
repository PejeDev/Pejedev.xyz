function getGhostLatestPosts () {
  const url = `${process.env.GHOST_API_URL}/ghost/api/content/posts/?key=${process.env.GHOST_CONTENT_API_KEY}&fields=title,slug,updated_at&limit=5&order=updated_at%20DESC`

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.posts)
}

export default async function handler (req, res) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/blog')
    const posts = await getGhostLatestPosts()

    for (const post of posts) {
      await res.revalidate(`/blog/${post.slug}`)
    }

    return res.json({ revalidated: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Error at revalidating ISR', error: error.message })
  }
}
