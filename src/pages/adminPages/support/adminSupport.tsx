import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from '@/app/store/store'
import { messagesThunks } from '@/slices/supportMessages/model/supportSlice'

export const AdminSupport = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(messagesThunks.fetchMessages())
  }, [])

  return (
    <>
      <Outlet />
    </>
  )
}
