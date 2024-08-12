import { NavLink } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppSelector } from '@/app/store/store'
import { selectIsAdmin } from '@/slices/auth/model/authSlice'

import s from './burgerMenuBody.module.scss'

type Props = {
  callback?: () => void
}

export const BurgerMenuBody = ({ callback }: Props) => {
  const isAdmin = useAppSelector(selectIsAdmin)

  return (
    <div className={s.wrapper}>
      <nav className={s.nav}>
        <ul className={s.list}>
          <li className={s.listItem}>
            <NavLink className={classNameHandler} onClick={callback} to={PATH.PRODUCTS}>
              <span>Products</span>
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink
              className={classNameHandler}
              onClick={callback}
              to={isAdmin ? PATH.USERS : PATH.BALANCE}
            >
              <span>{isAdmin ? 'Users' : 'Balance'}</span>
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={classNameHandler} onClick={callback} to={PATH.NEWS}>
              <span>News</span>
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={classNameHandler} onClick={callback} to={PATH.SUPPORT}>
              <span>Support</span>
            </NavLink>
          </li>
          <li className={s.listItem}>
            <NavLink className={classNameHandler} onClick={callback} to={PATH.SETTINGS}>
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

const classNameHandler = ({ isActive }: { isActive: boolean }) => {
  return isActive ? s.active : undefined
}
