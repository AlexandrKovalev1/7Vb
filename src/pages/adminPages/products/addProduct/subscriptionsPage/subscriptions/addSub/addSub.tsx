import { useNavigate } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch } from '@/app/store/store'
import { Button, Card, TextField } from '@/components'
import { productsThunks } from '@/slices/products/model/productsSlice'
import { useFormik } from 'formik'

import s from './addSub.module.scss'

export const AddSub = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      hours: 0,
      price: 0,
      productId: 0,
    },
    onSubmit: values => {
      dispatch(productsThunks.createSubscriptions(values))
        .unwrap()
        .then(() => {
          navigate(-1)
        })
    },
  })

  return (
    <Card as={'form'} className={s.formWrapper} onSubmit={formik.handleSubmit}>
      <div className={s.inputWrapper}>
        <label htmlFor={'id'}>productId</label>
        <TextField
          className={s.textField}
          id={'id'}
          {...formik.getFieldProps('productId')}
          type={'number'}
        />
      </div>
      <div className={s.inputWrapper}>
        <label htmlFor={'hours'}>hours</label>
        <TextField
          className={s.textField}
          id={'hours'}
          {...formik.getFieldProps('hours')}
          type={'number'}
        />
      </div>
      <div className={s.inputWrapper}>
        <label htmlFor={'price'}>price</label>
        <TextField
          className={s.textField}
          id={'price'}
          {...formik.getFieldProps('price')}
          type={'number'}
        />
      </div>
      <Button type={'submit'}>Add</Button>
    </Card>
  )
}
