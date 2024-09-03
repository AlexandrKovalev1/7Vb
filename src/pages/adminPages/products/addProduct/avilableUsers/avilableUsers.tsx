import { Button, Card, Table } from '@/components'

export const AvilableUsers = () => {
  return (
    <Table
      buttonTitle={'Add User'}
      heading={'Users'}
      params={['Id', 'Username', '']}
      variant={'users'}
    >
      <AdminAvilableUserItem />
    </Table>
  )
}

const AdminAvilableUserItem = () => {
  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>1</td>
      <td>Idiot user</td>
      <td>
        <Button variant={'table'}>Delete</Button>
      </td>
    </Card>
  )
}
