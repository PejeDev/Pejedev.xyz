import { type GithubRepo } from '@/types/github'

const GITHUB_API_URL = 'https://api.github.com'

export async function getTopNRepos (username: string, n: number): Promise<GithubRepo[]> {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos?sort=stars&per_page=${n}`)
    const repos = await response.json()
    return repos
  } catch (error) {
    console.error(error)
    return []
  }
}
