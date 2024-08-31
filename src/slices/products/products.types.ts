// export type Product = {
//   PriceInUSD: string
//   Type: 'External' | 'Individual' | 'Internal'

// }

export type ProductItem = {
  description: string
  hasSubscription: boolean
  id: number
  imageUrl: string
  name: string
  remainingTime?: null | string
  status: 'Active' | 'NotActive' | 'OnUpdate'
  type: 'Alpha' | 'Beta' | 'Stable'
}

export type AddProductResponse = {
  GoogleDriveFileID: string
  allowedUsers: string
  availableToAll: boolean
  description: string
  id: number
  imageUrl: string
  name: string
  status: string
  type: string
}

export type AddProductOptions = {
  allowedUsers: number[]
  availableToAll: boolean
  description: string
  imageUrl: string
  name: string
  status: string
}
