import { Navigate, useOutletContext } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppSelector } from '@/app/store/store'
import { ProductForm } from '@/pages/adminPages/products/productForm/productForm'
import { selectProducts } from '@/slices/products/model/productsSlice'

export const General = () => {
  const products = useAppSelector(selectProducts)
  const id = useOutletContext<string>()

  const product = products.find(product => product.id === +id)

  if (!product) {
    return <Navigate to={PATH.PRODUCTS} />
  }

  return (
    <>
      <ProductForm
        GoogleDriveFileID={product!.GoogleDriveFileID}
        availableToAll={product!.availableToAll}
        description={product!.description}
        id={product!.id.toString()}
        imageUrl={product!.imageUrl}
        name={product!.name}
        status={product!.status}
        type={product!.type}
        variant={'edit'}
      />
    </>
  )
}
