import styles from './page.module.css'
import { PersonalData } from '@/components/home/personal-data'
import { CatRender } from '@/components/home/cat-render'
import { TechStach } from '@/components/home/tech-stack'
import { OpenSourceProjects } from '@/components/home/open-source-projects'
import { type GithubProject } from '@/types/github'

export default async function Home (): Promise<any> {
  const projects: GithubProject[] = await fetch('https://api.github.com/users/pejedev/repos?sort=stars&per_page=3')
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error(error)
      return []
    })

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
