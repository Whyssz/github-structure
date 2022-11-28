import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';
import { RootState } from '../store';

interface PizzaState {
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

//thunkAPI - add more func
export const fetchPizza = createAsyncThunk<Pizza[], string>('pizza/fetchPizza', (url) => {
  const { request } = useHttp();
  return request(url);
});

const initialState: PizzaState = {
  status: PizzaStatus.FETCH_IDLE,
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchPizza.pending, (state) => {
        state.status = PizzaStatus.FETCH_LOADING;
        state.items = [];
      })
      .addCase(fetchPizza.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
        state.status = PizzaStatus.FETCH_IDLE;
        state.items = action.payload;
      })
      .addCase(fetchPizza.rejected, (state) => {
        state.status = PizzaStatus.FETCH_ERROR;
        state.items = [];
      });
  },
});

export const selectPizza = (state: RootState) => state.pizza;

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
