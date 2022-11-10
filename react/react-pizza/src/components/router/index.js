import { Route, Routes } from 'react-router-dom';

import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
