import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button } from '@/components'
import { logOut, selectIsAuth } from '@/slices/auth/model/authSlice'

export const LoginOrLogOut = () => {
  const isAuth = useAppSelector(selectIsAuth)
  const dispatch = useAppDispatch()

  const onLogOutHandler = () => {
    dispatch(logOut())
  }

  return (
    <>
      {isAuth ? (
        <Button onClick={onLogOutHandler} variant={'link'}>
          Log out
        </Button>
      ) : (
        <Button as={Link} to={PATH.LOGIN} variant={'link'}>
          log in
        </Button>
      )}
    </>
  )
}
