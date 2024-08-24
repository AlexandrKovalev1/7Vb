import { useAppSelector } from '@/app/store/store'
import { selectStatus } from '@/slices/app/model/appSlice'

import s from './linearProgress.module.scss'
export const LinearProgress = () => {
  const status = useAppSelector(selectStatus)

  return <>{status === 'loading' && <progress className={s.progress}></progress>}</>
}
