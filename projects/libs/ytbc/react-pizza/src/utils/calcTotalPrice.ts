import { CartItems } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItems[]) => {
  return items.reduce((sum: number, obj) => {
    return sum + obj.price * obj.count;
  }, 0);
};