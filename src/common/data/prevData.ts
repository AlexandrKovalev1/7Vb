import cover4 from '@/assets/img/assasin.jpeg'
import cover5 from '@/assets/img/atomic.jpg'
import newsCover2 from '@/assets/img/batle.jpeg'
import cover from '@/assets/img/cover1.jpg'
import newsCover3 from '@/assets/img/farcry.jpeg'
import newsCover1 from '@/assets/img/stalk (1).jpg'
import cover6 from '@/assets/img/witcher.jpeg'
import { NewsItemType } from '@/slices/news/news.types'
import { Product, ProductItem } from '@/slices/products/products.types'
import { SupportMessages } from '@/slices/supportMessages/supportMessages.types'

export const products: ProductItem[] = [
  {
    description: 'This is a sample product.',
    hasSubscription: false,
    id: 1,
    imageUrl: 'http://example.com/image.jpg',
    name: 'Sample Product',
    remainingTime: null,
    status: 'Active',
  },
  {
    description: 'This is a sample product.',
    hasSubscription: false,
    id: 2,
    imageUrl: 'http://example.com/image.jpg',
    name: 'Sample Product',
    remainingTime: null,
    status: 'Active',
  },
  {
    description: 'This is a sample product.',
    hasSubscription: false,
    id: 3,
    imageUrl: 'http://example.com/image.jpg',
    name: 'Sample Product',
    remainingTime: null,
    status: 'Active',
  },
  {
    description: 'This is a sample product.',
    hasSubscription: false,
    id: 4,
    imageUrl: 'http://example.com/image.jpg',
    name: 'Sample Product',
    remainingTime: null,
    status: 'Active',
  },
  {
    description: 'This is a sample product.',
    hasSubscription: false,
    id: 5,
    imageUrl: 'http://example.com/image.jpg',
    name: 'Sample Product',
    remainingTime: null,
    status: 'Active',
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
    type: 'System',
  },
  {
    content:
      " 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',",
    cover: newsCover2,
    id: '2',
    title: 'New Major Update',
    type: 'System',
  },
  {
    content:
      " 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?' +\n" +
      "      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum delectus, dolores est exercitationem fugit id illo illum maiores minus nobis, nulla pariatur quasi qui repellat sapiente totam ut?',",
    cover: newsCover3,
    id: '3',
    title: 'New Major Update',
    type: 'System',
  },
]

export const supportMessages: SupportMessages = [
  {
    id: '1',
    messages: [
      {
        content: 'I Have some problem in my launcher not started and i have some bsod.',
        date: '11:22 | 4 Nov 2023',
        id: '1',
        senderId: '1',
      },
      {
        content: 'You need to...',
        date: '11:22 | 4 Nov 2023',
        id: '2',
        senderId: '164850',
      },
      {
        content: 'I Have some problem in my launcher not started and i have some bsod.',
        date: '11:22 | 4 Nov 2023',
        id: '3',
        senderId: '1',
      },
    ],
    status: 'In Process',
  },
  {
    id: '2',
    messages: [
      {
        content: 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        date: '11:22 | 4 Nov 2023',
        id: '1',
        senderId: '2',
      },
      {
        content: 'You need to...',
        date: '11:22 | 4 Nov 2023',
        id: '2',
        senderId: '164850',
      },
    ],
    status: 'Successed',
  },
]
