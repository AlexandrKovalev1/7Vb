import { Link } from 'react-router-dom'

import { Button, Card } from '@/components'
import { StatusSupportType } from '@/slices/supportMessages/supportMessages.types'

import s from './adminSupportPreviewItem.module.scss'

type Props = {
  description: string
  id: string
  status: StatusSupportType
}

export const AdminSupportPreviewItem = ({ description, id, status = 'Failed' }: Props) => {
  const statusClass = status.split(' ').join('').toLowerCase()

  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>{id}</td>
      <td className={s.itemDescription}>{description}</td>
      <td className={s[statusClass]}>{status}</td>
      <td>
        <Button as={Link} to={id} variant={'table'}>
          Open
        </Button>
      </td>
    </Card>
  )
}
