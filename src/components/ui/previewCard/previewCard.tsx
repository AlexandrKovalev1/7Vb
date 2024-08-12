import { Link } from 'react-router-dom'

import { PATH } from '@/app/router/routes'
import { Button, Card } from '@/components'

import s from './previewCard.module.scss'

type Props = {
  cover: string
  id: string
  title: string
  type: string
}

export const PreviewCard = ({ cover, title, type }: Props) => {
  return (
    <Card className={s.wrapper}>
      <img alt={'cover-img'} className={s.coverImg} src={cover} />
      <div>
        <h3>{title}</h3>
        <span className={s.typeText}>{type}</span>
      </div>
      <Button as={Link} className={s.button} to={PATH.LOGIN}>
        Download
      </Button>
    </Card>
  )
}
