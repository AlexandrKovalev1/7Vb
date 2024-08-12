import { useSelector } from 'react-redux'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Button } from '@/components'
import { BurgerMenu } from '@/components/layout/header/burgerMenu/burgerMenu'
import { selectDeviceType } from '@/slices/app/model/appSlice'
import { logOut, selectIsAdmin } from '@/slices/auth/model/authSlice'

export const LogOutOrBurgerMenu = () => {
  const dispatch = useAppDispatch()
  const deviceType = useSelector(selectDeviceType)
  const mobileMode = deviceType === 'mobile'
  const isAdmin = useAppSelector(selectIsAdmin)

  const onLogOutHandler = () => {
    dispatch(logOut())
  }

  return mobileMode ? (
    <BurgerMenu />
  ) : (
    <div style={{ alignItems: 'center', columnGap: '20px', display: 'flex' }}>
      {isAdmin && <Button variant={'link'}>Go to user</Button>}
      <Button onClick={onLogOutHandler} variant={'link'}>
        Log out
      </Button>
    </div>
  )
}
