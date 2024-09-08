import { useState } from 'react'

import { useAppDispatch } from '@/app/store/store'
import { TextField } from '@/components'
import { Dialog } from '@/components/ui/dialog/dialog'
import { DialogContent } from '@/components/ui/dialog/dialogContent'
import { DialogForm } from '@/components/ui/dialog/dialogForm/dialogForm'
import { DialogTriger } from '@/components/ui/dialog/dialogTriger'
import { productsThunks } from '@/slices/products/model/productsSlice'
import { useFormik } from 'formik'

import s from './addSub.module.scss'

type Props = { id: number }

export const AddSub = ({ id }: Props) => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      hours: 0,
      price: 0,
      productId: id,
    },
    onSubmit: values => {
      dispatch(productsThunks.createSubscriptions(values))
        .unwrap()
        .then(() => {
          dispatch(productsThunks.fetchAvailableSubscriptions(id))
          setOpen(false)
        })
    },
  })

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTriger triggerTitle={'Add sub'} />
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
    // <Card as={'form'} className={s.formWrapper} onSubmit={formik.handleSubmit}>
    //   <div className={s.inputWrapper}>
    //     <label htmlFor={'id'}>productId</label>
    //     <TextField
    //       className={s.textField}
    //       id={'id'}
    //       {...formik.getFieldProps('productId')}
    //       type={'number'}
    //     />
    //   </div>
    //   <div className={s.inputWrapper}>
    //     <label htmlFor={'hours'}>hours</label>
    //     <TextField
    //       className={s.textField}
    //       id={'hours'}
    //       {...formik.getFieldProps('hours')}
    //       type={'number'}
    //     />
    //   </div>
    //   <div className={s.inputWrapper}>
    //     <label htmlFor={'price'}>price</label>
    //     <TextField
    //       className={s.textField}
    //       id={'price'}
    //       {...formik.getFieldProps('price')}
    //       type={'number'}
    //     />
    //   </div>
    //   <Button type={'submit'}>Add</Button>
    // </Card>
  )
}
