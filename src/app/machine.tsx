import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  machine: Array<{  machine_name: string,machine_type: string,manufacturer:string,serial_number:string }>;
}

const initialState: CounterState = {
  machine: [],
}

export const counterSlice = createSlice({
  name: 'machine',
  initialState,
  reducers: {
    clearMachine: (state) => {
      state.machine = [];
    },
    setMachine: (state, action: PayloadAction<{ machine_name: string,machine_type:string,manufacturer:string }>) => {
      const newmachine = action.payload;

      if (!state.machine) {
        state.machine = [];
      }

      // Check if the object doesn't already exist in machine
      const existingIndex = state.machine.findIndex(
        (item) => item.machine_name === newmachine.machine_name
      );

      if (existingIndex === -1) {
        // Object doesn't exist, so add it
        state.machine.push(newmachine);
      } else {
        // Object with the same title already exists, you can choose to update it if needed
        state.machine[existingIndex] = newmachine;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMachine, clearMachine } = counterSlice.actions

export default counterSlice.reducer
