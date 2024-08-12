import { useAppSelector } from '@/app/store/store'
import { ProductCard } from '@/components/ui/productCard'
import { selectProducts } from '@/slices/products/model/productsSlice'

import s from './productPage.module.scss'

export const ProductsPage = () => {
  const products = useAppSelector(selectProducts)

  return (
    <div className={s.productsContent}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
