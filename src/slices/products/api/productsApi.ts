import { instance } from '@/services/api/api'
import {
  AddProductOptions,
  EditProductOptions,
  ProductItem,
} from '@/slices/products/products.types'

export const productsApi = {
  addProduct: (options: AddProductOptions) => {
    return instance.post('products/add', options)
  },
  editProduct: (id: string, options: EditProductOptions) => {
    return instance.put(`products/edit/${id}`, options)
  },
  getProducts: () => {
    return instance.get<ProductItem[]>(`products/getall`)
  },
}
