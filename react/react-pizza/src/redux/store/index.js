import { configureStore } from '@reduxjs/toolkit';
import cart from '../reducers/cartSlice';
import filter from '../reducers/filterSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
