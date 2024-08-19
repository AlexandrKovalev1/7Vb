import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { Button, Card, TextField } from '@/components'
import { useFormik } from 'formik'

import s from './signUp.module.scss'

export const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      confirmPassword: '',
      email: '',
      login: '',
      password: '',
    },
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <div className={s.wrapper}>
      <Card as={'form'} className={s.signInBlock} onSubmit={formik.handleSubmit}>
        <div className={s.container}>
          <h2>Log in</h2>
          <div className={s.inputsBlock}>
            <TextField
              autoComplete={'off'}
              label={'Login'}
              name={'login'}
              onChange={formik.handleChange}
              placeholder={'Enter login'}
              value={formik.values.login}
              variant={'login'}
            />
            <TextField
              autoComplete={'off'}
              label={'Password'}
              name={'password'}
              onChange={formik.handleChange}
              placeholder={'Enter password'}
              value={formik.values.password}
              variant={'login'}
            />
            <TextField
              autoComplete={'off'}
              label={'Confirm password'}
              name={'confirmPassword'}
              onChange={formik.handleChange}
              placeholder={'Enter password again'}
              value={formik.values.confirmPassword}
              variant={'login'}
            />
            <TextField
              autoComplete={'off'}
              label={'Email'}
              name={'email'}
              onChange={formik.handleChange}
              placeholder={'Enter email'}
              value={formik.values.email}
              variant={'login'}
            />
            <Button className={s.button}>Sign Up</Button>
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
