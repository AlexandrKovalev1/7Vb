import { instance } from '@/services/api/api'
import {
  AddProductOptions,
  AvailableUser,
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
  // },
  deleteProduct: (id: number) => {
    return instance.delete(`products/delete/${id}`)
  },
  editProduct: (id: string, options: EditProductOptions) => {
    return instance.put(`products/edit/${id}`, options)
  },
  getAvailableUsers: () => {
    return instance.get<AvailableUser[]>('products/1/users')
  },
  // removeAvailableUser: (body: { userId: number }) => {
  //   return instance.delete('products/1/removeUser', {}, body)
  getProducts: () => {
    return instance.get<ProductItem[]>(`products/getall`)
  },
}
