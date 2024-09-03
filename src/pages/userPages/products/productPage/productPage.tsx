import { useEffect } from 'react'

import { Card } from '@/components'
import { useProduct } from '@/pages/userPages/products/productPage/useProduct'

import s from './productPage.module.scss'

import { PurchaseBlock } from './purchaseBlock'

export const ProductPage = () => {
  const { product } = useProduct()

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [])

  return (
    <div className={s.wrapper}>
      <Card className={s.coverBlock}>
        <img alt={'coverImg'} className={s.cover} src={product?.imageUrl} />
      </Card>
      <Card className={s.heading}>
        <h2>{product?.name}</h2>
        <span>{product?.type}</span>
      </Card>
      <PurchaseBlock />
      <Card className={s.description}>{product?.description}</Card>
    </div>
  )
}
