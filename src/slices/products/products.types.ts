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

export type AddProductOptions = {
  allowedUsers: number[]
  availableToAll: boolean
  description: string
  imageUrl: string
  name: string
  status: string
}

export type EditProductOptions = {
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
