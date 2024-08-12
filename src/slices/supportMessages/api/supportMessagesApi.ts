import { supportMessages } from '@/common/data/prevData'

export const supportMessagesApi = {
  getMessages: () => {
    return Promise.resolve({ data: supportMessages })
  },
}
