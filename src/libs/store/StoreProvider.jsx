'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from './store';

// @ts-ignore
export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // @ts-ignore
    storeRef.current = makeStore();
  }

  // @ts-ignore
  return <Provider store={storeRef.current}>{children}</Provider>;
}
