import { useState } from 'react'

import { useAppDispatch } from '@/app/store/store'
import { TextField } from '@/components'
import { Dialog } from '@/components/ui/dialog/dialog'
import { DialogContent } from '@/components/ui/dialog/dialogContent'
import { DialogForm } from '@/components/ui/dialog/dialogForm/dialogForm'
import { DialogTriger } from '@/components/ui/dialog/dialogTriger'
import { productsThunks } from '@/slices/products/model/productsSlice'
import { useFormik } from 'formik'

import s from './subForm.module.scss'

type Props = { id: number; price?: number; subId?: number; time?: number; variant?: 'add' | 'edit' }

export const SubForm = ({ id, price = 0, subId = 0, time = 0, variant = 'add' }: Props) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const addValues = {
    hours: 0,
    price: 0,
    productId: id,
  }

  const editValues = {
    hours: time,
    price,
  }

  const initValues = variant === 'add' ? addValues : editValues

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: values => {
      if (variant === 'add') {
        dispatch(productsThunks.createSubscriptions(values as typeof addValues))
          .unwrap()
          .then(() => {
            dispatch(productsThunks.fetchAvailableSubscriptions(id))
            setOpen(false)
          })
      } else {
        dispatch(productsThunks.editSubscription({ id: subId, options: values }))
          .unwrap()
          .then(() => {
            dispatch(productsThunks.fetchAvailableSubscriptions(id))
            setOpen(false)
          })
      }
    },
  })

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTriger triggerTitle={variant === 'add' ? 'Add sub' : 'Edit'} />
      <DialogContent
        description={'Enter the count hours and price you want to add'}
        title={'Add user'}
      >
        <DialogForm onSubmit={formik.handleSubmit}>
          <fieldset className={s.fieldset}>
            <label className={s.label} htmlFor={'hours'}>
              hours
            </label>
            <TextField
              className={s.textField}
              id={'hours'}
              {...formik.getFieldProps('hours')}
              type={'number'}
            />
          </fieldset>
          <fieldset className={s.fieldset}>
            <label className={s.label} htmlFor={'price'}>
              price
            </label>
            <TextField
              className={s.textField}
              id={'price'}
              {...formik.getFieldProps('price')}
              type={'number'}
            />
          </fieldset>
        </DialogForm>
      </DialogContent>
    </Dialog>
  )
}
