import { type GithubProject } from '@/types/github'
import Styles from './open-source-projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faCode, faStar, faCodeFork, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'

interface ComponentProps {
  projects: GithubProject[]
}

export function OpenSourceProjects ({ projects }: ComponentProps): JSX.Element {
  const projectItems = projects.map((project) => (
    <a
      key={project.id}
      href={project.html_url}
      target="_blank"
      className={Styles.projectCard}
    >
      <div>
        <h3><FontAwesomeIcon icon={faCodeBranch} /> {project.name}</h3>
        <p>{project.description}</p>
      </div>
      <div className={Styles.projectStats}>
        <span><FontAwesomeIcon icon={faCode} /> {project.language}</span>
        <span><FontAwesomeIcon icon={faStar} /> {project.stargazers_count}</span>
        <span><FontAwesomeIcon icon={faEye} /> {project.watchers_count}</span>
        <span><FontAwesomeIcon icon={faCodeFork} /> {project.forks_count}</span>
      </div>
    </a>
  ))
  return (
    <div className={Styles.projectsContainer}>
      <h2>Open Source Projects</h2>
      <div className={Styles.projectItems}>
        {projectItems}
        <a
          className={Styles.projectCard}
          href="https://github.com/PejeDev"
          target="_blank"
        >
          <div className={Styles.moreProjects}>
            <FontAwesomeIcon icon={faGithub as IconProp} />
            <span>Checkout more projects!</span>
          </div>
        </a>
      </div>
    </div>
  )
}
