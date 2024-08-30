import { instance } from '@/services/api/api'
import { ProductItem } from '@/slices/products/products.types'

export const productsApi = {
  getProducts: () => {
    return instance.get<ProductItem[]>(`products/getall`)
  },
}
