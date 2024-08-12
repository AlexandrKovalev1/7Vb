import { createAppSlice } from '@/common/utils/createAppSilce'
import { AuthData, authApi } from '@/slices/auth/api/authApi'

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
    login: create.asyncThunk<{ id: null | string; isAdmin?: boolean; isAuth: boolean }, AuthData>(
      async (params: AuthData, { rejectWithValue }) => {
        try {
          const res = await authApi.getIsAuth(params)

          if (res.isAdmin) {
            return { id: res.id, isAdmin: true, isAuth: true }
          } else if (Object.keys(res)) {
            return { id: res.id, isAuth: true }
          } else {
            {
              return rejectWithValue('')
            }
          }
        } catch (e) {
          return { id: null, isAuth: false }
        }
      },
      {
        fulfilled: (state, action) => {
          if (action.payload.isAdmin) {
            state.isAdmin = action.payload.isAdmin
            state.isAuth = action.payload.isAuth
            state.id = action.payload.id
          } else {
            state.isAuth = action.payload.isAuth
            state.id = action.payload.id
          }
        },
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
export const { logOut, login } = slice.actions
