import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {

  userdetails:any
}

const initialState: CounterState = {
  userdetails: null
}

export const counterSlice = createSlice({
  name: 'userdetails',
  initialState,
  reducers: {
    clearUserDetails:(state)=>{
        state.userdetails = []
    },
    setUserDetails:(state,action:PayloadAction<any>)=>{
        state.userdetails = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserDetails,clearUserDetails } = counterSlice.actions

export default counterSlice.reducer