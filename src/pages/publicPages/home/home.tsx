import testCover from '@/assets/img/assasin.jpeg'
import { PreviewCard } from '@/components/ui/previewCard'

import s from './home.module.scss'

export const Home = () => {
  return (
    <div className={s.wrapper}>
      <div>
        <h1 className={s.heading}>Приватные читы 7vb</h1>
        <p className={s.description}>
          Интуитивный интерфейс, подсказки по функциям и множество.
          <br /> Получайте преимущество над игроками без DLC и быстро апайте ранги!
        </p>
      </div>
      <div className={s.prevCardsBlock}>
        <PreviewCard cover={testCover} id={'1'} title={'Assasin'} type={'Internal'} />
        <PreviewCard cover={testCover} id={'1'} title={'Assasin'} type={'Internal'} />
        <PreviewCard cover={testCover} id={'1'} title={'Assasin'} type={'Internal'} />
        <PreviewCard cover={testCover} id={'1'} title={'Assasin'} type={'Internal'} />
      </div>
    </div>
  )
}
