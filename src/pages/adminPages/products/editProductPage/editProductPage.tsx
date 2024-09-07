import { NavLink, Outlet, useParams } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { AdminTableNav, classNameHandler } from '@/components/ui/adminTableNav'

export const EditProductPage = () => {
  const { id } = useParams()

  return (
    <div>
      <AdminTableNav>
        <ul>
          <li>
            <NavLink className={classNameHandler} to={PATH.ADMIN_PRODUCTS_GENERAL}>
              <span>General</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameHandler} to={PATH.ADMIN_PRODUCTS_AVALIBLE_USERS}>
              <span>Available Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameHandler} to={PATH.ADMIN_PRODUCT_SUBSCRIPTIONS}>
              <span>Subscriptions</span>
            </NavLink>
          </li>
          <li>
            <NavLink className={classNameHandler} to={PATH.ADMIN_PRODUCTS_MANUAL}>
              <span>Manual</span>
            </NavLink>
          </li>
        </ul>
      </AdminTableNav>
      <Outlet context={id} />
    </div>
  )
}
