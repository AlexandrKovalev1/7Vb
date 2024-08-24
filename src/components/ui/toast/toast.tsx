import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { useAppSelector } from '@/app/store/store'
import { selectErrorApp, selectMessageApp } from '@/slices/app/model/appSlice'

import s from './toast.module.scss'

export const Toast = () => {
  const message = useAppSelector(selectMessageApp)
  const error = useAppSelector(selectErrorApp)

  useEffect(() => {
    if (message) {
      toast.success(message)
    }

    if (error) {
      toast.error(error)
    }
  }, [message, error])

  return <ToastContainer position={'bottom-left'} toastClassName={s.toast} />
}
