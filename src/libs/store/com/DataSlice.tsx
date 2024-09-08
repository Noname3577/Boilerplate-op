/* eslint-disable react-refresh/only-export-components */

import { createSlice } from '@reduxjs/toolkit';

type DataState = {
  value: number;
  startIndex: number;
};

const initialState: DataState = {
  value: 0,
  startIndex: 0,
};

const DataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state: DataState) => {
      state.value += 1;
    },
    decrement: (state: DataState) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = DataSlice.actions;
export default DataSlice.reducer;
