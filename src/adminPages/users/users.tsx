import { Button, Card, Table } from '@/components'

export const Users = () => {
  return (
    <Table
      buttonTitle={'Add user'}
      heading={'Users'}
      params={['Id', 'UserName', '']}
      variant={'users'}
    >
      <AdminUserItem />
    </Table>
  )
}

const AdminUserItem = () => {
  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>1</td>
      <td>Idiot user</td>
      <td>
        <Button variant={'table'}>Edit</Button>
      </td>
    </Card>
  )
}
