import { Link, Navigate } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button, Card, TextField } from '@/components'
import { selectMessageApp } from '@/slices/app/model/appSlice'
import { showErrorMessage } from '@/slices/auth/lib/showErrorMessage'
import { signUpValidate } from '@/slices/auth/lib/signUpValidate'
import { register } from '@/slices/auth/model/authSlice'
import { useFormik } from 'formik'

import s from './signUp.module.scss'

export const SignUp = () => {
  const message = useAppSelector(selectMessageApp)
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      confirmPassword: '',
      email: '',
      password: '',
      username: '',
    },
    onSubmit: values => {
      dispatch(register(values)).unwrap()
    },
    validate: signUpValidate,
  })

  if (message === 'Register successed') {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <div className={s.wrapper}>
      <Card as={'form'} className={s.signInBlock} onSubmit={formik.handleSubmit}>
        <div className={s.container}>
          <h2>Log in</h2>
          <div className={s.inputsBlock}>
            <TextField
              autoComplete={'off'}
              errorMessage={showErrorMessage(formik, 'username')}
              label={'Login'}
              placeholder={'Enter login'}
              variant={'login'}
              {...formik.getFieldProps('username')}
            />

            <TextField
              autoComplete={'off'}
              errorMessage={showErrorMessage(formik, 'password')}
              label={'Password'}
              placeholder={'Enter password'}
              variant={'login'}
              {...formik.getFieldProps('password')}
            />
            <TextField
              autoComplete={'off'}
              errorMessage={showErrorMessage(formik, 'confirmPassword')}
              label={'Confirm password'}
              placeholder={'Enter password again'}
              variant={'login'}
              {...formik.getFieldProps('confirmPassword')}
            />
            <TextField
              autoComplete={'off'}
              errorMessage={showErrorMessage(formik, 'email')}
              label={'Email'}
              placeholder={'Enter email'}
              variant={'login'}
              {...formik.getFieldProps('email')}
            />
            <Button className={s.button} disabled={!!Object.keys(formik.errors).length}>
              Sign Up
            </Button>
          </div>
          <small>
            Have an account?{' '}
            <Button
              as={Link}
              className={s.buttonLink}
              to={PATH.LOGIN}
              type={'button'}
              variant={'link'}
            >
              Sign in
            </Button>
          </small>
        </div>
      </Card>
    </div>
  )
}
