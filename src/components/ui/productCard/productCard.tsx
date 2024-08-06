import { Link } from 'react-router-dom'

import { Button, Card } from '@/components'
import { Product } from '@/slices/products/products.types'

import s from './productCard.module.scss'

type Props = {
  product: Product
}
export const ProductCard = ({ product }: Props) => {
  const { Title, Type, cover, daysLeft, id, subscribeStatus } = product

  const statusClass = subscribeStatus.toLowerCase().split(' ').join('')

  return (
    <Card className={s.cardWrapper}>
      <Link to={`${Title}/${id}`}>
        <img alt={'cover-product'} className={s.cardCover} src={cover} />
      </Link>
      <div className={s.blockInfo}>
        <h2>{Title}</h2>
        <h3>{Type}</h3>

        <div className={`${s.subscribeStatus} ${s[statusClass]}`}>
          Subscribe status:{<span> {subscribeStatus}</span>}
        </div>
        {subscribeStatus !== 'None active' && <span>Days left:{daysLeft} days</span>}
      </div>
      <Button as={Link} className={s.buttonBuy} to={`${Title}/${id}`} variant={'link'}>
        Buy
      </Button>
    </Card>
  )
}
