import { memo } from 'react'
import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import logo from '@/assets/img/Logo.png'
import { HeaderNavbar } from '@/components/layout/header/header-nav-bar/header-navbar'
import clsx from 'clsx'

import s from './header.module.scss'

import { LogOutOrBurgerMenu } from './logOutOrBurgerMenu/logOutOrBurgerMenu'

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
      <div className={s.container}>
        <div className={classNames.logoWrapper}>
          <Link to={'/'}>
            <img alt={'logo'} className={s.logotipe} src={logo} />
          </Link>
        </div>
        {!isLoggedIn && (
          <div className={s.navbarLoginBlock}>
            <HeaderNavbar />
            <Link to={PATH.LOGIN}>log in</Link>
          </div>
        )}
        {isLoggedIn && <LogOutOrBurgerMenu />}
      </div>
    </header>
  )
})
