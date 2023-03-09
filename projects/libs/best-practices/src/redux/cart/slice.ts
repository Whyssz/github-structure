import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalCount } from "../../utils/calcTotalCount";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { CartItems, CartSlice } from "./types";

const cartData = getCartFromLS();

export const initialState: CartSlice = {
  totalPrice: cartData.price,
  totalCount: cartData.count,
  items: cartData.items,
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

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);

      state.totalPrice = calcTotalPrice(state.items);
      state.totalCount = calcTotalCount(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalCount = 0;
      localStorage.clear();
    },
  },
});

export const { changeItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
