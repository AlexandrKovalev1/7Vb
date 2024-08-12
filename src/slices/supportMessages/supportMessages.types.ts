export type SupportMessages = {
  id: string
  messages: {
    content: string
    date: string
    id: string
    senderId: string
  }[]
  status: StatusSupportType
}[]

export type StatusSupportType = 'Failed' | 'In Process' | 'Successed'
