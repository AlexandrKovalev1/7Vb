import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'

import s from './header-navbar.module.scss'

export const HeaderNavbar = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <Link to={PATH.LANGUAGE}>EN</Link>
        </li>
        <li>
          <Link to={PATH.RULES}>Rules</Link>
        </li>
        <li>
          <Link to={PATH.FAQ}>FAQ</Link>
        </li>
      </ul>
    </nav>
  )
}
