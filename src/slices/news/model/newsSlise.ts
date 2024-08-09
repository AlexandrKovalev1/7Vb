import { createAppSlice } from '@/common/utils/createAppSilce'
import { newssApi } from '@/slices/news/api/newsApi'
import { NewsItemType } from '@/slices/news/news.types'

const slise = createAppSlice({
  initialState: {
    news: [] as NewsItemType[],
  },
  name: 'news',
  reducers: create => ({
    fetchNews: create.asyncThunk<{ news: NewsItemType[] }>(
      async () => {
        const res = await newssApi.getProducts()

        return { news: res.data }
      },
      {
        fulfilled: (state, action) => {
          state.news = action.payload.news
        },
      }
    ),
  }),
  selectors: {
    selectNews: state => state.news,
  },
})

export const newsThunk = slise.actions
export const newsReducer = slise.reducer
export const { selectNews } = slise.selectors
