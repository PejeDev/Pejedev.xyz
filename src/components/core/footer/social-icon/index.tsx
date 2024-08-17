import Link from 'next/link'
import type { IconType } from 'react-icons'

interface SocialIconProps {
  Icon: IconType
  title: string
  link: string
}

export default function SocialIcon({
  Icon,
  title,
  link,
}: SocialIconProps): JSX.Element {
  return (
    <Link title={title} href={link}>
      <Icon className="mx-1" size={24} />
    </Link>
  )
}
