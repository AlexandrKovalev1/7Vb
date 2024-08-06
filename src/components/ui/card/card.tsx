import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './card.module.scss'

export type Props<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>({ as, className, ...restProp }: Props<T>) => {
  const Component = as ?? 'div'

  const classNames = `${s.card} ${className}`

  return <Component {...restProp} className={classNames} />
}
