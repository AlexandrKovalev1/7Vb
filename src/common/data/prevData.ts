import cover4 from '@/assets/img/assasin.jpeg'
import cover5 from '@/assets/img/atomic.jpg'
import newsCover2 from '@/assets/img/batle.jpeg'
import cover from '@/assets/img/cover1.jpg'
import newsCover3 from '@/assets/img/farcry.jpeg'
import newsCover1 from '@/assets/img/stalk (1).jpg'
import cover6 from '@/assets/img/witcher.jpeg'
import { NewsItemType } from '@/slices/news/news.types'
import { Product } from '@/slices/products/products.types'

export const products: Product[] = [
  {
    PriceInUSD: '80 usd',
    Title: 'Counter Strike 2',
    Type: 'Internal',
    cover: cover,
    daysLeft: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '1',
    subscribeStatus: 'Active',
  },
  {
    PriceInUSD: '80 usd',
    Title: 'Assassins creed',
    Type: 'External',
    cover: cover4,
    daysLeft: null,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '2',
    subscribeStatus: 'None active',
  },
  {
    PriceInUSD: '80 usd',
    Title: 'Atomic Heart',
    Type: 'Individual',
    cover: cover5,
    daysLeft: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '3',
    subscribeStatus: 'On update',
  },
  {
    PriceInUSD: '80 usd',
    Title: 'Counter Strike 2',
    Type: 'Internal',
    cover: cover,
    daysLeft: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '4',
    subscribeStatus: 'Active',
  },
  {
    PriceInUSD: '80 usd',
    Title: 'Witcher',
    Type: 'Internal',
    cover: cover6,
    daysLeft: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '5',
    subscribeStatus: 'Active',
  },
  {
    PriceInUSD: '80 usd',
    Title: 'Counter Strike 2',
    Type: 'Internal',
    cover: cover,
    daysLeft: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '234',
    subscribeStatus: 'Active',
  },
  {
    PriceInUSD: '80 usd',
    Title: 'Atomic Heart',
    Type: 'Internal',
    cover: cover5,
    daysLeft: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',
    id: '23456',
    subscribeStatus: 'Active',
  },
]

export const sliderMarks = [
  {
    label: '3',
    value: 3,
  },
  {
    label: '14',
    value: 14,
  },
  {
    label: '30',
    value: 30,
  },
  {
    label: '90',
    value: 90,
  },
  {
    label: '180',
    value: 180,
  },
]

export const news: NewsItemType[] = [
  {
    content:
      " 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',",
    cover: newsCover1,
    id: '1',
    title: 'New Major Update',
    type: 'system',
  },
  {
    content:
      " 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',",
    cover: newsCover2,
    id: '2',
    title: 'New Major Update',
    type: 'system',
  },
  {
    content:
      " 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',",
    cover: newsCover3,
    id: '3',
    title: 'New Major Update',
    type: 'system',
  },
]
