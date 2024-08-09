import { news } from '@/common/data/prevData'

export const newssApi = {
  getProducts: () => {
    return Promise.resolve({ data: news })
  },
}
