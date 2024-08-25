import { me } from '@/slices/auth/model/authSlice'
import { PayloadAction, createSlice, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'

export type StatusType = 'failed' | 'idle' | 'loading' | 'succeeded'

export type DeviceType = 'desktop' | 'mobile'
const slice = createSlice({
  extraReducers: builder => {
    builder.addCase(me.fulfilled, state => {
      state.initialised = true
    })
    builder.addCase(me.rejected, state => {
      state.initialised = true
    })
    builder.addMatcher(isPending, state => {
      state.status = 'loading'
      if (state.error) {
        state.error = null
      }
      if (state.message) {
        state.message = null
      }
    })
    builder.addMatcher(isFulfilled, (state, action: any) => {
      if (action.payload?.message) {
        state.message = action.payload.message
      }
      if (state.error) {
        state.error = null
      }
      state.status = 'succeeded'
    })
    builder.addMatcher(isRejected, (state, action: any) => {
      if (action.payload) {
        state.error = action.payload.message
      } else {
        state.error = action.error.message ? action.error.message : 'Something went wrong'
      }
      state.status = 'failed'
    })
  },
  initialState: {
    deviceType: 'desktop' as DeviceType,
    error: null as null | string,
    initialised: false,
    message: null as null | string,
    status: 'idle' as StatusType,
  },
  name: 'app',
  reducers: create => ({
    setAppInitialized: create.reducer((state, action: PayloadAction<{ iniitialized: boolean }>) => {
      state.initialised = action.payload.iniitialized
    }),
    setDeviceType: create.reducer((state, action: PayloadAction<{ deviceType: DeviceType }>) => {
      state.deviceType = action.payload.deviceType
    }),
  }),
  selectors: {
    selectDeviceType: state => state.deviceType,
    selectErrorApp: state => state.error,
    selectIsInitialized: state => state.initialised,
    selectMessageApp: state => state.message,
    selectStatus: state => state.status,
  },
})

export const appReducer = slice.reducer
export const { setAppInitialized, setDeviceType } = slice.actions
export const {
  selectDeviceType,
  selectErrorApp,
  selectIsInitialized,
  selectMessageApp,
  selectStatus,
} = slice.selectors
