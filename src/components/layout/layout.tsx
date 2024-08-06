import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Sidebar } from '@/components'
import { Header } from '@/components/layout/header'
import { selectDeviceType } from '@/slices/app/model/appSlice'
import { selectIsAuth } from '@/slices/auth/model/authSlice'
import { useSetDeviceType } from '@/utils/useSetDeviceType'
import clsx from 'clsx'

import s from './layout.module.scss'

export const Layout = () => {
  useSetDeviceType()
  const deviceType = useSelector(selectDeviceType)
  const isAuth = useSelector(selectIsAuth)
  const desktopMode = isAuth && deviceType === 'desktop'

  const classNames = {
    layout: clsx(s.layout, isAuth && s.auth),
    main: clsx(s.main, s[deviceType], isAuth && s.auth),
  }

  return (
    <div className={classNames.layout}>
      <Header isLoggedIn={isAuth} />
      {desktopMode && <Sidebar />}
      <main className={classNames.main}>
        <Outlet />
      </main>
    </div>
  )
}

// import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
//
// import { Sidebar } from '@/components'
// import { Header } from '@/components/layout/header'
//
// type Props = ComponentPropsWithoutRef<'div'>
//
// export const Layout = forwardRef<ElementRef<'div'>, Props>(
//   ({ children, className, ...rest }, ref) => {
//     // const classes =
//     return (
//       <div {...rest} ref={ref}>
//         <Header />
//         {desktopMode && <Sidebar />}
//         {children}
//       </div>
//     )
//   }
// )
//
// import { ReactNode } from 'react'
// import { Outlet, useOutletContext } from 'react-router-dom'
//
// import { Header, HeaderProps, Spinner } from '@/components'
// import { useMeQuery } from '@/services/auth/auth.service'
//
// import s from './layout.module.scss'
//
// type AuthContext = {
//   isAuthenticated: boolean
// }
//
// export function useAuthContext() {
//   return useOutletContext<AuthContext>()
// }
//
// export const Layout = () => {
//   const { data, isError, isLoading } = useMeQuery()
//   const isAuthenticated = !isError && !isLoading
//
//   if (isLoading) {
//     return <Spinner fullScreen />
//   }
//
//   return (
//     <LayoutPrimitive
//       avatar={data?.avatar ?? null}
//       email={data?.email ?? ''}
//       isLoggedIn={isAuthenticated}
//       onLogout={() => {}}
//       userName={data?.name ?? ''}
//     >
//       <Outlet context={{ isAuthenticated } satisfies AuthContext} />
//     </LayoutPrimitive>
//   )
// }
//
// export type LayoutPrimitiveProps = { children: ReactNode } & HeaderProps
//
// export const LayoutPrimitive = ({ children, ...headerProps }: LayoutPrimitiveProps) => {
//   return (
//     <div className={s.layout}>
//       <Header {...headerProps} />
//       <div className={s.content}>{children}</div>
//     </div>
//   )
// }
