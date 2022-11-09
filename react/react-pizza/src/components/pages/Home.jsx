import { useEffect, useState } from 'react';
import { ContentTop } from '../contentTop/ContentTop';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
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

    fetch(`${url}${categoryBy}&sortBy=${sortBy}&order=${orderBy}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  console.log(items);
  return (
    <div className="container">
      <ContentTop
        list={items}
        loading={loading}
        categoryId={categoryId}
        sortType={sortType}
        setCategoryId={setCategoryId}
        setSortType={setSortType}
      />
    </div>
  );
};
