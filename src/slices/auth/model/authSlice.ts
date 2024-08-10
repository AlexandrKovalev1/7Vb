import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    isAdmin: true,
    isAuth: true,
  },
  name: 'auth',
  reducers: {},
  selectors: {
    selectIsAdmin: state => state.isAdmin,
    selectIsAuth: state => state.isAuth,
  },
})

export const authReducer = slice.reducer
export const { selectIsAdmin, selectIsAuth } = slice.selectors
