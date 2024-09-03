import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { Button, Card } from '@/components'
import { ProductItem } from '@/slices/products/products.types'

import s from './adminProductListItem.module.scss'

type AdminProductItemProps = Pick<ProductItem, 'id' | 'name' | 'type'>

export const AdminProductListItem = ({ id, name, type }: AdminProductItemProps) => {
  return (
    <Card as={'tr'} className={s.listItemWrapper}>
      <td>{id}</td>
      <td>{name}</td>
      <td className={s.type}>{type}</td>
      <td>
        <Button as={Link} to={`${PATH.ADMIN_PRODUCTS_EDIT_PRODUCT}/${id}`} variant={'table'}>
          Edit
        </Button>
      </td>
    </Card>
  )
}
