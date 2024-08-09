import { NavLink } from 'react-router-dom'

import { PATH } from '@/app/router/routes'

import s from './burgerMenuBody.module.scss'

type Props = {
  callback?: () => void
}

export const BurgerMenuBody = ({ callback }: Props) => {
  const classNameHandler = ({ isActive }: { isActive: boolean }) => {
    return isActive ? s.active : undefined
  }

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
            <NavLink className={classNameHandler} onClick={callback} to={PATH.BALANCE}>
              <span>Balance</span>
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
