import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '@/app/store/store'
import { Button, Card, Checkbox, Select, TextField } from '@/components'
import { productsThunks } from '@/slices/products/model/productsSlice'
import { useFormik } from 'formik'

import s from './addProduct.module.scss'

export const AddProduct = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const selectStatusOptions = [
    {
      label: 'Active',
      value: 'Active',
    },
    {
      label: 'NotActive',
      value: 'NotActive',
    },
    {
      label: 'OnUpdate',
      value: 'OnUpdate',
    },
  ]

  const formik = useFormik({
    initialValues: {
      allowedUsers: [],
      availableToAll: true,
      description: '',
      imageUrl:
        'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374',
      name: '',
      status: '',
    },
    onSubmit: values => {
      dispatch(productsThunks.addProduct(values))
        .unwrap()
        .then(() => navigate(-1))
    },
  })

  return (
    <div>
      <Card className={s.card}>
        <div className={s.buttonBackWrapper}>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </div>
        <form className={s.form} onSubmit={formik.handleSubmit}>
          <div className={s.textFieldWrapper}>
            <label htmlFor={'name'}>Name</label>
            <TextField id={'name'} {...formik.getFieldProps('name')} />
          </div>
          <div className={s.textFieldWrapper}>
            <label htmlFor={'description'}>Description</label>
            <textarea
              className={s.description}
              id={'description'}
              {...formik.getFieldProps('description')}
            />
          </div>
          <div className={s.textFieldWrapper}>
            <label>Status</label>
            <Select
              onValueChange={v => formik.setFieldValue('status', v)}
              options={selectStatusOptions}
              placeholder={'Select status'}
            />
          </div>
          <div className={s.textFieldWrapper}>
            <label htmlFor={'imageUrl'}>ImageUrl</label>
            <TextField id={'imageUrl'} {...formik.getFieldProps('imageUrl')} />
          </div>
          <div className={s.textFieldWrapper}>
            <label htmlFor={'checkbox'}>AvailableToAll</label>
            <Checkbox
              checked={formik.values.availableToAll}
              className={s.checkbox}
              id={'checkbox'}
              onChange={v => formik.setFieldValue('availableToAll', v)}
            />
          </div>
          <div className={s.textFieldWrapper}>
            <label htmlFor={'allowedUsers'}>AllowedUsers</label>
            <TextField
              id={'allowedUsers'}
              onChange={e => formik.setFieldValue('allowedUsers', `[${e.currentTarget.value}]`)}
              placeholder={'передай id через, типо 1,2,3...'}
            />
          </div>
          <div className={s.buttonWrapper}>
            <Button type={'submit'}>Add</Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
