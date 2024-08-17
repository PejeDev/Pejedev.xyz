export interface GithubRepo {
  id: number
  name: string
  description: string
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  html_url: string
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  stargazers_count: number
  language: string
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  forks_count: number
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  open_issues_count: number
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  created_at: string
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  updated_at: string
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  pushed_at: string
  // biome-ignore lint/style/useNamingConvention: Github object name convention
  watchers_count: number
}
