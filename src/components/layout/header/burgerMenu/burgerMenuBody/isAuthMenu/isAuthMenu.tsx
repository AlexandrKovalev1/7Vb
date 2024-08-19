import { NavLink } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppSelector } from '@/app/store/store'
import { selectIsAdmin } from '@/slices/auth/model/authSlice'

type Props = {
  callback?: () => void
  classNameHandler: ({ isActive }: { isActive: boolean }) => string | undefined
}

export const IsAuthMenu = ({ callback, classNameHandler }: Props) => {
  const isAdmin = useAppSelector(selectIsAdmin)

  return (
    <>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.PRODUCTS}>
          <span>Products</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={classNameHandler}
          onClick={callback}
          to={isAdmin ? PATH.USERS : PATH.BALANCE}
        >
          <span>{isAdmin ? 'Users' : 'Balance'}</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.NEWS}>
          <span>News</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.SUPPORT}>
          <span>Support</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.SETTINGS}>
          <span>Settings</span>
        </NavLink>
      </li>
    </>
  )
}
