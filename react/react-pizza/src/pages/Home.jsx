/* eslint-disable react-hooks/exhaustive-deps */
import qs from 'qs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearch } from '../contex/searchContext';
import useServices from '../services';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlockCards } from '../components/blockCards/BlockCards';
import { ContentTop } from '../components/contentTop/ContentTop';
import { Header } from '../components/header/Header';
import { Search } from '../components/search/Search';
import { sortList } from '../components/sort/Sort';
import { setFilter } from '../redux/reducers/filterSlice';

export const Home = () => {
  const [items, setItems] = useState([]);
  const isSearch = useRef(false);
  const isDone = useRef(false);

  const { getPizzas, loading, setLoading } = useServices();
  const { categoryId, currPage, sort } = useSelector((state) => state.filter);
  const { searchValue } = useSearch();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemsList = (list) => {
    setItems(list);
    setLoading(false);
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
      getPizzas(categoryId, currPage, sort, searchValue)
        .then(itemsList)
        .catch((err) => console.log(err));
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currPage]);

  const totalPrice = useSelector(state => state.cart.totalPrice)
  console.log(totalPrice);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: 30 }}>
        <ContentTop />
        <Search />
        <BlockCards list={items} loading={loading} />
      </div>
    </>
  );
};
