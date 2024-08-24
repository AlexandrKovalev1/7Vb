import { useAppSelector } from '@/app/store/store'
import admin from '@/assets/img/admin.jpeg'
import noPhoto from '@/assets/img/noPhoto.jpeg'
import { selectUserDate } from '@/slices/auth/model/authSlice'

import s from './sidebar.module.scss'

import { Navigation } from './navigation'

type Props = {
  isAdmin?: boolean | null
  userData?: any
}

export const Sidebar = ({ isAdmin }: Props) => {
  const { balance, username } = useAppSelector(selectUserDate)

  return (
    <aside className={s.aside}>
      <div className={s.content}>
        <div className={s.userInfo}>
          <div className={s.avatarWrapper}>
            <img alt={'avatar'} className={s.avatar} src={isAdmin ? admin : noPhoto} />
          </div>
          <div className={s.userData}>
            <span className={s.nickName}>{isAdmin ? 'Admin ' : username}</span>
            <span className={s.balance}>Balance: {balance}</span>
          </div>
        </div>
        <Navigation isAdmin={isAdmin} />
      </div>
    </aside>
  )
}
