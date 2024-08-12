import { useState } from 'react'

import { Button, Card } from '@/components'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field/text-field'

import s from '../forms.module.scss'

export const TransferForm = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Card className={s.card}>
      <h3>Transfer to user</h3>
      <div className={s.inputsBlock}>
        <TextField label={'Username'} placeholder={'Enter username'} />
        <TextField label={'Amount'} placeholder={'Enter replenish amount'} />
        <Checkbox
          checked={checked}
          label={
            'I understand and take full responsibility for this translation in accordance with the rules of this site'
          }
          onChange={setChecked}
        />
      </div>
      <Button className={s.button} disabled={!checked}>
        Send
      </Button>
    </Card>
  )
}
