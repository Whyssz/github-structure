export interface PizzaState {
  status: PizzaStatus;
  items: Pizza[];
};

export enum PizzaStatus {
  FETCH_IDLE = 'idle',
  FETCH_LOADING = 'loading',
  FETCH_ERROR = 'error',
}
export interface Pizza {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
  change?: boolean;
};