import { SignUpValues } from '@/slices/auth/api/authApi'

export const signUpValidate = (values: SignUpValues) => {
  const errors: Partial<SignUpValues> = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  } else if (values.email.length > 15) {
    errors.email = 'Must be 15 characters or less'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 15) {
    errors.password = 'Must be 15 characters or less'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  } else if (!values.password && values.confirmPassword) {
    errors.confirmPassword = 'Enter your password first'
    // } else if (values.confirmPassword && values.confirmPassword !== values.password) {
    //   errors.confirmPassword = "Passwords don't match,"
  } else if (values.confirmPassword.length > 15) {
    errors.confirmPassword = 'Must be 15 characters or less'
  }

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }

  return errors
}
