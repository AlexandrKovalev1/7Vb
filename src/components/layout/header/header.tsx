import { memo } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/img/Logo.png'
import { LinearProgress } from '@/components'
import clsx from 'clsx'

import s from './header.module.scss'

import { NavBarOrBurgerMenu } from './logOutOrBurgerMenu/navBarOrBurgerMenu'

export type HeaderProps = {
  isLoggedIn: boolean
}

export const Header = memo(({ isLoggedIn }: HeaderProps) => {
  const classNames = {
    header: clsx(s.header, isLoggedIn && s.logged),
    logoWrapper: clsx(s.logoWrapper, isLoggedIn && s.logged),
  }

  return (
    <header className={classNames.header}>
      {isLoggedIn && <LinearProgress />}
      <div className={s.container}>
        <div className={classNames.logoWrapper}>
          <Link to={'/'}>
            <img alt={'logo'} className={s.logotipe} src={logo} />
          </Link>
        </div>
        <NavBarOrBurgerMenu />
      </div>
      {!isLoggedIn && <LinearProgress />}
    </header>
  )
})
