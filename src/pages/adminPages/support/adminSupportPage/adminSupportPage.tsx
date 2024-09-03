import { useAppSelector } from '@/app/store/store'
import { Card, Table } from '@/components'
import { AdminSupportPreviewItem } from '@/pages/adminPages/support'
import { selectMessages } from '@/slices/supportMessages/model/supportSlice'

import s from './adminSupportPage.module.scss'

export const AdminSupportPage = () => {
  const messages = useAppSelector(selectMessages)

  return (
    <div className={s.wrapper}>
      <Card as={'p'} className={s.descriptionPage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate facere fuga harum
        ipsam laboriosam mollitia neque quibusdam ratione rerum sint tenetur, velit. Blanditiis est
        hic natus porro? Asperiores, laboriosam?
      </Card>
      <Table
        buttonTitle={'Create Ticket'}
        heading={'Your tickets'}
        params={['Id', 'Description', 'Status', '']}
        rounded
      >
        {messages?.map(dialog => (
          <AdminSupportPreviewItem
            description={dialog.messages?.[0].content}
            id={dialog.id}
            key={dialog.id}
            status={dialog.status}
          />
        ))}
      </Table>
    </div>
  )
}
