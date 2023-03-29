import { type MenuItem } from '@/types/navigation'
import Style from './mobileContent.module.css'

interface ComponentProps {
  menu: MenuItem[]
}

export function MobileContent ({ menu }: ComponentProps): JSX.Element {
  const menuItems = menu.map((item) =>
    <a href={item.path} key={item.name} className={item.selected ? `${Style.menuItem} ${Style.selected}` : Style.menuItem}>
      {item.name}
    </a>
  )
  return (
    <div className={Style.mobileContent}>
      {menuItems}
    </div>
  )
}
