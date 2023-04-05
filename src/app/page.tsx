import styles from './page.module.css'
import { PersonalData } from '@/components/home/personal-data'
import { CatRender } from '@/components/home/cat-render'
import { TechStach } from '@/components/home/tech-stack'

export default function Home (): JSX.Element {
  return <main className={styles.main}>
    <div className={styles.intro}>
      <PersonalData />
      <CatRender />
    </div>
    <TechStach />
  </main>
}
