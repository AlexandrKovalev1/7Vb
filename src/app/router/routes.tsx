import { Navigate, Outlet, RouteObject, createBrowserRouter } from 'react-router-dom'

import { useAppSelector } from '@/app/store/store'
import { Login } from '@/components/auth'
import { SignUp } from '@/components/auth/signUp/signUp'
import { Layout } from '@/components/layout/layout'
import { AdminProducts } from '@/pages/adminPages/products'
import { AddProduct } from '@/pages/adminPages/products/addProduct'
import { AvilableUsers } from '@/pages/adminPages/products/addProduct/avilableUsers/avilableUsers'
import { General } from '@/pages/adminPages/products/addProduct/general/general'
import { Subscriptions } from '@/pages/adminPages/products/addProduct/subscriptions'
import { AdminProductsOutlet } from '@/pages/adminPages/products/adminProductsOutlet'
import { EditProductPage } from '@/pages/adminPages/products/editProductPage'
import { EditProductForm } from '@/pages/adminPages/products/editProductPage/editProductForm'
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
  ADD_PRODUCT: 'addProduct',
  ADMIN_PRODUCT_SUBSCRIPTIONS: 'subscriptions',
  ADMIN_PRODUCTS_AVALIBLE_USERS: 'avalible-users',
  ADMIN_PRODUCTS_EDIT_PRODUCT: 'edit-product',
  ADMIN_PRODUCTS_EDIT_PRODUCT_PAGE: ':id',
  ADMIN_PRODUCTS_GENERAL: 'general',
  ADMIN_PRODUCTS_MANUAL: 'manual',
  ADMIN_PRODUCTS_TRANSACTIONS: '',
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
        children: [{ element: <EditProductForm />, path: PATH.ADMIN_PRODUCTS_EDIT_PRODUCT_PAGE }],
        element: <EditProductPage />,
        path: PATH.ADMIN_PRODUCTS_EDIT_PRODUCT,
      },
      {
        element: <AdminProducts />,
        path: PATH.PRODUCTS,
      },
      {
        children: [
          { element: <Navigate to={PATH.ADMIN_PRODUCTS_GENERAL} />, path: '' },
          {
            element: <General />,
            path: PATH.ADMIN_PRODUCTS_GENERAL,
          },
          {
            element: <AvilableUsers />,
            path: PATH.ADMIN_PRODUCTS_AVALIBLE_USERS,
          },
          { element: <Subscriptions />, path: PATH.ADMIN_PRODUCT_SUBSCRIPTIONS },
          { element: <div>Manual</div>, path: PATH.ADMIN_PRODUCTS_MANUAL },
        ],
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
