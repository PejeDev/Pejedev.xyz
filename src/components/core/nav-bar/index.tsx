'use client'
import { type MenuItem } from '@/types/navigation'
import { NavBarMenu } from './menu'
import Style from './nav-bar.module.css'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { MobileContent } from './mobile-content'
import Link from 'next/link'

export function NavBar (): JSX.Element {
  const [isToggle, setIsToggle] = useState(false)
  const path = usePathname()

  const toggleMenu = (): void => {
    setIsToggle(!isToggle)
  }

  const menu: MenuItem[] = [
    {
      name: 'Home',
      path: '/',
      selected: path === '/'
    },
    {
      name: 'Blog',
      path: '/blog',
      selected: path === '/blog'
    },
    {
      name: 'Projects',
      path: '/projects',
      selected: path === '/projects'
    },
    {
      name: 'About Me',
      path: '/about-me',
      selected: path === '/about-me'
    }
  ]

  return (
    <nav className={Style.navBar}>
      <div className={Style.navBarContent}>
        <Link title='Pejedev portfolio & blog homepage' href="/" className={Style.navBarLogo}>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              d="M14.003 17.23c-.178.247-1.456.922-1.462-.396v-.464c.43-.208.731-.634.731-1.015 0-.526-.571-.762-1.272-.762-.701 0-1.271.236-1.271.762 0 .377.294.796.717 1.007v.472c-.008 1.227-1.18.829-1.392.453-.404-.716-1.249-.153-.94.423.29.541 1.001.918 1.73.918.446 0 .848-.146 1.149-.416.302.27.703.416 1.15.416.727 0 1.439-.377 1.729-.918.316-.584-.417-1.105-.869-.48zm.997-5.73c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.459 0 .833-.374.833-.833 0-.46-.374-.834-.833-.834zm0 2.667c-1.011 0-1.833-.823-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.833.822 1.833 1.834 0 1.01-.822 1.833-1.833 1.833zm-6-2.667c-.459 0-.833.374-.833.834 0 .459.374.833.833.833.46 0 .834-.374.834-.833 0-.46-.374-.834-.834-.834zm0 2.667c-1.011 0-1.833-.823-1.833-1.833 0-1.012.822-1.834 1.833-1.834 1.011 0 1.834.822 1.834 1.834 0 1.01-.823 1.833-1.834 1.833zm1.545-5.66c.772-.195 2.101-.198 2.909 0 .977-1.478 1.643-2.298 3.03-3.507 2.7 3.301 3.762 9.095 4.196 13.732-2.015 2.591-5.152 4.268-8.68 4.268-3.56 0-6.721-1.708-8.733-4.339.347-4.718 1.237-10.618 3.733-13.661 1.469 1.16 2.426 2.15 3.545 3.507zm1.455-8.507c-6.623 0-12 5.376-12 12 0 6.623 5.377 12 12 12s12-5.377 12-12c0-6.624-5.377-12-12-12z"
            />
          </svg>
          <span>PejeDev</span>
        </Link>
        <NavBarMenu menu={menu} toggle={toggleMenu} isToggle={isToggle}/>
      </div>
      { isToggle ? <MobileContent menu={menu} toggle={toggleMenu} /> : null }
    </nav>
  )
}
