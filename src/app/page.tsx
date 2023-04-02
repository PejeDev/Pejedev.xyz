import styles from './page.module.css'
import { PersonalData } from '@/components/home/PersonalData'
import { CatRender } from '@/components/home/catRender'

export default function Home (): JSX.Element {
  return <main className={styles.main}>
    <div className={styles.intro}>
      <PersonalData />
      <CatRender />
    </div>
  </main>
}
