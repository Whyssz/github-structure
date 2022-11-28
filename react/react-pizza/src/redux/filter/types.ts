export interface FilterSlice {
  searchValue: string;
  categoryId: number;
  currPage: number;
  sort: SortFilter;
}
export interface SortFilter {
  name: string;
  sortProperty: SortProperty;
};

export enum SortProperty {
  RATING_DESC = 'rating',
  RATING_INC = '-rating',
  PRICE_DESC = 'price',
  PRICE_INC = '-price',
  TITLE_CIRILIC = 'title',
}