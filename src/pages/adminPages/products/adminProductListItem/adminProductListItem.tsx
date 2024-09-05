import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch } from '@/app/store/store'
import { Button, Card } from '@/components'
import { productsThunks } from '@/slices/products/model/productsSlice'
import { ProductItem } from '@/slices/products/products.types'

import s from './adminProductListItem.module.scss'

type AdminProductItemProps = Pick<ProductItem, 'id' | 'name' | 'type'>

export const AdminProductListItem = ({ id, name, type }: AdminProductItemProps) => {
  const dispatch = useAppDispatch()
  const onDeleteHandler = () => {
    dispatch(productsThunks.deleteProduct(id))
  }

  return (
    <Card as={'tr'} className={s.listItemWrapper}>
      <td>{id}</td>
      <td>{name}</td>
      <td className={s.type}>{type}</td>
      <td>
        <Button
          as={Link}
          style={{ marginRight: '10px' }}
          to={`${PATH.ADMIN_PRODUCTS_EDIT_PRODUCT}/${id}`}
          variant={'table'}
        >
          Edit
        </Button>
        <Button onClick={onDeleteHandler} variant={'table'}>
          Delete
        </Button>
      </td>
    </Card>
  )
}
