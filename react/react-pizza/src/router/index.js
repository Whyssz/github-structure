import { Route, Routes } from 'react-router-dom';

import { Cart } from '../pages/Cart';
import { EmptyCart } from '../pages/EmptyCart';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';
import { SinglePizza } from '../pages/SinglePizza';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pizza/:id" element={<SinglePizza />} />
      <Route path="/empty-cart" element={<EmptyCart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
