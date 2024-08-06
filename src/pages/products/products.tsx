import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '@/app/store/store'
import { productsThunks } from '@/slices/products/model/productsSlice'

export const Products = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(productsThunks.fetchProducts())
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}
