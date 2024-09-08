'use client';

/* eslint-disable react-dom/no-missing-button-type */
import type { FC } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '@/libs/store/com/DataSlice';

const Counter: FC = () => {
  const count: number = useSelector((state: { counter: { value: number } }) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
