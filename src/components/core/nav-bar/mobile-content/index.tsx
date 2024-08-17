import type { MenuItem } from '@/types/navigation'
import Link from 'next/link'
import Style from './mobile-content.module.css'

interface ComponentProps {
  menu: MenuItem[]
  toggle: () => void
}

export function MobileContent({ menu, toggle }: ComponentProps): JSX.Element {
  return (
    <div className={Style.mobileContent}>
      {menu.map((item) => (
        <Link
          onClick={toggle}
          title={item.name}
          href={item.path}
          key={item.name}
          className={
            item.selected
              ? `${Style.menuItem} ${Style.selected}`
              : Style.menuItem
          }
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
