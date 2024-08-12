import { useAppSelector } from '@/app/store/store'
import { selectUserId } from '@/slices/auth/model/authSlice'

import s from './messageItem.module.scss'

type MessageItemProps = {
  content: string
  date: string
  senderId: string
}
export const MessageItem = ({ content, date, senderId }: MessageItemProps) => {
  const userId = useAppSelector(selectUserId)

  return (
    <div>
      <span style={{ color: 'darkgray' }}>{date}</span>
      <p className={userId === senderId ? s.myMessage : undefined}>{content}</p>
    </div>
  )
}
