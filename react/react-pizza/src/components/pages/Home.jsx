import { useEffect, useState } from 'react';
import { BlockCards } from '../blocCards/BlockCards';
import { ContentTop } from '../contentTop/ContentTop';
import { Search } from '../search/Search';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  useEffect(() => {
    setLoading(true);

    const url = 'https://6364bf4e7b209ece0f4ce574.mockapi.io/items?';
    const categoryBy = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const orderBy = sortType.sortProperty.includes('-') ? 'asc' : 'desc';

    fetch(
      `${url}page=${currentPage}&limit=4${categoryBy}&sortBy=${sortBy}&order=${orderBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  console.log(items);

  return (
    <div className="container">
      <ContentTop
        categoryId={categoryId}
        sortType={sortType}
        setCategoryId={setCategoryId}
        setSortType={setSortType}
      />
      <Search value={searchValue} setValue={setSearchValue} />
      <BlockCards
        list={items}
        loading={loading}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
