import { Card } from '@/components'

import s from './rules.module.scss'

export const Rules = () => {
  return (
    <div className={s.wrapper}>
      <Card className={s.card}>
        <h2 className={s.heading}>Rules</h2>
        <p className={s.content}>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis odio maximus, mollis
            urna at, pulvinar est. Morbi mauris ipsum, fermentum ut mollis non, molestie eu lacus.
            Duis eu justo tincidunt, placerat leo sit amet, gravida orci. Quisque lobortis turpis
            vitae odio gravida pretium. Phasellus tincidunt mattis ex rhoncus consectetur. Ut eu
            porta lacus, in iaculis turpis. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Nam sed iaculis ligula, aliquam efficitur est.
            Suspendisse id tellus at nulla ultricies eleifend non et tellus. Nullam malesuada urna
            nec eros cursus, cursus ultricies est bibendum. Integer eu purus id nisi venenatis
            convallis vel eget lectus. Mauris tristique justo ac mi mattis, vitae tempus augue
            efficitur.
          </span>
          <span>
            Etiam faucibus ligula at leo lobortis volutpat at vitae mi. Ut lectus risus, congue id
            iaculis at, suscipit vel nulla. Morbi enim nibh, pretium vitae arcu sit amet, aliquet
            varius elit. Curabitur scelerisque ex justo, at tincidunt velit venenatis a. Mauris
            placerat purus sit amet tortor malesuada aliquam. Curabitur luctus nibh sed porttitor
            iaculis. Praesent dictum ultricies mollis. Proin cursus, mi in ornare sagittis, magna
            neque pharetra quam, non condimentum felis libero at massa. Suspendisse sagittis finibus
            massa, id dictum mi semper eget. Cras ante sem, dictum ac nulla sit amet, viverra
            posuere justo. Duis sit amet mollis eros. Suspendisse vitae justo lorem. Suspendisse et
            turpis feugiat, facilisis purus eget, dictum urna. Quisque nec malesuada nunc. Sed in
            rhoncus quam, at aliquet eros. Aenean mollis pharetra velit eget eleifend. Ut ornare
            libero nunc, vel eleifend sem tristique sed. Nam accumsan, augue id mattis ornare, ipsum
            odio placerat ligula, nec mattis felis diam sit amet eros. In dictum odio vel odio
            consectetur aliquam.
          </span>
          <span>
            Pellentesque et ante a orci mollis luctus vitae in tellus. Fusce tellus urna, imperdiet
            ut metus at, gravida accumsan felis. Proin orci augue, pellentesque sed ipsum vitae,
            faucibus blandit nisl. Aliquam in lorem a augue vestibulum finibus. Fusce leo nulla,
            tristique eu consequat eget, tristique at urna. Vestibulum justo augue, ullamcorper vel
            ornare quis, tincidunt eu purus. Curabitur luctus urna laoreet rutrum ullamcorper.
            Aenean arcu nisi, aliquet eget volutpat a, consectetur et tortor. Nunc efficitur nulla
            ut elit luctus, vitae cursus dui ultricies. Integer viverra, neque ut mattis rhoncus,
            purus sapien luctus risus, mollis tempus elit nisl eu velit. Ut eget dictum ligula, a
            dictum augue. Integer porta pretium magna ac dictum. Aliquam imperdiet leo quam, id
            porttitor ipsum finibus at. Nulla finibus, est vitae elementum rhoncus, leo est porta
            ante, fringilla laoreet quam purus sed massa. Duis placerat tincidunt orci vel blandit.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Vestibulum ante ipsum primis in faucibus.
          </span>
        </p>
      </Card>
    </div>
  )
}
