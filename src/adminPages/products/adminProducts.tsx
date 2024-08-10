import { useAppSelector } from '@/app/store/store'
import { Button, Card, Table } from '@/components'
import { selectProducts } from '@/slices/products/model/productsSlice'
import { Product } from '@/slices/products/products.types'

export const AdminProducts = () => {
  const products = useAppSelector(selectProducts)

  return (
    <Table buttonTitle={'Add product'} heading={'Products'} params={['Id', 'Name', 'Type', '']}>
      {products?.map(product => (
        <AdminProductItem
          Title={product.Title}
          Type={product.Type}
          id={product.id}
          key={product.id}
        />
      ))}
    </Table>
  )
}

type AdminProductItemProps = Pick<Product, 'Title' | 'Type' | 'id'>

const AdminProductItem = ({ Title, Type, id }: AdminProductItemProps) => {
  return (
    <Card
      as={'tr'}
      style={{ borderTop: '10px solid var(--color-dark-primary)', lineHeight: '80px' }}
    >
      <td>{id}</td>
      <td>{Title}</td>
      <td style={{ color: 'var(--color-dark-accent-1)' }}>{Type}</td>
      <td>
        <Button variant={'table'}>Edit</Button>
      </td>
    </Card>
  )
}
