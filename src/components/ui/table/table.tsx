import { ReactNode } from 'react'

import { Button } from '@/components'

import s from './table.module.scss'

type Props = {
  buttonTitle: string
  children?: ReactNode
  heading: string
  onClickCallback?: () => void
  params: string[]
  variant?: 'products' | 'support' | 'users'
}
export const Table = ({
  buttonTitle,
  children,
  heading,
  onClickCallback,
  params,
  variant,
}: Props) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <td style={{ color: 'var(--color-dark-accent-1)' }}>{heading}</td>
          <td></td>
          {variant !== 'users' && <td></td>}
          <td>
            <Button onClick={onClickCallback} variant={'table'}>
              {buttonTitle}
            </Button>
          </td>
        </tr>
        <tr>{params?.map((i, index) => <td key={index}>{i}</td>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
