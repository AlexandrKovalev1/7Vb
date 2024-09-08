import { useNavigate } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch } from '@/app/store/store'
import { Button, Card, Checkbox, Select, TextField } from '@/components'
import { productsThunks } from '@/slices/products/model/productsSlice'
import {
  AddOrEditProductOptions,
  ProductStatus,
  ProductType,
} from '@/slices/products/products.types'
import { useFormik } from 'formik'

import s from './productForm.module.scss'

type Props = {
  GoogleDriveFileID?: string
  availableToAll?: boolean
  description?: string
  id?: string
  imageUrl?: string
  name?: string
  status?: ProductStatus
  type?: ProductType
  variant?: 'add' | 'edit'
}

export const ProductForm = ({
  GoogleDriveFileID,
  availableToAll,
  description,
  id,
  imageUrl,
  name,
  status,
  type,
  variant = 'add',
}: Props) => {
  const addInit = {
    GoogleDriveFileID: '',
    availableToAll: false,
    description: '',
    imageUrl:
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374',
    name: '',
    status: '' as ProductStatus,
    type: '' as ProductType,
  }

  const editInit = {
    GoogleDriveFileID,
    availableToAll,
    description,
    imageUrl,
    name,
    status,
    type,
  }

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
  const selectTypeOptions = [
    {
      label: 'Alpha',
      value: 'Alpha',
    },
    {
      label: 'Beta',
      value: 'Beta',
    },
    {
      label: 'Stable',
      value: 'Stable',
    },
  ]

  const formik = useFormik({
    initialValues: variant === 'add' ? addInit : editInit,
    onSubmit: values => {
      if (variant === 'add') {
        dispatch(productsThunks.addProduct(values as AddOrEditProductOptions))
          .unwrap()
          .then(() => navigate(PATH.PRODUCTS))
      } else {
        dispatch(
          productsThunks.editProduct({
            id: id as string,
            options: values as AddOrEditProductOptions,
          })
        )
          .unwrap()
          .then(() => navigate(PATH.PRODUCTS))
      }
    },
  })

  return (
    <Card as={'form'} className={s.form} onSubmit={formik.handleSubmit}>
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
          defaultValue={status}
          onValueChange={v => formik.setFieldValue('status', v)}
          options={selectStatusOptions}
          placeholder={'Select status'}
        />
      </div>
      <div className={s.textFieldWrapper}>
        <label>Type</label>
        <Select
          defaultValue={type}
          onValueChange={v => formik.setFieldValue('type', v)}
          options={selectTypeOptions}
          placeholder={'Select type'}
        />
      </div>
      <div className={s.textFieldWrapper}>
        <label htmlFor={'GoogleDriveFileID'}>GoogleDriveFileID</label>
        <TextField id={'GoogleDriveFileID'} {...formik.getFieldProps('GoogleDriveFileID')} />
      </div>
      <div className={s.textFieldWrapper}>
        <label htmlFor={'imageUrl'}>ImageUrl</label>
        <TextField id={'imageUrl'} {...formik.getFieldProps('imageUrl')} />
      </div>
      {variant === 'edit' && (
        <div className={s.textFieldWrapper}>
          <label htmlFor={'checkbox'}>AvailableToAll</label>
          <Checkbox
            checked={formik.values.availableToAll}
            className={s.checkbox}
            id={'checkbox'}
            onChange={v => formik.setFieldValue('availableToAll', v)}
          />
        </div>
      )}
      <div className={s.buttonWrapper}>
        <Button type={'submit'}>{variant === 'add' ? 'Add' : 'Edit'}</Button>
      </div>
    </Card>
  )
}
