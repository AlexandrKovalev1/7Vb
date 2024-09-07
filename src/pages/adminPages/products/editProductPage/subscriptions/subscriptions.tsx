import { Link, useOutletContext } from 'react-router-dom'

import { Button, Card, Table } from '@/components'
import { AddSub } from '@/pages/adminPages/products/editProductPage/subscriptions/addSub'

export const Subscriptions = () => {
  const id = useOutletContext<string>()

  return (
    <Table
      buttonTitle={'Add Sub'}
      // dialog={<AddSub id={+id} />}
      heading={'Subs'}
      params={['Id', 'Time', 'Price', '']}
    >
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
