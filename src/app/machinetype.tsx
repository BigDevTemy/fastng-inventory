import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {

  machinetype:any
}

const initialState: CounterState = {
  machinetype: null
}

export const counterSlice = createSlice({
  name: 'machinetype',
  initialState,
  reducers: {
    clearMachineType:(state)=>{
        state.machinetype = []
    },
    setMachineType:(state,action:PayloadAction<any>)=>{
        state.machinetype = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMachineType,clearMachineType } = counterSlice.actions

export default counterSlice.reducer