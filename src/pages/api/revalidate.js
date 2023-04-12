export default async function handler (req, res) {
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate('/')
    await res.revalidate('/blog')
    await res.revalidate('/about-me')

    return res.json({ revalidated: true })
  } catch (error) {
    return res.status(500).json({ message: 'Error at revalidating ISR', error: error.message })
  }
}
