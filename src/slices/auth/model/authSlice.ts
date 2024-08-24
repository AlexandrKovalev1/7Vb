import { createAppSlice } from '@/common/utils/createAppSilce'
import { AuthData, SignUpValues, authApi } from '@/slices/auth/api/authApi'
import { isAxiosError } from 'axios'

const slice = createAppSlice({
  initialState: {
    id: null as null | string,
    isAdmin: null as boolean | null,
    isAuth: null as boolean | null,
  },
  name: 'auth',
  reducers: create => ({
    logOut: create.asyncThunk<{ id: null; isAdmin: null; isAuth: null }>(
      async () => {
        await authApi.logOut()

        localStorage.removeItem('token')

        return { id: null, isAdmin: null, isAuth: null }
      },
      {
        fulfilled: (state, action) => {
          state.isAuth = action.payload.isAuth
          state.isAdmin = action.payload.isAdmin
          state.id = action.payload.id
        },
      }
    ),
    login: create.asyncThunk<{ isAuth: boolean }, AuthData>(
      async (params: AuthData, { rejectWithValue }) => {
        try {
          const res = await authApi.login(params)

          if (res.data.status === 'success') {
            localStorage.setItem('token', res.data.token)

            return {
              isAuth: true,
            }
          } else {
            return {
              isAuth: false,
            }
          }
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
          state.isAuth = action.payload.isAuth
        },
      }
    ),
    register: create.asyncThunk<{ message: string }, SignUpValues>(
      async (data: SignUpValues, { rejectWithValue }) => {
        try {
          const res = await authApi.register(data)

          if (res.data.status === 'success') {
            return { message: 'Register successed' }
          } else {
            return { message: res.data.message }
          }
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
  }),

  selectors: {
    selectIsAdmin: state => state.isAdmin,
    selectIsAuth: state => state.isAuth,
    selectUserId: state => state.id,
  },
})

export const authReducer = slice.reducer
export const { selectIsAdmin, selectIsAuth, selectUserId } = slice.selectors
export const { logOut, login, register } = slice.actions
