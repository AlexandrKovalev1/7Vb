import { instance } from '@/services/api/api'
import {
  AddProductOptions,
  CreateSubscriptionOptions,
  EditProductOptions,
  ProductItem,
} from '@/slices/products/products.types'

export const productsApi = {
  addProduct: (options: AddProductOptions) => {
    return instance.post('products/add', options)
  },
  createSubscription: (options: CreateSubscriptionOptions) => {
    return instance.post('subscriptions/createnew', options)
  },
  editProduct: (id: string, options: EditProductOptions) => {
    return instance.put(`products/edit/${id}`, options)
  },
  getProducts: () => {
    return instance.get<ProductItem[]>(`products/getall`)
  },
}
