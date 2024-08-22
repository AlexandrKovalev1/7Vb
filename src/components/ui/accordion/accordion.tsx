import * as AccordionRadix from '@radix-ui/react-accordion'

import s from './accordion.module.scss'

type Props = {
  content: string
  title: string
}

export const Accordion = ({ content, title }: Props) => (
  <AccordionRadix.Root className={s.accordionRoot} type={'multiple'}>
    <AccordionRadix.Item className={s.accordionItem} value={'d'}>
      <AccordionRadix.Trigger className={s.trigger}>
        <span className={s.icon}></span>
        {title}
      </AccordionRadix.Trigger>
      <AccordionRadix.Content className={s.accordionContent}>
        <span className={s.accordionContentText}>{content}</span>
      </AccordionRadix.Content>
    </AccordionRadix.Item>
  </AccordionRadix.Root>
)
