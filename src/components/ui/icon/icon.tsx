import { ComponentPropsWithoutRef } from 'react'

import sprite from '@/assets/img/icons-sprite.svg'

type IconProps = {
  height?: number
  name: string
  width?: number
} & ComponentPropsWithoutRef<'svg'>

export const Icon = ({ height = 24, name, width = 24, ...rest }: IconProps) => {
  return (
    <svg {...rest} height={height} width={width}>
      <use xlinkHref={`${sprite}#${name}`} />
    </svg>
  )
}
