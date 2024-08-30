import { Link } from 'react-router-dom'

import { Button, Card } from '@/components'
import { ProductItem } from '@/slices/products/products.types'

import s from './productCard.module.scss'

type Props = {
  product: ProductItem
}
export const ProductCard = ({ product }: Props) => {
  const { hasSubscription, id, imageUrl, name, remainingTime, status } = product

  const statusClass = status.toLowerCase().split(' ').join('')

  return (
    <Card className={s.cardWrapper}>
      <Link to={`${name}/${id}`}>
        <img alt={'cover-product'} className={s.cardCover} src={imageUrl} />
      </Link>
      <div className={s.blockInfo}>
        <h2>{name}</h2>
        <h3>{'Type'}</h3>

        <div className={`${s.subscribeStatus} ${s[statusClass]}`}>
          Subscribe status:{<span> {status}</span>}
        </div>
        {hasSubscription && <span>Days left:{remainingTime}</span>}
      </div>
      <Button as={Link} className={s.buttonBuy} to={`${name}/${id}`} variant={'primary'}>
        Download
      </Button>
    </Card>
  )
}
