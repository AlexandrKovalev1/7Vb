import testCover from '@/assets/img/assasin.jpeg'
import testCover2 from '@/assets/img/atomic.jpg'
import testCover3 from '@/assets/img/farcry.jpeg'
import testCover4 from '@/assets/img/stalk (1).jpg'
import { PreviewCard } from '@/components/ui/previewCard'

import s from './home.module.scss'

export const Home = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.headingBlock}>
        <h1 className={s.heading}>Приватные читы 7vb</h1>
        <p className={s.description}>
          Интуитивный интерфейс, подсказки по функциям и множество.
          <br /> Получайте преимущество над игроками без DLC и быстро апайте ранги!
        </p>
      </div>
      <div className={s.prevCardsBlock}>
        <PreviewCard cover={testCover} id={'1'} title={'Assassin'} type={'Internal'} />
        <PreviewCard cover={testCover2} id={'2'} title={'Atomic heart'} type={'Internal'} />
        <PreviewCard cover={testCover3} id={'3'} title={'FarCry'} type={'Internal'} />
        <PreviewCard cover={testCover4} id={'4'} title={'Stalker 2'} type={'Internal'} />
      </div>
    </div>
  )
}
