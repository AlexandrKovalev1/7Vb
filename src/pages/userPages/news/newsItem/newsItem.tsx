import { Button, Card } from '@/components'
import { NewsItemType } from '@/slices/news/news.types'

import s from './newsItem.module.scss'

type Props = Partial<NewsItemType>

export const NewsItem = ({ content, cover, title, type }: Props) => {
  return (
    <Card className={s.wrapper}>
      <img alt={'cardCover'} className={s.cover} src={cover} />
      <div className={s.content}>
        <div>
          <h2>{title}</h2>
          <span className={s.type}>{type}</span>
        </div>
        <p>{content}</p>
        <Button className={s.button}>Read more</Button>
      </div>
    </Card>
  )
}
