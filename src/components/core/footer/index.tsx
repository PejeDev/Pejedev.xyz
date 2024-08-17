import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import Link from 'next/link'
import Style from './footer.module.css'
import SocialIcon from './social-icon'

export function Footer(): JSX.Element {
  const year = new Date().getFullYear()

  const socialIcons = socialData.map((social) => (
    <SocialIcon key={social.title} {...social} />
  ))

  return (
    <footer className="relative bottom-0 flex flex-col justify-center items-center max-w-[900px] w-full mx-auto">
      <hr />
      <div className="flex flex-row justify-between mx-2 w-full">
        <div className="flex flex-row ml-4">{socialIcons}</div>
        <div className={Style.footerCopyright}>
          © {year} | Made with ❤️ by{' '}
          <Link
            title="@PejeDev Twitter profile"
            href="https://twitter.com/PejeDev"
          >
            @PejeDev
          </Link>
          .
        </div>
      </div>
    </footer>
  )
}

const socialData = [
  {
    title: '@PejeDev Github profile',
    link: 'https://github.com/PejeDev',
    Icon: FaGithub,
  },
  {
    title: '@PejeDev Twitter profile',
    link: 'https://twitter.com/PejeDev',
    Icon: FaTwitter,
  },
  {
    title: '@PejeDev LinkedIn profile',
    link: 'https://www.linkedin.com/in/pejedev/',
    Icon: FaLinkedin,
  },
  {
    title: '@PejeDev Telegram Account',
    link: 'https://t.me/PejeDev',
    Icon: FaTelegram,
  },
  {
    title: '@Pejdev Email Account',
    link: 'mailto:hi@pejedev.xyz',
    Icon: FaEnvelope,
  },
]
