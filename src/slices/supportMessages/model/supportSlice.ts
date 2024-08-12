import { createAppSlice } from '@/common/utils/createAppSilce'
import { supportMessagesApi } from '@/slices/supportMessages/api/supportMessagesApi'
import { SupportMessages } from '@/slices/supportMessages/supportMessages.types'

const slice = createAppSlice({
  initialState: {
    messages: [] as SupportMessages,
  },
  name: 'supportMessages',
  reducers: create => ({
    fetchMessages: create.asyncThunk<{ messages: SupportMessages }>(
      async () => {
        const res = await supportMessagesApi.getMessages()

        return { messages: res.data }
      },
      {
        fulfilled: (state, action) => {
          state.messages = action.payload.messages
        },
      }
    ),
  }),
  selectors: {
    selectMessages: state => state.messages,
  },
})

export const messagesThunks = slice.actions
export const supportReducer = slice.reducer
export const { selectMessages } = slice.selectors
