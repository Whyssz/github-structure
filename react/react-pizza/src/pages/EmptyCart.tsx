import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import IMG from '../assets/img';

export const EmptyCart: React.FC = () => {
  
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="content">
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <i>😕</i>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={IMG.empty} alt="Empty cart" />
            <Link to="/" className="button button--black">
              <span>Вернуться назад</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
