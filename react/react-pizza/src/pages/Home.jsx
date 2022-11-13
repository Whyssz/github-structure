import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearch } from '../contex/searchContext';

import { BlockCards } from '../components/blockCards/BlockCards';
import { ContentTop } from '../components/contentTop/ContentTop';
import { Header } from '../components/header/Header';
import { Search } from '../components/search/Search';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const { searchValue } = useSearch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  useEffect(() => {
    setLoading(true);

    const url = 'https://6364bf4e7b209ece0f4ce574.mockapi.io/items?';
    const categoryBy = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const orderBy = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const searchBy = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `${url}page=${currentPage}&limit=4${categoryBy}&sortBy=${sortBy}&order=${orderBy}${searchBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: 30 }}>
        <ContentTop />
        <Search />
        <BlockCards
          list={items}
          loading={loading}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};
