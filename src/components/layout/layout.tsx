import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/store/store'
import { Toast } from '@/components'
import { Header } from '@/components/layout/header'
import { selectDeviceType } from '@/slices/app/model/appSlice'
import { me, selectIsAdmin, selectIsAuth } from '@/slices/auth/model/authSlice'
import { useSetDeviceType } from '@/utils/useSetDeviceType'
import clsx from 'clsx'

import 'react-toastify/dist/ReactToastify.css'

import s from './layout.module.scss'

import { Sidebar } from './sidebar/sidebar'

export const Layout = () => {
  useSetDeviceType()
  const deviceType = useSelector(selectDeviceType)
  const isAuth = useSelector(selectIsAuth)
  const desktopMode = isAuth && deviceType === 'desktop'
  const isAdmin = useAppSelector(selectIsAdmin)

  const classNames = {
    layout: clsx(s.layout, isAuth && s.auth),
    main: clsx(s.main, s[deviceType], isAuth && s.auth),
  }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(me())
  }, [])

  return (
    <div className={classNames.layout}>
      <Header isLoggedIn={isAuth} />
      {desktopMode && <Sidebar isAdmin={isAdmin} />}
      <main className={classNames.main}>
        <div className={s.container}>
          <Outlet context={{ isAdmin: isAdmin }} />
          <Toast />
        </div>
      </main>
    </div>
  )
}
