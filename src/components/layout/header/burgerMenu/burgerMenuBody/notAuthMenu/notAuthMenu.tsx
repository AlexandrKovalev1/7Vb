import { NavLink } from 'react-router-dom'

import { PATH } from '@/app/router/routes'

type Props = {
  callback?: () => void
  classNameHandler: ({ isActive }: { isActive: boolean }) => string | undefined
}

export const NotAuthMenu = ({ callback, classNameHandler }: Props) => {
  return (
    <>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.LANGUAGE}>
          <span>EN</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.RULES}>
          <span>Rules</span>
        </NavLink>
      </li>
      <li>
        <NavLink className={classNameHandler} onClick={callback} to={PATH.FAQ}>
          <span>FAQ</span>
        </NavLink>
      </li>
    </>
  )
}
