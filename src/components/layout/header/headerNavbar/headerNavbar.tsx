import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { Button } from '@/components'

import s from './headerNavbar.module.scss'

export const HeaderNavbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li>
          <Button as={Link} to={PATH.LANGUAGE} variant={'link'}>
            EN
          </Button>
        </li>
        <li>
          <Button as={Link} to={PATH.RULES} variant={'link'}>
            Rules
          </Button>
        </li>
        <li>
          <Button as={Link} to={PATH.FAQ} variant={'link'}>
            FAQ
          </Button>
        </li>
      </ul>
    </nav>
  )
}
