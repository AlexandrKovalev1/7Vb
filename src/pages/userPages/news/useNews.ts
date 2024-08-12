import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { newsThunk, selectNews } from '@/slices/news/model/newsSlise'

export const useNews = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(newsThunk.fetchNews())
  }, [dispatch])

  const news = useAppSelector(selectNews)

  return {
    news,
  }
}
