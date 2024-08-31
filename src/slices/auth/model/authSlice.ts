import { createAppSlice } from '@/common/utils/createAppSilce'
import { AuthData, SignUpValues, authApi } from '@/slices/auth/api/authApi'
import { isAxiosError } from 'axios'

const slice = createAppSlice({
  initialState: {
    accountLevel: 'Guest' as 'Admin' | 'Guest' | 'User',
    authIPs: null as null | string,
    balance: null as null | string,
    email: null as null | string,
    emailConfirmed: false,
    id: null as null | string,
    isAuth: false,
    restrictions: null as null | string,
    username: null as null | string,
  },
  name: 'auth',
  reducers: create => {
    const createAThunk = create.asyncThunk.withTypes<{
      rejectValue: { message: string }
    }>()

    return {
      logOut: create.asyncThunk<any>(
        async () => {
          await authApi.logOut()

          localStorage.removeItem('token')
        },
        {
          fulfilled: state => {
            state.accountLevel = 'Guest'
            state.authIPs = null
            state.id = null
            state.balance = null
            state.email = null
            state.emailConfirmed = false
            state.isAuth = false
            state.restrictions = null
            state.username = null
          },
        }
      ),
      login: create.asyncThunk<{ isAuth: boolean }, AuthData>(
        async (params: AuthData, { dispatch, rejectWithValue }) => {
          try {
            const res = await authApi.login(params)

            if (res.data.status === 'success') {
              localStorage.setItem('token', res.data.token)
              dispatch(me())

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
      me: createAThunk(
        async (_, { rejectWithValue }) => {
          try {
            const res = await authApi.me()

            return { ...res.data, isAuth: true }
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

            return rejectWithValue({ message: (e as Error).message })
          }
        },
        {
          fulfilled: (state, action) => {
            const {
              accountLevel,
              authIPs,
              balance,
              email,
              emailConfirmed,
              id,
              isAuth,
              restrictions,
              username,
            } = action.payload

            state.accountLevel = accountLevel
            state.balance = balance
            state.authIPs = authIPs
            state.email = email
            state.isAuth = isAuth
            state.emailConfirmed = emailConfirmed
            state.id = id
            state.restrictions = restrictions
            state.username = username
          },
          rejected: state => {
            state.isAuth = false
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
    }
  },

  selectors: {
    selectIsAdmin: state => state.accountLevel === 'Admin',
    selectIsAuth: state => state.isAuth,
    selectUserDate: state => state,
    selectUserId: state => state.id,
  },
})

export const authReducer = slice.reducer
export const { selectIsAdmin, selectIsAuth, selectUserDate, selectUserId } = slice.selectors
export const { logOut, login, me, register } = slice.actions
