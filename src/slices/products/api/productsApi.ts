import { instance } from '@/services/api/api'
import {
  AddOrEditProductOptions,
  AddOrRemoveAvailableUserData,
  AvailableSubscription,
  AvailableUser,
  CreateSubscriptionOptions,
  EditSubscriptionOptions,
  ProductItem,
} from '@/slices/products/products.types'

export const productsApi = {
  addAvailableUser: (data: AddOrRemoveAvailableUserData) => {
    return instance.post(`products/${data.productId}/addUser`, { userId: data.userId })
  },
  addProduct: (options: AddOrEditProductOptions) => {
    return instance.post('products/add', options)
  },
  createSubscription: (options: CreateSubscriptionOptions) => {
    return instance.post('subscriptions/createnew', options)
  },
  deleteProduct: (id: number) => {
    return instance.delete(`products/delete/${id}`)
  },
  deleteSubscription: (idSubscription: number) => {
    return instance.delete(`subscriptions/delete/${idSubscription}`)
  },
  editProduct: (id: string, options: AddOrEditProductOptions) => {
    return instance.put(`products/edit/${id}`, options)
  },
  editSubscription: (idSubscription: number, options: EditSubscriptionOptions) => {
    return instance.put(`subscriptions/edit/${idSubscription}`, options)
  },
  getAvailableSubscription: (id: number) => {
    return instance.get<AvailableSubscription[]>(`products/getsub/${id}`)
  },
  getAvailableUsers: (id: number) => {
    return instance.get<AvailableUser[]>(`products/${id}/users`)
  },
  getProducts: () => {
    return instance.get<ProductItem[]>(`products/getall`)
  },
  removeAvailableUser: (data: AddOrRemoveAvailableUserData) => {
    return instance.delete(`products/${data.productId}/removeUser/${data.userId}`)
  },
}
