// export type Product = {
//   PriceInUSD: string
//   Type: 'External' | 'Individual' | 'Internal'

// }

export type ProductItem = {
  GoogleDriveFileID?: string
  availableToAll?: boolean
  description: string
  hasSubscription: boolean
  id: number
  imageUrl: string
  name: string
  remainingTime?: null | string
  status: ProductStatus
  type: ProductType
}

export type ProductStatus = 'Active' | 'NotActive' | 'OnUpdate'

export type ProductType = 'Alpha' | 'Beta' | 'Stable'

export type AddOrEditProductOptions = {
  GoogleDriveFileID: string
  availableToAll: boolean
  description: string
  imageUrl: string
  name: string
  status: ProductStatus
  type: ProductType
}

export type EditProductResponse = {
  GoogleDriveFileID: string
  allowedUsers: number[]
  availableToAll: boolean
  description: string
  id: number
  imageUrl: string
  name: string
  status: ProductStatus
  type: ProductType
}

export type CreateSubscriptionOptions = {
  hours: number
  price: number
  productId: number
}
export type EditSubscriptionOptions = Omit<CreateSubscriptionOptions, 'productId'>

export type AvailableUser = {
  id: number
  username: string
}

export type AddOrRemoveAvailableUserData = {
  productId: number
  userId: number
}
export type AvailableSubscription = {
  id: number
  price: number
  time: string
}
