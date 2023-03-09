import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";
import { Pizza, PizzaState, PizzaStatus } from "./types";

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


export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
