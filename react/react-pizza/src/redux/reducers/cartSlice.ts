import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartSlice {
  totalPrice: number;
  items: CartItems[];
}

export type CartItems = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  size: string;
  type: string;
  count: number;
  change?: boolean;
};

const initialState: CartSlice = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    changeItem(state, action: PayloadAction<CartItems>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        action.payload.change
          ? (findItem.count = findItem.count + action.payload.count)
          : findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = state.items.reduce((sum, obj) => {
        return sum + obj.price * obj.count;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export const { changeItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
