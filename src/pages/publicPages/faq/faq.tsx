import { useState } from 'react'

import { Card } from '@/components'

import s from './fuq.module.scss'

export const Faq = () => {
  return (
    <div className={s.wrapper}>
      <Card className={s.card}>
        <h2 className={s.heading}>Faq</h2>
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </Card>
    </div>
  )
}

const FaqItem = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickHandler = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={s.faqItemWrapper} onClick={onClickHandler}>
      <div className={s.faqItemHead}>
        <h2>{isOpen ? '-' : '+'} Question</h2>
      </div>
      {isOpen && (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, porro, veritatis! Ab
          adipisci asperiores aut, beatae culpa fuga in incidunt ipsa nemo officiis perferendis
          possimus quibusdam sint suscipit vitae, voluptas?
        </div>
      )}
    </div>
  )
}
