import { configureStore } from '@reduxjs/toolkit';
import { orderSlice } from './order';

export const store = configureStore({
    reducer: {
        order: orderSlice.reducer,
    },
  })