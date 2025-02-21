import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Card } from '@/components'
import { useProduct } from '@/pages/userPages/products/productPage/useProduct'
import { productsThunks, selectAvailableSubscriptions } from '@/slices/products/model/productsSlice'

import s from './productPage.module.scss'

import { PurchaseBlock } from './purchaseBlock'

export const ProductPage = () => {
  const { product } = useProduct()

  const { id: idProduct } = useParams()

  const availableSubscriptions = useAppSelector(selectAvailableSubscriptions)

  const dispatch = useAppDispatch()

  useEffect(() => {
    idProduct && dispatch(productsThunks.fetchAvailableSubscriptions(+idProduct))
  }, [dispatch, idProduct])

  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }, [])

  console.log(availableSubscriptions)

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
