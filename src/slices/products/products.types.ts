export type Product = {
  PriceInUSD: string
  Title: string
  Type: 'External' | 'Individual' | 'Internal'
  cover: string
  daysLeft: null | number
  description: null | string
  id: string
  subscribeStatus: 'Active' | 'None active' | 'On update'
}
