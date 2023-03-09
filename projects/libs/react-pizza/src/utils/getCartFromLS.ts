import { calcTotalCount } from "./calcTotalCount";
import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];

  const price = calcTotalPrice(items);
  const count = calcTotalCount(items);

  return { items, price, count };
};