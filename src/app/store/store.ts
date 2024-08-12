import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { appReducer } from '@/slices/app/model/appSlice'
import { authReducer } from '@/slices/auth/model/authSlice'
import { newsReducer } from '@/slices/news/model/newsSlise'
import { productsReducer } from '@/slices/products/model/productsSlice'
import { supportReducer } from '@/slices/supportMessages/model/supportSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    news: newsReducer,
    products: productsReducer,
    supportMessages: supportReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
