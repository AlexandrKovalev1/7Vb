import { useSelector } from 'react-redux'
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom'

import { Layout } from '@/components/layout/layout'
import { Products } from '@/pages/products'
import { ProductPage } from '@/pages/products/productPage'
import { ProductsPage } from '@/pages/products/productsPage'
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
} as const

//todo сделать защищенными роуты сайд бара
const DistributorOfPath = () => {
  const isAuth = useSelector(selectIsAuth)

  return isAuth ? <Navigate to={PATH.PRODUCTS} /> : <div>home</div>
}

const router = createHashRouter([
  {
    children: [
      {
        element: <Navigate to={PATH.ROOT} />,
        path: '/phantom/',
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
        element: <div>balance</div>,
        path: PATH.BALANCE,
      },
      {
        element: <div>News</div>,
        path: PATH.NEWS,
      },
      {
        element: <div>Support</div>,
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
