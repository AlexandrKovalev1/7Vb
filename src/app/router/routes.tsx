import { useSelector } from 'react-redux'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Users } from '@/adminPages/users'
import { Layout } from '@/components/layout/layout'
import { Balance } from '@/pages/balance/balance'
import { News } from '@/pages/news'
import { Products } from '@/pages/products'
import { ProductPage } from '@/pages/products/productPage'
import { ProductsPage } from '@/pages/products/productsPage'
import { Support } from '@/pages/support/support'
import { selectIsAuth } from '@/slices/auth/model/authSlice'

export const PATH = {
  BALANCE: '/balance',
  FAQ: '/FAQ',
  LANGUAGE: '/language',
  LOGIN: '/login',
  NEWS: '/news',
  PRODUCT_PAGE: `:title/:id`,
  PRODUCTS: '/products',
  ROOT: '/',
  RULES: '/rules',
  SETTINGS: '/settings',
  SUPPORT: '/support',
  USERS: '/users',
} as const

//todo сделать защищенными роуты сайд бара
const DistributorOfPath = () => {
  const isAuth = useSelector(selectIsAuth)

  return isAuth ? <Navigate to={PATH.PRODUCTS} /> : <div>home</div>
}

const router = createBrowserRouter([
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
        element: <Users />,
        path: PATH.USERS,
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
    ],
    element: <Layout />,
    errorElement: <Navigate to={'/error'} />,
    path: PATH.ROOT,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
