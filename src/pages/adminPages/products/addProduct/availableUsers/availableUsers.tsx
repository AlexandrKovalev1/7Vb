import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button, Card, Table } from '@/components'
import { productsThunks, selectAvailableUsers } from '@/slices/products/model/productsSlice'
import { AvailableUser } from '@/slices/products/products.types'

export const AvailableUsers = () => {
  const availableUsers = useAppSelector(selectAvailableUsers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(productsThunks.fetchAvailableUsers())
  }, [dispatch])

  return (
    <Table
      buttonTitle={'Add User'}
      heading={'Users'}
      params={['Id', 'Username', '']}
      variant={'users'}
    >
      {availableUsers?.map(user => (
        <AdminAvailableUserItem id={user.id} key={user.id} username={user.username} />
      ))}
    </Table>
  )
}

type AdminAvailableUserItemProps = AvailableUser

const AdminAvailableUserItem = ({ id, username }: AdminAvailableUserItemProps) => {
  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>{id}</td>
      <td>{username}</td>
      <td>
        <Button variant={'table'}>Delete</Button>
      </td>
    </Card>
  )
}
