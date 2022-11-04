import { Route, Routes } from 'react-router-dom';
import { Cart } from '../pages/Cart';

import { Home } from '../pages/Home';
import { PageNotFound } from '../pages/PageNotFound';

// const Page404 = lazy(() => import('../pages/Page404'));
// const MainPage = lazy(() => import('../pages/MainPage'));
// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SinglePage = lazy(() => import('../pages/SinglePage'));
// const SingleCharLayout = lazy(() => import('../pages/singleCharLayout'));
// const SingleComicLayout = lazy(() => import('../pages/singleComicLayout'));

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
