import { useState } from 'react'
import { Link } from 'react-router-dom'

import { sliderMarks } from '@/common/data/prevData'
import { Button, Card } from '@/components'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'

import s from './purchaseBlock.module.scss'

export const PurchaseBlock = () => {
  const [price, setPrice] = useState(28)

  const handleOnSliderChange = (_, value: number | number[]) => {
    if (typeof value === 'number') {
      setPrice(2 * value)
    }
  }

  return (
    <Card className={s.wrapper}>
      <h3>Buy</h3>
      <Slider
        defaultValue={sliderMarks[0].value}
        marks={sliderMarks}
        max={185}
        min={0}
        onChange={handleOnSliderChange}
      />
      <span className={s.price}>Price {<b>{price}$</b>}</span>
      <div className={s.buttonsWrapper}>
        <Button as={Link} className={s.button} to={'/'} variant={'link'}>
          Buy
        </Button>
        <Checkbox
          label={
            'I understand and take full responsibility for this translation in accordance with the'
          }
        />
      </div>
    </Card>
  )
}
