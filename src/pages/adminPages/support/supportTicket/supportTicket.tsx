import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/store/store'
import { Button, Card } from '@/components'
import { MessageItem, TicketHead } from '@/pages/adminPages/support'
import { selectMessages } from '@/slices/supportMessages/model/supportSlice'

import s from './supportTicket.module.scss'

export const SupportTicket = () => {
  const { id } = useParams()
  const messages = useAppSelector(selectMessages)
  const currentMessages = messages.find(message => message.id === id)

  return (
    <div className={s.wrapper}>
      <TicketHead
        content={currentMessages?.messages?.[0].content}
        id={currentMessages?.id}
        status={currentMessages?.status}
      />
      <Card className={s.messagesBlock}>
        <div className={s.messageItems}>
          {currentMessages?.messages.map(message => (
            <MessageItem
              content={message.content}
              date={message.date}
              key={message.id}
              senderId={message.senderId}
            />
          ))}
        </div>
        <div>
          <textarea className={s.textarea} />
          <Button className={s.button}> Send</Button>
        </div>
      </Card>
    </div>
  )
}
