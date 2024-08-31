import { Navigate, Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

import { useAppSelector } from '@/app/store/store'
import { Login } from '@/components/auth'
import { SignUp } from '@/components/auth/signUp/signUp'
import { Layout } from '@/components/layout/layout'
import { AdminProducts } from '@/pages/adminPages/products'
import { AddProduct } from '@/pages/adminPages/products/addProduct'
import { AdminProductsOutlet } from '@/pages/adminPages/products/adminProductsOutlet'
import { AdminSupport, AdminSupportPage, SupportTicket } from '@/pages/adminPages/support'
import { Users } from '@/pages/adminPages/users'
import { PageNotFound } from '@/pages/publicPages'
import { Faq } from '@/pages/publicPages/faq'
import { Home } from '@/pages/publicPages/home/home'
import { Rules } from '@/pages/publicPages/rules'
import { Balance } from '@/pages/userPages/balance/balance'
import { News } from '@/pages/userPages/news'
import { Products } from '@/pages/userPages/products'
import { ProductPage } from '@/pages/userPages/products/productPage'
import { ProductsPage } from '@/pages/userPages/products/productsPage'
import { Support } from '@/pages/userPages/support/support'
import { selectIsAuth } from '@/slices/auth/model/authSlice'

export const PATH = {
  ADD_PRODUCT: ':addProduct',
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

export const ProtectedRoutes = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}

export const DistributorOfPath = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? <Navigate to={PATH.PRODUCTS} /> : <Navigate to={PATH.HOME} />
}

export const adminRoutes: RouteObject[] = [
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
    children: [
      {
        element: <AdminProducts />,
        path: PATH.PRODUCTS,
      },
      {
        element: <AddProduct />,
        path: PATH.ADD_PRODUCT,
      },
    ],
    element: <AdminProductsOutlet />,
    path: PATH.PRODUCTS,
  },
  {
    element: <div>Settings</div>,
    path: PATH.SETTINGS,
  },
]

export const userRoutes: RouteObject[] = [
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
]

export const commonRoutes: RouteObject[] = [
  {
    element: <SignUp />,
    path: PATH.SIGN_UP,
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
  {
    children: [...adminRoutes, ...userRoutes],
    element: <ProtectedRoutes />,
  },
]

export const createRouter: typeof createBrowserRouter = (routes: RouteObject[]) =>
  createBrowserRouter([
    {
      children: [
        {
          element: <Navigate to={PATH.ROOT} />,
          path: '/7Vb/',
        },
        {
          element: <DistributorOfPath />,
          path: PATH.ROOT,
        },
        {
          element: <Login />,
          path: PATH.LOGIN,
        },
        ...routes,
      ],
      element: <Layout />,
      errorElement: <PageNotFound />,
      path: PATH.ROOT,
    },
  ])
