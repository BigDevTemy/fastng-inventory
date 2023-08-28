import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {

    machineattribute:any
}

const initialState: CounterState = {
  machineattribute: null
}

export const counterSlice = createSlice({
  name: 'machineattribute',
  initialState,
  reducers: {
    clearMachineAttribute:(state)=>{
        state.machineattribute = []
    },
    setMachineAttribute:(state,action:PayloadAction<any>)=>{
        state.machineattribute = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMachineAttribute,clearMachineAttribute } = counterSlice.actions

export default counterSlice.reducer