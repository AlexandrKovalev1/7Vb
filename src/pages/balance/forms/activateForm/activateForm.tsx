import { useState } from 'react'

import { Button, Card } from '@/components'
import { Checkbox } from '@/components/ui/checkbox'
import { TextField } from '@/components/ui/text-field/text-field'

import s from '../forms.module.scss'

export const ActivateForm = () => {
  const [checked, setChecked] = useState(false)

  return (
    <Card as={'form'} className={s.card}>
      <h3>Activate Key</h3>
      <div className={s.inputsBlock}>
        <TextField label={'Key'} name={'key'} placeholder={'Enter key'} />
        <Checkbox
          checked={checked}
          label={
            'I understand and take full responsibility for this translation in accordance with the rules of this site'
          }
          name={'checkbox'}
          onChange={setChecked}
        />
      </div>
      <Button className={s.button} disabled={!checked}>
        Activate
      </Button>
    </Card>
  )
}
