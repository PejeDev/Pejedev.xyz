import {
  FaAws,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaPython,
  FaReact,
  FaRust,
  FaVuejs,
} from 'react-icons/fa'
import Style from './tech-stack.module.css'

export function TechStach(): JSX.Element {
  return (
    <div className={Style.techStack}>
      <h2>Tech Stack</h2>
      <div className={Style.techStackItems}>
        <FaReact />
        <FaVuejs />
        <FaJsSquare />
        <FaJava />
        <FaPython />
        <FaRust />
        <FaAws />
        <FaHtml5 />
        <FaGithub />
        <FaCss3Alt />
      </div>
    </div>
  )
}
