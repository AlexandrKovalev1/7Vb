import { useState } from 'react'

import { Button, Card } from '@/components'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field/text-field'

import s from '../forms.module.scss'

export const BalanceForm = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Card className={s.card}>
      <h3>Balance: 180$</h3>
      <div className={s.inputsBlock}>
        <TextField label={'Amount'} placeholder={'Enter replenish amount'} />
        <Checkbox
          checked={checked}
          label={
            'I understand and take full responsibility for this translation in accordance with the rules of this site'
          }
          onChange={setChecked}
        />
      </div>
      <div className={s.balance_buttonsBlock}>
        <Button className={s.button} disabled={!checked}>
          Pay with System
        </Button>
        <Button className={s.button} disabled={!checked}>
          Pay with System
        </Button>
        <Button className={s.button} disabled={!checked}>
          Pay with Visa
        </Button>
        <Button className={s.button} disabled={!checked}>
          Pay with Visa
        </Button>
      </div>
    </Card>
  )
}
