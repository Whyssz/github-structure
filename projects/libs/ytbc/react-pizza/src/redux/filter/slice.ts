import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSlice, SortFilter, SortProperty } from "./types";

const initialState: FilterSlice = {
  searchValue: '',
  categoryId: 0,
  currPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortProperty.RATING_DESC,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<SortFilter>) {
      state.sort = action.payload;
    },
    setCurrPage(state, action: PayloadAction<number>) {
      state.currPage = action.payload;
    },
    setFilter(state, action: PayloadAction<FilterSlice>) {
      state.categoryId = Number(action.payload.categoryId);
      state.currPage = Number(action.payload.currPage);
      state.sort = action.payload.sort;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setCategoryId,
  setSort,
  setCurrPage,
  setFilter,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
