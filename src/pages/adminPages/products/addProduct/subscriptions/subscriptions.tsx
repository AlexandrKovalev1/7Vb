import { Link } from 'react-router-dom'

import { Button, Card, Table } from '@/components'

export const Subscriptions = () => {
  return (
    <Table buttonTitle={'Add Sub'} heading={'Subs'} params={['Id', 'Time', 'Price', '']}>
      <AdminSubscriptionItem />
    </Table>
  )
}

const AdminSubscriptionItem = () => {
  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>1</td>
      <td>10 days</td>
      <td>19.99</td>
      <td>
        <Button as={Link} style={{ marginRight: '10px' }} to={''} variant={'table'}>
          Edit
        </Button>
        <Button variant={'table'}>Delete</Button>
      </td>
    </Card>
  )
}
