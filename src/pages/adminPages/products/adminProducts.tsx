import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Table } from '@/components'
import { AdminProductListItem } from '@/pages/adminPages/products/adminProductListItem'
import { productsThunks, selectProducts } from '@/slices/products/model/productsSlice'

export const AdminProducts = () => {
  const products = useAppSelector(selectProducts)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(productsThunks.fetchProducts())
  }, [])

  return (
    <Table buttonTitle={'Add product'} heading={'Products'} params={['Id', 'Name', 'Type', '']}>
      {products?.map(product => (
        <AdminProductListItem
          Title={product.Title}
          Type={product.Type}
          id={product.id}
          key={product.id}
        />
      ))}
    </Table>
  )
}
