import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { useHttp } from '../hooks/http.hook';

interface SingleItem {
  title: string;
  price: number;
  imageUrl: string;
}

export const SinglePizza: React.FC = () => {
  const [item, setItem] = useState<SingleItem>();

  const navigate = useNavigate();
  const params = useParams();
  const { singleRequest } = useHttp();

  const generateUrl = `https://6364bf4e7b209ece0f4ce574.mockapi.io/items/${params.id}`;

  useEffect(() => {
    singleRequest(generateUrl)
      .then(setItem)
      .catch((err) => {
        alert(err.message);
        navigate('/');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {item ? (
          <div>
            <img style={{ width: 300 }} src={item.imageUrl} alt="Pizza" />
            <h3>{item.title}</h3>
            <h4>{item.price} Р</h4>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};
