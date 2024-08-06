import { products } from '@/common/data/prevData'

export const productsApi = {
  getProducts: () => {
    return Promise.resolve({ data: products })
  },
}
