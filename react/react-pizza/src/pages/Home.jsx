/* eslint-disable react-hooks/exhaustive-deps */
import qs from 'qs';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BlockCards } from '../components/blockCards/BlockCards';
import { ContentTop } from '../components/contentTop/ContentTop';
import { Header } from '../components/header/Header';
import { Search } from '../components/search/Search';
import { sortList } from '../components/sort/Sort';
import { useSearch } from '../contex/searchContext';
import { setFilter } from '../redux/reducers/filterSlice';
import { fetchPizza } from '../redux/reducers/pizzaSlice';

export const Home = () => {
  const isSearch = useRef(false);
  const isDone = useRef(false);

  // const { loading, setLoading } = useServices();
  const { categoryId, currPage, sort } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.pizza);
  const { searchValue } = useSearch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty
      );

      dispatch(setFilter({ ...params, sort }));

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
      const url = generatePizzaURL()
      dispatch(fetchPizza(url));
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currPage]);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: 30 }}>
        <ContentTop />
        <Search />
        <BlockCards list={items} loading={status} />
      </div>
    </>
  );
};
