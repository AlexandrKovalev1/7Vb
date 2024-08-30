import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/store/store'
import { selectProducts } from '@/slices/products/model/productsSlice'

export const useProduct = () => {
  const { id: idProduct } = useParams()

  const products = useAppSelector(selectProducts)
  const product = products.find(p => p.id.toString() === idProduct)

  return {
    product,
  }
}
