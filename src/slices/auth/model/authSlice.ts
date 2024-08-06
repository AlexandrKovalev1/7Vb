import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  initialState: {
    isAuth: true,
  },
  name: 'auth',
  reducers: {},
  selectors: {
    selectIsAuth: state => state.isAuth,
  },
})

export const authReducer = slice.reducer
export const { selectIsAuth } = slice.selectors
