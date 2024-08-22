import { Accordion, Card } from '@/components'

import s from './fuq.module.scss'

const faqData: {
  content: string
  title: string
}[] = [
  {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    title: 'What is Lorem Ipsum?',
  },
  {
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.\n",
    title: ' Why do we use it?',
  },
  {
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n',
    title: 'Where does it come from?',
  },
  {
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n',
    title: 'Where does it come from?',
  },
  {
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\n',
    title: 'Where does it come from?',
  },
]

export const Faq = () => {
  return (
    <div className={s.wrapper}>
      <Card className={s.card}>
        <h2 className={s.heading}>Faq</h2>
        {faqData.map((el, index) => (
          <Accordion content={el.content} key={index} title={el.title} />
        ))}
      </Card>
    </div>
  )
}
