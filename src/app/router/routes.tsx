import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { useAppSelector } from '@/app/store/store'
import { Login } from '@/components/auth/login/login'
import { SignUp } from '@/components/auth/signUp/signUp'
import { Layout } from '@/components/layout/layout'
import { AdminProducts } from '@/pages/adminPages/products'
import { AdminSupport, AdminSupportPage, SupportTicket } from '@/pages/adminPages/support'
import { Users } from '@/pages/adminPages/users'
import { Faq } from '@/pages/publicPages/faq'
import { Home } from '@/pages/publicPages/home/home'
import { Rules } from '@/pages/publicPages/rules'
import { Balance } from '@/pages/userPages/balance/balance'
import { News } from '@/pages/userPages/news'
import { Products } from '@/pages/userPages/products'
import { ProductPage } from '@/pages/userPages/products/productPage'
import { ProductsPage } from '@/pages/userPages/products/productsPage'
import { Support } from '@/pages/userPages/support/support'
import { selectIsAdmin, selectIsAuth } from '@/slices/auth/model/authSlice'

export const PATH = {
  BALANCE: '/balance',
  FAQ: '/FAQ',
  HOME: '/home',
  LANGUAGE: '/language',
  LOGIN: '/login',
  NEWS: '/news',
  PRODUCT_PAGE: `:title/:id`,
  PRODUCTS: '/products',
  ROOT: '/',
  RULES: '/rules',
  SETTINGS: '/settings',
  SIGN_UP: '/sign_up',
  SUPPORT: '/support',
  SUPPORT_TICKET: ':id',
  USERS: '/users',
} as const

const DistributorOfPath = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? <Navigate to={PATH.PRODUCTS} /> : <Login />
}

const rootRoutes: RouteObject[] = [
  {
    element: <Navigate to={PATH.ROOT} />,
    path: '/7Vb/',
  },
  {
    element: <Navigate to={PATH.ROOT} />,
    path: '/*',
  },
  {
    element: <DistributorOfPath />,
    path: PATH.ROOT,
  },
]

const adminRouter = createBrowserRouter([
  {
    children: [
      ...rootRoutes,
      {
        element: <Users />,
        path: PATH.USERS,
      },
      {
        element: <News />,
        path: PATH.NEWS,
      },
      {
        children: [
          {
            element: <AdminSupportPage />,
            path: PATH.SUPPORT,
          },
          {
            element: <SupportTicket />,
            path: PATH.SUPPORT_TICKET,
          },
        ],
        element: <AdminSupport />,
        path: PATH.SUPPORT,
      },
      {
        element: <AdminProducts />,
        path: PATH.PRODUCTS,
      },
      {
        element: <div>Settings</div>,
        path: PATH.SETTINGS,
      },
      {
        element: <Login />,
        path: PATH.LOGIN,
      },
    ],
    element: <Layout />,
    errorElement: <Navigate to={'/error'} />,
    path: PATH.ROOT,
  },
])

const userRouter = createBrowserRouter([
  {
    children: [
      ...rootRoutes,
      {
        children: [
          {
            element: <ProductsPage />,
            path: PATH.PRODUCTS,
          },
          {
            element: <ProductPage />,
            path: PATH.PRODUCT_PAGE,
          },
        ],
        element: <Products />,
        path: PATH.PRODUCTS,
      },
      {
        element: <Balance />,
        path: PATH.BALANCE,
      },
      {
        element: <News />,
        path: PATH.NEWS,
      },
      {
        element: <Support />,
        path: PATH.SUPPORT,
      },
      {
        element: <div>Settings</div>,
        path: PATH.SETTINGS,
      },
      {
        element: <Login />,
        path: PATH.LOGIN,
      },
    ],
    element: <Layout />,
    errorElement: <Navigate to={'/error'} />,
    path: PATH.ROOT,
  },
])

// /* --- мешает переходу в error404после вылогинизации
const publicRouter = createBrowserRouter([
  {
    children: [
      {
        element: <Navigate to={PATH.ROOT} />,
        path: '/*',
      },
      {
        element: <SignUp />,
        path: PATH.SIGN_UP,
      },
      {
        element: <Login />,
        path: PATH.LOGIN,
      },
      {
        element: <Navigate to={PATH.HOME} />,
        path: '/7Vb/',
      },
      {
        element: <Navigate to={PATH.HOME} />,
        path: PATH.ROOT,
      },
      {
        element: <Home />,
        path: PATH.HOME,
      },
      {
        element: <Faq />,
        path: PATH.FAQ,
      },
      {
        element: <Rules />,
        path: PATH.RULES,
      },
    ],
    element: <Layout />,
    errorElement: <Navigate to={'/error'} />,
    path: PATH.ROOT,
  },
])

export const Router = () => {
  const isAdmin = useAppSelector(selectIsAdmin)
  const isAuth = useAppSelector(selectIsAuth)

  if (isAuth) {
    return <RouterProvider router={isAdmin ? adminRouter : userRouter} />
  }

  return <RouterProvider router={publicRouter} />
}
