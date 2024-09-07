import { useState } from 'react'

import { useAppDispatch } from '@/app/store/store'
import { TextField } from '@/components'
import { Dialog } from '@/components/ui/dialog/dialog'
import { DialogContent } from '@/components/ui/dialog/dialogContent'
import { DialogForm } from '@/components/ui/dialog/dialogForm/dialogForm'
import { DialogTriger } from '@/components/ui/dialog/dialogTriger'
import { productsThunks } from '@/slices/products/model/productsSlice'
import { useFormik } from 'formik'

import s from './addUserDialog.module.scss'

type Props = { id: number }
export const AddUserDialog = ({ id }: Props) => {
  const [open, setOpen] = useState(false)

  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      productId: id,
      userId: 0,
    },
    onSubmit: values => {
      dispatch(productsThunks.addAvailableUser(values))
        .unwrap()
        .then(() => {
          dispatch(productsThunks.fetchAvailableUsers(id))
          setOpen(false)
        })
    },
  })

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTriger triggerTitle={'Add User'} />
      <DialogContent description={'Enter the user id you want to add'} title={'Add user'}>
        <DialogForm onSubmit={formik.handleSubmit}>
          <fieldset className={s.fieldset}>
            <label className={s.label} htmlFor={'userId'}>
              userId
            </label>
            <TextField
              id={'userId'}
              onChange={formik.handleChange}
              type={'number'}
              value={formik.values.userId}
            />
          </fieldset>
        </DialogForm>
      </DialogContent>
    </Dialog>
  )
}
