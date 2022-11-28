import { calcTotalPrice } from "./calcTotalPrice";



export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];

  const price = calcTotalPrice(items);

  return { items, price };
};