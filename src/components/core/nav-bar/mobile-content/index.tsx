import { type MenuItem } from '@/types/navigation'
import Style from './mobile-content.module.css'
import Link from 'next/link'

interface ComponentProps {
  menu: MenuItem[]
}

export function MobileContent ({ menu }: ComponentProps): JSX.Element {
  return (
    <div className={Style.mobileContent}>
      {menu.map((item) =>
        <Link title={item.name} href={item.path} key={item.name} className={item.selected ? `${Style.menuItem} ${Style.selected}` : Style.menuItem}>
          {item.name}
        </Link>)}
    </div>
  )
}
