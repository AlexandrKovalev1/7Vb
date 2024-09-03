import { ReactNode } from 'react'

import { Card } from '@/components'

import s from './adminTableNav.module.scss'

type Props = {
  children: ReactNode
}

export const AdminTableNav = ({ children }: Props) => {
  return (
    <Card className={s.wrapper}>
      <nav>{children}</nav>
    </Card>
  )
}

export const classNameHandler = ({ isActive }: { isActive: boolean }) => {
  return isActive ? s.active : undefined
}
