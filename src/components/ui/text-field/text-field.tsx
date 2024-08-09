import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Icon } from '@/components/ui/icon'
import { clsx } from 'clsx'

import s from './text-field.module.scss'

export type TextFieldProps = {
  clearField?: () => void
  errorMessage?: string
  label?: string
  type?: 'password' | 'search' | 'text'
  variant?: 'login' | 'primary'
} & ComponentPropsWithoutRef<'input'>

type PropsType = Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps> & TextFieldProps

export const TextField = forwardRef<HTMLInputElement, PropsType>(
  (
    { className, clearField, errorMessage, label, type = 'text', variant = 'primary', ...rest },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPasswordType = type === 'password'

    const isSearchType = type === 'search'

    const displayClearButton = isSearchType && clearField && rest.value

    const finalType = getFinalType(type, showPassword)

    const passwordHandler = () => setShowPassword(prev => !prev)

    const classes = {
      input: clsx(
        s.input,
        isSearchType && s.search,
        errorMessage && s.error,
        variant === 'login' && s.login
      ),
      label: clsx(s.label, rest.disabled && s.disabled),
      root: clsx(s.root, className),
      searchIcon: clsx(s.searchIcon, rest.disabled && s.disabledIcon),
    }

    return (
      <div className={classes.root}>
        <span>
          {label && <span className={s.label}>{label}</span>}
          <div className={s.container}>
            <input
              className={classes.input}
              ref={ref}
              type={isPasswordType ? finalType : 'text'}
              {...rest}
            />
            {isPasswordType && (
              <button
                className={s.button}
                disabled={rest.disabled}
                onClick={passwordHandler}
                type={'button'}
              >
                {showPassword ? <Icon name={'eyeOff'} /> : <Icon name={'eye'} />}
              </button>
            )}
            {isSearchType && (
              <Icon className={classes.searchIcon} height={20} name={'search'} width={20} />
            )}
            {displayClearButton && (
              <button
                className={s.button}
                disabled={rest.disabled}
                onClick={clearField}
                type={'button'}
              >
                <Icon height={16} name={'cross'} width={16} />
              </button>
            )}
          </div>
        </span>
        {!!errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
      </div>
    )
  }
)

function getFinalType(type: TextFieldProps['type'], showPassword: boolean) {
  if (type === 'password' && !showPassword) {
    return 'password'
  }

  return 'text'
}
