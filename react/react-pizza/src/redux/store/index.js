import { configureStore } from '@reduxjs/toolkit';
import cart from '../reducers/cartSlice';
import filter from '../reducers/filterSlice';
import pizza from '../reducers/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
