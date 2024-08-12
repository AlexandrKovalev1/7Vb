import { StatusSupportType } from '@/slices/supportMessages/supportMessages.types'

import s from './ticketHead.module.scss'

import { Card } from '../../../../../components'

type Props = {
  content?: string
  id?: string
  status?: StatusSupportType
}

export const TicketHead = ({ content, id, status = 'Failed' }: Props) => {
  const statusClass = status.split(' ').join('').toLowerCase()

  return (
    <Card className={s.ticketInfo}>
      <div>ID {id}</div>
      <div> {content}</div>
      <small className={s[statusClass]}>{status}</small>
    </Card>
  )
}
