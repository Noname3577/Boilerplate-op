import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './com/DataSlice';
import realtimeReducer from './com/realtimeSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      realtime: realtimeReducer,
    },
  });
};
