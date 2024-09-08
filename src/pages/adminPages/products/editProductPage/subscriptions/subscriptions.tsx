import { useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button, Card, Table } from '@/components'
import { AddSub } from '@/pages/adminPages/products/editProductPage/subscriptions/addSub'
import { productsThunks, selectAvailableSubscriptions } from '@/slices/products/model/productsSlice'
import { AvailableSubscription } from '@/slices/products/products.types'

export const Subscriptions = () => {
  const id = useOutletContext<string>()
  const availableSubscriptions = useAppSelector(selectAvailableSubscriptions)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(productsThunks.fetchAvailableSubscriptions(+id))
  }, [dispatch])

  return (
    <Table
      buttonTitle={'Add Sub'}
      dialog={<AddSub id={+id} />}
      heading={'Subs'}
      params={['Id', 'Time', 'Price', '']}
    >
      {availableSubscriptions?.map(subs => (
        <AdminSubscriptionItem id={subs.id} key={subs.id} price={subs.price} time={subs.time} />
      ))}
    </Table>
  )
}

type Props = Partial<AvailableSubscription>
const AdminSubscriptionItem = ({ id, price, time }: Props) => {
  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>{id}</td>
      <td>{time}</td>
      <td>{price}</td>
      <td>
        <Button as={Link} style={{ marginRight: '10px' }} to={''} variant={'table'}>
          Edit
        </Button>
        <Button variant={'table'}>Delete</Button>
      </td>
    </Card>
  )
}
