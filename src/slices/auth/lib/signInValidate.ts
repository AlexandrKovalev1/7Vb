import { AuthData } from '@/slices/auth/api/authApi'

export const signInValidate = (values: AuthData) => {
  const errors: Partial<AuthData> = {}

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length > 48) {
    errors.password = 'Must be 48 characters or less'
  }

  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 48) {
    errors.username = 'Must be 48 characters or less'
  }

  return errors
}
