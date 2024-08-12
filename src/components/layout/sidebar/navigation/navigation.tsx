import { NavLink } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { Icon } from '@/components/ui/icon'

import s from './navigation.module.scss'

type Props = {
  isAdmin?: boolean | null
}
export const Navigation = ({ isAdmin }: Props) => {
  const balanceItem = (
    <NavLink className={classNameHandler} to={PATH.BALANCE}>
      <div className={s.iconWrapper}>
        <Icon height={32} name={'balance'} viewBox={'0 0 32 32'} width={32} />
      </div>
      <span>Balance</span>
    </NavLink>
  )

  const usersItem = (
    <NavLink className={classNameHandler} to={PATH.USERS}>
      <div className={s.iconWrapper}>
        <Icon height={33} name={'users'} viewBox={'0 0 25 33'} width={25} />
      </div>
      <span>Users</span>
    </NavLink>
  )

  return (
    <nav>
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink className={classNameHandler} to={PATH.PRODUCTS}>
            <div className={s.iconWrapper}>
              <Icon height={32} name={'products'} viewBox={'0 0 31 32'} width={31} />
            </div>
            <span>Products</span>
          </NavLink>
        </li>
        <li className={s.listItem}>{isAdmin ? usersItem : balanceItem}</li>
        <li className={s.listItem}>
          <NavLink className={classNameHandler} to={PATH.NEWS}>
            <div className={s.iconWrapper}>
              <Icon height={36} name={'news'} viewBox={'0 0 29 36'} width={29} />
            </div>
            <span>News</span>
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink className={classNameHandler} to={PATH.SUPPORT}>
            <div className={s.iconWrapper}>
              <Icon height={36} name={'support'} viewBox={'0 0 35 36'} width={35} />
            </div>
            <span>Support</span>
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink className={classNameHandler} to={PATH.SETTINGS}>
            <div className={s.iconWrapper}>
              <Icon height={36} name={'settings'} viewBox={'0 0 31 36'} width={31} />
            </div>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const classNameHandler = ({ isActive }: { isActive: boolean }) => {
  return isActive ? s.active : undefined
}
