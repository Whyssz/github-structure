import { configureStore } from '@reduxjs/toolkit';
import filter from '../reducers/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
  },
});
