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
        <Button variant={'table'}>Edit</Button>
      </td>
    </Card>
  )
}
