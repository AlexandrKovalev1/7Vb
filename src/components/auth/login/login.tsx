import { Link, Navigate } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button, Card, TextField } from '@/components'
import { showErrorMessage } from '@/slices/auth/lib/showErrorMessage'
import { signInValidate } from '@/slices/auth/lib/signInValidate'
import { login, selectIsAuth } from '@/slices/auth/model/authSlice'
import { useFormik } from 'formik'

import s from './login.module.scss'

export const Login = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  const formik = useFormik({
    initialValues: {
      password: '',
      username: '',
    },
    onSubmit: values => {
      dispatch(login(values))
    },
    validate: signInValidate,
  })

  if (isAuth) {
    return <Navigate to={PATH.ROOT} />
  }

  return (
    <div className={s.wrapper}>
      <Card as={'form'} className={s.loginBlock} onSubmit={formik.handleSubmit}>
        <div className={s.container}>
          <h2>Log in</h2>
          <div className={s.inputsBlock}>
            <TextField
              label={'Login'}
              placeholder={'Enter login'}
              variant={'login'}
              {...formik.getFieldProps('username')}
              errorMessage={showErrorMessage(formik, 'username')}
            />
            <TextField
              label={'Password'}
              placeholder={'Enter password'}
              type={'password'}
              variant={'login'}
              {...formik.getFieldProps('password')}
              errorMessage={showErrorMessage(formik, 'password')}
            />
            <Button className={s.button}>Log in</Button>
          </div>
          <small>
            Don't have an account?{' '}
            <Button
              as={Link}
              className={s.buttonLink}
              to={PATH.SIGN_UP}
              type={'submit'}
              variant={'link'}
            >
              Registration
            </Button>
          </small>
        </div>
      </Card>
    </div>
  )
}
