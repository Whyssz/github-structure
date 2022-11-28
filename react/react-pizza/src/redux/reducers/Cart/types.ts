export interface CartSlice {
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
  count?: number;
  change?: boolean;
};

