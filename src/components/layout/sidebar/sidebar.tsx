import noPhoto from '@/assets/img/noPhoto.jpeg'

import s from './sidebar.module.scss'

import { Navigation } from './navigation'

export const Sidebar = () => {
  return (
    <aside className={s.aside}>
      <div className={s.content}>
        <div className={s.userInfo}>
          <div className={s.avatarWrapper}>
            <img alt={'avatar'} className={s.avatar} src={noPhoto} />
          </div>
          <div className={s.userData}>
            <span className={s.nickName}>Nickname</span>
            <span className={s.balance}>Balance:180$</span>
          </div>
        </div>
        <Navigation />
      </div>
    </aside>
  )
}
