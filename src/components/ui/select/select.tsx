import { FC, ReactNode } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

import { Icon } from '../icon'

export type Option = {
  label: string
  value: string
}

export type SelectPropsType = {
  className?: string
  defaultValue?: any
  disabled?: boolean
  label?: string
  onValueChange?: (value: any) => void
  options: Option[]
  placeholder?: ReactNode
  required?: boolean
  small?: boolean
  value?: string
}

export const Select: FC<SelectPropsType> = ({
  className,
  defaultValue,
  disabled,
  label,
  onValueChange,
  options,
  placeholder,
  required,
  value,
}) => {
  const classes = {
    icon: clsx(s.icon, disabled && s.iconDisabled),
    item: clsx(s.item),
    label: clsx(s.label, disabled && s.labelDisabled, className),
    trigger: clsx(s.trigger, disabled && s.triggerDisabled),
  }

  return (
    <label className={classes.label}>
      {label}
      <SelectRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <SelectRadix.Trigger aria-label={'select'} asChild className={classes.trigger}>
          <button type={'button'}>
            <SelectRadix.Value placeholder={placeholder} />
            <Icon className={classes.icon} name={'arrowDown'} />
          </button>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport>
              {options.map(el => (
                <SelectRadix.Item className={classes.item} key={el.value} value={el.value}>
                  <SelectRadix.ItemText>{el.label}</SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </label>
  )
}
