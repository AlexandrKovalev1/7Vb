import { RouterProvider } from 'react-router-dom'

import { adminRoutes, commonRoutes, createRouter, userRoutes } from '@/app/router/routes'
import { useAppSelector } from '@/app/store/store'
import { selectIsAdmin, selectIsAuth } from '@/slices/auth/model/authSlice'

const adminRouter = createRouter(adminRoutes)
const userRouter = createRouter(userRoutes)
const publicRouter = createRouter(commonRoutes)

export const Router = () => {
  const isAdmin = useAppSelector(selectIsAdmin)
  const isAuth = useAppSelector(selectIsAuth)

  if (isAuth) {
    return <RouterProvider router={isAdmin ? adminRouter : userRouter} />
  }

  return <RouterProvider router={publicRouter} />
}
