import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearch } from '../contex/searchContext';
import useServices from '../services';

import { BlockCards } from '../components/blockCards/BlockCards';
import { ContentTop } from '../components/contentTop/ContentTop';
import { Header } from '../components/header/Header';
import { Search } from '../components/search/Search';

export const Home = () => {
  const [items, setItems] = useState([]);

  const { getPizzas, loading, setLoading } = useServices();
  const { categoryId, currPage, sort } = useSelector((state) => state.filter);
  const { searchValue } = useSearch();

  useEffect(() => {
    getPizzas(categoryId, currPage, sort, searchValue)
      .then(itemsList)
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currPage]);

  const itemsList = (list) => {
    setItems(list);
    setLoading(false);
  };

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
