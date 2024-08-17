import { CatRender } from '@/components/home/cat-render'
import { OpenSourceProjects } from '@/components/home/open-source-projects'
import { PersonalData } from '@/components/home/personal-data'
import { TechStach } from '@/components/home/tech-stack'
import { getTopNRepos } from '@/lib/github'
import type { GithubRepo } from '@/types/github'
import styles from './page.module.css'

export default async function Home(): Promise<JSX.Element> {
  const projects: GithubRepo[] = await getTopNRepos('pejedev', 3)

  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <PersonalData />
        <CatRender />
      </div>
      <TechStach />
      <OpenSourceProjects projects={projects} />
    </main>
  )
}
