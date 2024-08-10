import admin from '@/assets/img/admin.jpeg'
import noPhoto from '@/assets/img/noPhoto.jpeg'

import s from './sidebar.module.scss'

import { Navigation } from './navigation'
type Props = {
  isAdmin?: boolean
  userData?: any
}

export const Sidebar = ({ isAdmin }: Props) => {
  return (
    <aside className={s.aside}>
      <div className={s.content}>
        <div className={s.userInfo}>
          <div className={s.avatarWrapper}>
            <img alt={'avatar'} className={s.avatar} src={isAdmin ? admin : noPhoto} />
          </div>
          <div className={s.userData}>
            <span className={s.nickName}>{isAdmin ? 'Admin ' : 'Nickname'}</span>
            <span className={s.balance}>Balance:180$</span>
          </div>
        </div>
        <Navigation isAdmin={isAdmin} />
      </div>
    </aside>
  )
}
