import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button, Card, Table } from '@/components'
import { AddUserDialog } from '@/pages/adminPages/products/editProductPage/availableUsers/addUserDialog/addUserDialog'
import { productsThunks, selectAvailableUsers } from '@/slices/products/model/productsSlice'
import AvailableUser from '@/slices/products/products.types'

export const AvailableUsers = () => {
  const id = useOutletContext<number>()

  const availableUsers = useAppSelector(selectAvailableUsers)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(productsThunks.fetchAvailableUsers(id))
  }, [dispatch])

  return (
    <Table
      buttonTitle={'Add User'}
      dialog={<AddUserDialog id={+id} />}
      heading={'Users'}
      params={['Id', 'Username', '']}
      variant={'users'}
    >
      {availableUsers?.map(user => (
        <AdminAvailableUserItem
          id={user.id}
          key={user.id}
          productId={id}
          username={user.username}
        />
      ))}
    </Table>
  )
}

type AdminAvailableUserItemProps = { productId: number } & AvailableUser

const AdminAvailableUserItem = ({ id, productId, username }: AdminAvailableUserItemProps) => {
  const dispatch = useAppDispatch()

  const onDeleteHandler = () => {
    dispatch(
      productsThunks.deleteAvailableUser({
        productId,
        userId: id,
      })
    ).then(() => dispatch(productsThunks.fetchAvailableUsers(productId)))
  }

  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>{id}</td>
      <td>{username}</td>
      <td>
        <Button onClick={onDeleteHandler} variant={'table'}>
          Delete
        </Button>
      </td>
    </Card>
  )
}
