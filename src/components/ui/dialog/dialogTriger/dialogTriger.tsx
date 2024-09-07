import { Button } from '@/components'
import * as DialogRadix from '@radix-ui/react-dialog'

type Props = {
  triggerTitle?: string
}
export const DialogTriger = ({ triggerTitle }: Props) => {
  return (
    <DialogRadix.Trigger asChild>
      <Button as={'button'} variant={'table'}>
        {triggerTitle}
      </Button>
    </DialogRadix.Trigger>
  )
}
