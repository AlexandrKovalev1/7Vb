import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components'

import s from './table.module.scss'

type Props = {
  buttonTitle: string
  children?: ReactNode
  heading: string
  params: string[]
  pathLink?: string
  variant?: 'products' | 'support' | 'users'
}
export const Table = ({ buttonTitle, children, heading, params, pathLink, variant }: Props) => {
  return (
    <table className={s.table}>
      <thead className={s.tableHead}>
        <tr>
          <td style={{ color: 'var(--color-dark-accent-1)' }}>{heading}</td>
          <td></td>
          {variant !== 'users' && <td></td>}
          <td>
            <Button as={Link} to={pathLink || '/'} variant={'table'}>
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
