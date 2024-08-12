import { useAppSelector } from '@/app/store/store'
import { Button, Card, Option, Select, TextField } from '@/components'
import { selectDeviceType } from '@/slices/app/model/appSlice'
import clsx from 'clsx'

import s from './support.module.scss'

const typeOptions: Option[] = [
  { label: 'Text', value: 'text' },
  { label: 'Number', value: 'number' },
  { label: 'Boolean', value: 'boolean' },
  { label: 'Date', value: 'date' },
]
const problemOptions: Option[] = [
  { label: 'Text', value: 'text' },
  { label: 'Number', value: 'number' },
  { label: 'Boolean', value: 'boolean' },
  { label: 'Date', value: 'date' },
]

export const Support = () => {
  const deviceType = useAppSelector(selectDeviceType)

  const classNames = {
    inputs: clsx(s.inputsBlock, deviceType === 'mobile' && s.mobile),
    wrapper: clsx(s.wrapper, deviceType === 'mobile' && s.mobile),
  }

  return (
    <div className={classNames.wrapper}>
      <Card className={classNames.inputs}>
        <TextField label={'Name'} type={'search'} />
        <Select label={'Type'} options={typeOptions} />
        <Select label={'Where Problem'} options={problemOptions} />
      </Card>
      <Card className={s.problemsBlock}>
        <textarea className={s.problemsField} />
        <Button className={s.button}>Send</Button>
      </Card>
    </div>
  )
}
