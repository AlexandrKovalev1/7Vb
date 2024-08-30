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
  status: 'Active' | 'None active' | 'On update'
}
