import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  machineattribute: string[];
}

const initialState: CounterState = {
  machineattribute: [],
}

export const counterSlice = createSlice({
  name: 'machineattribute',
  initialState,
  reducers: {
    clearMachineAttribute: (state) => {
      state.machineattribute = [];
    },
    setMachineAttribute: (state, action: PayloadAction<string[]>) => {
      const newItems = action.payload;
      console.log('newitems', newItems);
      if (state.machineattribute === null) {
        state.machineattribute = newItems;
      }
      
      // Filter out items that are already in the machineattribute array
      const uniqueNewItems = newItems.filter((item) => !state.machineattribute.includes(item));

   
      
      // Concatenate the unique new items to the existing array
      state.machineattribute = state.machineattribute.concat(uniqueNewItems);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMachineAttribute, clearMachineAttribute } = counterSlice.actions

export default counterSlice.reducer
