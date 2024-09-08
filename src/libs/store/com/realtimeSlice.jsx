// redux/features/realtimeSlice.js
import { createSlice } from '@reduxjs/toolkit';

import Realtime from '../../../openw/data/Realtime';

export const realtimeSlice = createSlice({
  name: 'realtime',
  initialState: {
    data: Realtime,
    searchResults: [],
  },
  reducers: {
    searchRealtime: (state, action) => {
      const query = action.payload.toLowerCase();
      // @ts-ignore
      state.searchResults = state.data.filter(
        item =>
          item.username.toLowerCase().includes(query)
          || item.text.toLowerCase().includes(query),
      );
    },
    clearSearchResults: (state) => {
      state.searchResults = [];
    },
  },
});

export const { searchRealtime, clearSearchResults } = realtimeSlice.actions;
export default realtimeSlice.reducer;
