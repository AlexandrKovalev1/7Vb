import { Card } from '@/components'
import { ActivateForm } from '@/pages/balance/forms/activateForm/activateForm'
import { BalanceForm } from '@/pages/balance/forms/balanceForm/balanceForm'
import { TransferForm } from '@/pages/balance/forms/transferForm/transferForm'

import s from './balance.module.scss'

export const Balance = () => {
  // const clasNames = {
  //   activateCard: clsx(s.card),
  //   balanceCard: clsx(s.card),
  //   transferCard: clsx(s.card),
  // }

  return (
    <div className={s.wrapper}>
      <BalanceForm />
      <TransferForm />
      <ActivateForm />
      <Card className={s.history}>
        <h2>Transfer history</h2>
      </Card>
    </div>
  )
}
