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
  },
});

export const { setCategoryId, setSort, setCurrPage } = filterSlice.actions;
export default filterSlice.reducer;
