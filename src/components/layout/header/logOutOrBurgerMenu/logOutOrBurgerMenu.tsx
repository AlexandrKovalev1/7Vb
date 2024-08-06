import { useSelector } from 'react-redux'

import { BurgerMenu } from '@/components/layout/header/burgerMenu/burgerMenu'
import { selectDeviceType } from '@/slices/app/model/appSlice'

export const LogOutOrBurgerMenu = () => {
  const deviceType = useSelector(selectDeviceType)
  const mobileMode = deviceType === 'mobile'

  return mobileMode ? <BurgerMenu /> : <div>log out</div>
}
