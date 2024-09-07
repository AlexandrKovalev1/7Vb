import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'

import s from './dialogContent.module.scss'

type Props = {
  children?: ReactNode
  description?: string
  title?: string
}

export const DialogContent = ({ children, description, title }: Props) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={s.dialogOverlay} />
      <Dialog.Content className={s.dialogContent}>
        <Dialog.Title className={s.dialogTitle}>{title}</Dialog.Title>
        <Dialog.Description className={s.dialogDescription}>{description}</Dialog.Description>
        {children}
        <Dialog.Close asChild>
          <button aria-label={'Close'} className={s.iconButton}>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
