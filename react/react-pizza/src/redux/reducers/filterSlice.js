import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrPage(state, action) {
      state.currPage = action.payload;
    },
    setFilter(state, action) {
      state.categoryId = Number(action.payload.categoryId);
      state.currPage = Number(action.payload.currPage);
      state.sort = action.payload.sort;
    },
  },
});

export const selectFilter = (state) => state.filter;

export const { setCategoryId, setSort, setCurrPage, setFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
