import { createAppSlice } from '@/common/utils/createAppSilce'
import { productsApi } from '@/slices/products/api/productsApi'
import { ProductItem } from '@/slices/products/products.types'

const slice = createAppSlice({
  initialState: {
    products: [] as ProductItem[],
  },
  name: 'products',
  reducers: create => ({
    fetchProducts: create.asyncThunk<{ products: ProductItem[] }>(
      async () => {
        const res = await productsApi.getProducts()

        return { products: res.data }
      },
      {
        fulfilled: (state, action) => {
          state.products = action.payload.products
        },
      }
    ),
  }),
  selectors: {
    selectProducts: state => state.products,
  },
})

export const productsThunks = slice.actions
export const productsReducer = slice.reducer
export const { selectProducts } = slice.selectors
