import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectDeviceType, setDeviceType } from '@/slices/app/model/appSlice'

export const useSetDeviceType = () => {
  const deviceType = useSelector(selectDeviceType)
  const dispatch = useDispatch()
  const mobileWidth = 768

  useEffect(() => {
    if (window.innerWidth <= mobileWidth && deviceType !== 'mobile') {
      dispatch(setDeviceType({ deviceType: 'mobile' }))
    }
    if (window.innerWidth > mobileWidth && deviceType !== 'desktop') {
      dispatch(setDeviceType({ deviceType: 'desktop' }))
    }
    const handleWindowResize = () => {
      if (window.innerWidth <= mobileWidth && deviceType !== 'mobile') {
        dispatch(setDeviceType({ deviceType: 'mobile' }))
      }
      if (window.innerWidth > mobileWidth && deviceType !== 'desktop') {
        dispatch(setDeviceType({ deviceType: 'desktop' }))
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [deviceType, dispatch])
}
