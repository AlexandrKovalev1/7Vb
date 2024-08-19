import { useSelector } from 'react-redux'

import { useAppSelector } from '@/app/store/store'
import { Button } from '@/components'
import { BurgerMenu } from '@/components/layout/header/burgerMenu/burgerMenu'
import { LoginOrLogOut } from '@/components/layout/header/loginOrLogOut/loginOrLogOut'
import { selectDeviceType } from '@/slices/app/model/appSlice'
import { selectIsAdmin, selectIsAuth } from '@/slices/auth/model/authSlice'

import s from './navBarOrBurgerMenu.module.scss'

import { HeaderNavbar } from '../headerNavbar'

export const NavBarOrBurgerMenu = () => {
  const deviceType = useSelector(selectDeviceType)
  const mobileMode = deviceType === 'mobile'
  const isAdmin = useAppSelector(selectIsAdmin)
  const isAuth = useAppSelector(selectIsAuth)

  return mobileMode ? (
    <BurgerMenu />
  ) : (
    <div className={s.navBarWrapper}>
      {!isAuth && <HeaderNavbar />}
      {isAdmin && <Button variant={'link'}>Go to user</Button>}
      <LoginOrLogOut />
    </div>
  )
}
