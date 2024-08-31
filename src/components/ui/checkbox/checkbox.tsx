import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

type Props = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  name?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({ checked, className, disabled, id, label, name, onChange }: Props) => {
  return (
    <label className={`${s.label} ${disabled && s.disabled} ${className}`}>
      <CheckboxRadix.Root
        checked={checked}
        className={s.checkboxRoot}
        defaultChecked
        disabled={disabled}
        id={id}
        name={name}
        onCheckedChange={onChange}
      >
        <CheckboxRadix.Indicator className={s.checkboxIndicator}>
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label}
    </label>
  )
}
