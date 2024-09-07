import { ComponentPropsWithoutRef } from 'react'

import { Button } from '@/components'

type Props = {} & ComponentPropsWithoutRef<'form'>
export const DialogForm = ({ children, ...props }: Props) => {
  return (
    <form {...props}>
      {children}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 25 }}>
        <Button type={'submit'} variant={'table'}>
          Add
        </Button>
      </div>
    </form>
  )
}
