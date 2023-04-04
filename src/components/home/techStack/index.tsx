import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import Style from './techStack.module.css'
import { faReact, faVuejs, faJsSquare, faJava, faPython, faRust, faAws, faHtml5, faGithub, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TechStach (): JSX.Element {
  return (
    <div className={Style.techStack}>
      <h2>Tech Stack</h2>
      <div className={Style.techStackItems}>
        <FontAwesomeIcon icon={faReact as IconProp} />
        <FontAwesomeIcon icon={faVuejs as IconProp} />
        <FontAwesomeIcon icon={faJsSquare as IconProp} />
        <FontAwesomeIcon icon={faJava as IconProp} />
        <FontAwesomeIcon icon={faPython as IconProp} />
        <FontAwesomeIcon icon={faRust as IconProp} />
        <FontAwesomeIcon icon={faAws as IconProp} />
        <FontAwesomeIcon icon={faHtml5 as IconProp} />
        <FontAwesomeIcon icon={faGithub as IconProp} />
        <FontAwesomeIcon icon={faCss3Alt as IconProp} />
      </div>

    </div>
  )
}
