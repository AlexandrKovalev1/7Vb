import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type DeviceType = 'desktop' | 'mobile'
const slice = createSlice({
  initialState: {
    deviceType: 'desktop' as DeviceType,
  },
  name: 'app',
  reducers: create => ({
    setDeviceType: create.reducer((state, action: PayloadAction<{ deviceType: DeviceType }>) => {
      state.deviceType = action.payload.deviceType
    }),
  }),
  selectors: {
    selectDeviceType: state => state.deviceType,
  },
})

export const appReducer = slice.reducer
export const { setDeviceType } = slice.actions
export const { selectDeviceType } = slice.selectors
