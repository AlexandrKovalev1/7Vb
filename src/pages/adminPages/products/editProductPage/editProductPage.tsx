import { Outlet, useLocation } from 'react-router-dom'

import { EditProductForm } from '@/pages/adminPages/products/editProductPage/editProductForm'

export const EditProductPage = () => {
  return (
    <>
      <EditProductForm />
    </>
  )
}
