import { NewsItem } from '@/pages/news/newsItem'
import { useNews } from '@/pages/news/useNews'

import s from './news.module.scss'

export const News = () => {
  const { news } = useNews()

  return (
    <div className={s.news}>
      {news?.map(n => <NewsItem content={n.content} cover={n.cover} key={n.id} title={n.title} />)}
    </div>
  )
}
