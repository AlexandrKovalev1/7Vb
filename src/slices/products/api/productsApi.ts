import { instance } from '@/services/api/api'
import {
  AddOrEditProductOptions,
  AvailableUser,
  CreateSubscriptionOptions,
  ProductItem,
} from '@/slices/products/products.types'

export const productsApi = {
  addProduct: (options: AddOrEditProductOptions) => {
    return instance.post('products/add', options)
  },
  createSubscription: (options: CreateSubscriptionOptions) => {
    return instance.post('subscriptions/createnew', options)
  },
  // },
  deleteProduct: (id: number) => {
    return instance.delete(`products/delete/${id}`)
  },
  editProduct: (id: string, options: AddOrEditProductOptions) => {
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
