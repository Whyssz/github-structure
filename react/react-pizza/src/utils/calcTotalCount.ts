import { CartItems } from "../redux/cart/types";

export const calcTotalCount = (items: CartItems[]) => {
  return items.reduce((sum: number, obj) => {
    return sum + obj.count;
  }, 0);
};