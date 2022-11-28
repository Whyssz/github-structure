import qs from "qs";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BlockCards } from "../components/blockCards/BlockCards";
import { Categories } from "../components/categories/Categories";
import { Header } from "../components/header/Header";
import { Search } from "../components/search/Search";
import { Sort, sortList } from "../components/sort/Sort";
import { selectFilter } from "../redux/filter/selectors";
import { setFilter } from "../redux/filter/slice";
import { FilterSlice } from "../redux/filter/types";
import { selectPizza } from "../redux/pizza/selectors";
import { fetchPizza } from "../redux/pizza/slice";
import { useAppDispatch } from "../redux/store";


export const Home: React.FC = () => {
  const isSearch = useRef(false);
  const isDone = useRef(false);

  const { categoryId, currPage, sort, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  //or const dispatch = useDispatch<AppDispatch>();

  const generatePizzaURL = () => {
    const _url = 'https://6364bf4e7b209ece0f4ce574.mockapi.io/items?';
    const categoryBy = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const orderBy = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const searchBy = searchValue ? `&search=${searchValue}` : '';

    return `${_url}page=${currPage}&limit=4${categoryBy}&sortBy=${sortBy}&order=${orderBy}${searchBy}`;
  };

  useEffect(() => {
    if (window.location.search) {
      //lh (as unknown as ...)
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(setFilter({ ...params, sort } as FilterSlice));

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isDone.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currPage,
      });
      navigate(`?${queryString}`);
    }

    isDone.current = true;
  }, [categoryId, sort, currPage]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      const url = generatePizzaURL();
      dispatch(fetchPizza(url));
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currPage]);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: 30 }}>
        <div className="content__top">
          <Categories categoryId={categoryId} />
          <Sort value={sort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <Search />
        <BlockCards list={items} loading={status} />
      </div>
    </>
  );
};