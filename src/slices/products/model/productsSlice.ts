import { createAppSlice } from '@/common/utils/createAppSilce'
import { productsApi } from '@/slices/products/api/productsApi'
import {
  AddProductOptions,
  EditProductOptions,
  ProductItem,
} from '@/slices/products/products.types'
import { isAxiosError } from 'axios'

const slice = createAppSlice({
  initialState: {
    products: [] as ProductItem[],
  },
  name: 'products',
  reducers: create => ({
    addProduct: create.asyncThunk<{}, AddProductOptions>(
      async (options: AddProductOptions, { rejectWithValue }) => {
        try {
          await productsApi.addProduct(options)

          return {}
        } catch (e) {
          if (
            isAxiosError<{
              message: string
              status: string
            }>(e)
          ) {
            if (e.response) {
              return rejectWithValue({ message: e.response?.data.message })
            } else {
              return rejectWithValue({ message: e.message })
            }
          }

          return rejectWithValue({ message: e })
        }
      }
    ),
    editProduct: create.asyncThunk<{}, { id: string; options: EditProductOptions }>(
      async ({ id, options }: { id: string; options: EditProductOptions }, { rejectWithValue }) => {
        try {
          await productsApi.editProduct(id, options)

          return {}
        } catch (e) {
          if (
            isAxiosError<{
              message: string
              status: string
            }>(e)
          ) {
            if (e.response) {
              return rejectWithValue({ message: e.response?.data.message })
            } else {
              return rejectWithValue({ message: e.message })
            }
          }

          return rejectWithValue({ message: e })
        }
      }
    ),
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
