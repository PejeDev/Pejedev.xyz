import styles from './page.module.css'
import { PersonalData } from '@/components/home/personal-data'
import { CatRender } from '@/components/home/cat-render'
import { TechStach } from '@/components/home/tech-stack'
import { OpenSourceProjects } from '@/components/home/open-source-projects'
import { type GithubRepo } from '@/types/github'
import { LatestBlogPosts } from '@/components/home/latest-blog-posts'
import { getTopNRepos } from '@/lib/github'
import { getPosts } from '@/lib/ghost'

export default async function Home (): Promise<any> {
  const projects: GithubRepo[] = await getTopNRepos('pejedev', 3)
  const posts = await getPosts()

  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <PersonalData />
        <CatRender />
      </div>
      <TechStach />
      <OpenSourceProjects projects={projects} />
      <LatestBlogPosts posts={posts} />
    </main>
  )
}
