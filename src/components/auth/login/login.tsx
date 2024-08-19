import { Link, Navigate } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button, Card, TextField } from '@/components'
import { login, selectIsAuth } from '@/slices/auth/model/authSlice'
import { useFormik } from 'formik'

import s from './login.module.scss'

export const Login = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectIsAuth)

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: values => {
      dispatch(login(values))
    },
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
              name={'login'}
              onChange={formik.handleChange}
              placeholder={'Enter login'}
              value={formik.values.login}
              variant={'login'}
            />
            <TextField
              label={'Password'}
              name={'password'}
              onChange={formik.handleChange}
              placeholder={'Enter password'}
              type={'password'}
              value={formik.values.password}
              variant={'login'}
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
