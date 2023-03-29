import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Style from './footer.module.css'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'

export function Footer (): JSX.Element {
  const year = new Date().getFullYear()

  return (
    <footer className={Style.footer}>
      <hr/>
      <div className={Style.footerContent}>
        <div className={Style.footerSocialLinks}>
          <a href="https://github.com/PejeDev" >
            <FontAwesomeIcon icon={faGithub as IconProp}/>
          </a>
          <a href="https://twitter.com/PejeDev" >
            <FontAwesomeIcon icon={faTwitter as IconProp} />
          </a>
          <a href="https://www.linkedin.com/in/pejedev/" >
            <FontAwesomeIcon icon={faLinkedin as IconProp} />
          </a>
          <a href="https://t.me/PejeDev" >
            <FontAwesomeIcon icon={faTelegram as IconProp} />
          </a>
          <a href='mailto:hi@pejedev.xyz'>
            <FontAwesomeIcon icon={faEnvelope as IconProp} />
          </a>
        </div>
        <div className={Style.footerCopyright}>
          © {year} | Made with ❤️ by
          <a href="https://twitter.com/PejeDev"> @PejeDev</a>.
        </div>
      </div>
    </footer>
  )
}
