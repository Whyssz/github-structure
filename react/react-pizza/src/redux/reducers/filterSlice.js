import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    incByAction: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { inc, dec, incByAction } = filterSlice.actions;
export default filterSlice.reducer;
