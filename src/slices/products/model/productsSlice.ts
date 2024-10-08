import { createAppSlice } from '@/common/utils/createAppSilce'
import { productsApi } from '@/slices/products/api/productsApi'
import {
  AddOrEditProductOptions,
  AddOrRemoveAvailableUserData,
  AvailableSubscription,
  AvailableUser,
  CreateSubscriptionOptions,
  EditSubscriptionOptions,
  ProductItem,
} from '@/slices/products/products.types'
import { isAxiosError } from 'axios'

const slice = createAppSlice({
  initialState: {
    availableSubscription: [] as AvailableSubscription[],
    availableUsers: [] as AvailableUser[],
    products: [] as ProductItem[],
  },
  name: 'products',
  reducers: create => ({
    addAvailableUser: create.asyncThunk<{}, AddOrRemoveAvailableUserData>(
      async (data: AddOrRemoveAvailableUserData, { rejectWithValue }) => {
        try {
          await productsApi.addAvailableUser(data)

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
    addProduct: create.asyncThunk<{}, AddOrEditProductOptions>(
      async (options: AddOrEditProductOptions, { rejectWithValue }) => {
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
    createSubscriptions: create.asyncThunk<{}, CreateSubscriptionOptions>(
      async (options: CreateSubscriptionOptions, { rejectWithValue }) => {
        try {
          await productsApi.createSubscription(options)

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
    deleteAvailableUser: create.asyncThunk<{}, AddOrRemoveAvailableUserData>(
      async (data: AddOrRemoveAvailableUserData, { rejectWithValue }) => {
        try {
          await productsApi.removeAvailableUser(data)

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
    deleteProduct: create.asyncThunk<number, number>(
      async (id: number, { rejectWithValue }) => {
        try {
          await productsApi.deleteProduct(id)

          return id
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
      },
      {
        fulfilled: (state, action) => {
          state.products = state.products.filter(product => product.id !== action.payload)
        },
      }
    ),
    deleteSubscription: create.asyncThunk<{}, number>(async (id: number, { rejectWithValue }) => {
      try {
        await productsApi.deleteSubscription(id)

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
    }),
    editProduct: create.asyncThunk<{}, { id: string; options: AddOrEditProductOptions }>(
      async (
        { id, options }: { id: string; options: AddOrEditProductOptions },
        { rejectWithValue }
      ) => {
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
    editSubscription: create.asyncThunk<{}, { id: number; options: EditSubscriptionOptions }>(
      async (
        { id, options }: { id: number; options: EditSubscriptionOptions },
        { rejectWithValue }
      ) => {
        try {
          await productsApi.editSubscription(id, options)

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
    fetchAvailableSubscriptions: create.asyncThunk<
      { availableSubscription: AvailableSubscription[] },
      number
    >(
      async (id: number, { rejectWithValue }) => {
        try {
          const res = await productsApi.getAvailableSubscription(id)

          return { availableSubscription: res.data }
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
      },
      {
        fulfilled: (state, action) => {
          state.availableSubscription = action.payload.availableSubscription
        },
      }
    ),
    fetchAvailableUsers: create.asyncThunk<{ availableUsers: AvailableUser[] }, number>(
      async (id: number) => {
        const res = await productsApi.getAvailableUsers(id)

        return { availableUsers: res.data }
      },
      {
        fulfilled: (state, action) => {
          state.availableUsers = action.payload.availableUsers
        },
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
    selectAvailableSubscriptions: state => state.availableSubscription,
    selectAvailableUsers: state => state.availableUsers,
    selectProducts: state => state.products,
  },
})

export const productsThunks = slice.actions
export const productsReducer = slice.reducer
export const { selectAvailableSubscriptions, selectAvailableUsers, selectProducts } =
  slice.selectors
