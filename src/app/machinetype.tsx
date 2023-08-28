import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  machinetype: Array<{ attribute: string[]; title: string }>;
}

const initialState: CounterState = {
  machinetype: [{title:'test',attribute:[]}],
}

export const counterSlice = createSlice({
  name: 'machinetype',
  initialState,
  reducers: {
    clearMachineType: (state) => {
      state.machinetype = [];
    },
    setMachineType: (state, action: PayloadAction<{ attribute: string[]; title: string }>) => {
      const newMachineType = action.payload;

      if (!state.machinetype) {
        state.machinetype = [];
      }

      // Check if the object doesn't already exist in machinetype
      const existingIndex = state.machinetype.findIndex(
        (item) => item.title === newMachineType.title
      );

      if (existingIndex === -1) {
        // Object doesn't exist, so add it
        state.machinetype.push(newMachineType);
      } else {
        // Object with the same title already exists, you can choose to update it if needed
        state.machinetype[existingIndex] = newMachineType;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMachineType, clearMachineType } = counterSlice.actions

export default counterSlice.reducer
