import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {

  machine:any
}

const initialState: CounterState = {
  machine: null
}

export const counterSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {
    clearMachine:(state)=>{
        state.machine = []
    },
    setMachine:(state,action:PayloadAction<any>)=>{
        state.machine = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMachine,clearMachine } = counterSlice.actions

export default counterSlice.reducer