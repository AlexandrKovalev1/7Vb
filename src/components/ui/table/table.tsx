import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components'

import s from './table.module.scss'

type Props = {
  buttonTitle: string
  children?: ReactNode
  dialog?: ReactNode
  heading: string
  params: string[]
  pathLink?: string
  rounded?: boolean
  variant?: 'products' | 'subs' | 'support' | 'users'
}
export const Table = ({
  buttonTitle,
  children,
  dialog,
  heading,
  params,
  pathLink,
  rounded = false,
  variant,
}: Props) => {
  return (
    <table className={`${s.table} ${rounded && s.rounded}`}>
      <thead className={s.tableHead}>
        <tr>
          <td style={{ color: 'var(--color-dark-accent-1)' }}>{heading}</td>
          <td></td>
          {variant !== 'users' && <td></td>}
          <td>
            {dialog ? (
              dialog
            ) : (
              <Button as={Link} to={pathLink || '/'} variant={'table'}>
                {buttonTitle}
              </Button>
            )}
          </td>
        </tr>
        <tr>{params?.map((i, index) => <td key={index}>{i}</td>)}</tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
