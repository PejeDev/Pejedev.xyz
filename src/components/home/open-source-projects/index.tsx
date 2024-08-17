import type { GithubRepo } from '@/types/github'
import { FaCode, FaCodeBranch, FaEye, FaGithub, FaStar } from 'react-icons/fa'
import { FaCodeFork } from 'react-icons/fa6'
import Styles from './open-source-projects.module.css'

interface ComponentProps {
  projects: GithubRepo[]
}

export function OpenSourceProjects({ projects }: ComponentProps): JSX.Element {
  const projectItems = GenerateProjectList(projects)
  return (
    <div className={Styles.projectsContainer}>
      <h2>Open Source Projects</h2>
      <div className={Styles.projectItems}>
        {projectItems}
        <a
          className={Styles.projectCard}
          href="https://github.com/PejeDev"
          target="_blank"
          title="Checkout more projects!"
          rel="noreferrer"
        >
          <div className={Styles.moreProjects}>
            <FaGithub />
            <span>Checkout more projects!</span>
          </div>
        </a>
      </div>
    </div>
  )
}

function GenerateProjectList(projects: GithubRepo[]): JSX.Element[] {
  const projectsList = projects.map((project) => (
    <a
      key={project.id}
      href={project.html_url}
      target="_blank"
      className={Styles.projectCard}
      title={project.name}
      rel="noreferrer"
    >
      <div>
        <h3>
          <FaCodeBranch /> {project.name}
        </h3>
        <p>{project.description}</p>
      </div>
      <div className={Styles.projectStats}>
        <span>
          <FaCode /> {project.language}
        </span>
        <span>
          <FaStar /> {project.stargazers_count}
        </span>
        <span>
          <FaEye /> {project.watchers_count}
        </span>
        <span>
          <FaCodeFork /> {project.forks_count}
        </span>
      </div>
    </a>
  ))
  return projectsList
}
