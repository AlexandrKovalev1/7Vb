import { useAppSelector } from '@/app/store/store'
import { IsAuthMenu } from '@/components/layout/header/burgerMenu/burgerMenuBody/isAuthMenu/isAuthMenu'
import { NotAuthMenu } from '@/components/layout/header/burgerMenu/burgerMenuBody/notAuthMenu/notAuthMenu'
import { LoginOrLogOut } from '@/components/layout/header/loginOrLogOut'
import { selectIsAuth } from '@/slices/auth/model/authSlice'

import s from './burgerMenuBody.module.scss'

type Props = {
  callback?: () => void
}

export const BurgerMenuBody = ({ callback }: Props) => {
  const isAuth = useAppSelector(selectIsAuth)

  return (
    <div className={`${s.wrapper} ${!isAuth && s.notAuth}`}>
      <nav className={s.nav}>
        <ul className={s.list}>
          {isAuth ? (
            <IsAuthMenu callback={callback} classNameHandler={classNameHandler} />
          ) : (
            <NotAuthMenu callback={callback} classNameHandler={classNameHandler} />
          )}
        </ul>
      </nav>
      <span className={s.loginBlock} onClick={callback}>
        <LoginOrLogOut />
      </span>
    </div>
  )
}

const classNameHandler = ({ isActive }: { isActive: boolean }) => {
  return isActive ? s.active : undefined
}
