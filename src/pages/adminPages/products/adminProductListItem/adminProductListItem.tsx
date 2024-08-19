import { Button, Card } from '@/components'
import { Product } from '@/slices/products/products.types'

import s from './adminProductListItem.module.scss'

type AdminProductItemProps = Pick<Product, 'Title' | 'Type' | 'id'>

export const AdminProductListItem = ({ Title, Type, id }: AdminProductItemProps) => {
  return (
    <Card as={'tr'} className={s.listItemWrapper}>
      <td>{id}</td>
      <td>{Title}</td>
      <td className={s.type}>{Type}</td>
      <td>
        <Button variant={'table'}>Edit</Button>
      </td>
    </Card>
  )
}
