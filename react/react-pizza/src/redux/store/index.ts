import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cart from '../reducers/Cart/slice';
import filter from '../reducers/filterSlice';
import pizza from '../reducers/pizzaSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;