import { instance } from '@/services/api/api'
import { AddProductOptions, ProductItem } from '@/slices/products/products.types'

export const productsApi = {
  addProduct: (options: AddProductOptions) => {
    return instance.post('products/add', options)
  },
  getProducts: () => {
    return instance.get<ProductItem[]>(`products/getall`)
  },
}
