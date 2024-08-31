import { useEffect } from 'react'

import { PATH } from '@/app/router/routes'
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
    <Table
      buttonTitle={'Add product'}
      heading={'Products'}
      params={['Id', 'Name', 'Type', '']}
      pathLink={PATH.ADD_PRODUCT}
    >
      {products?.map(product => (
        <AdminProductListItem
          id={product.id}
          key={product.id}
          name={product.name}
          type={product.type}
        />
      ))}
    </Table>
  )
}
