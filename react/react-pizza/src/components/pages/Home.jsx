import { useEffect, useState } from 'react';
import { ContentTop } from '../contentTop/ContentTop';

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://6364bf4e7b209ece0f4ce574.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  console.log(items);
  return (
    <div className="container">
      <ContentTop list={items} loading={loading} />
    </div>
  );
};
