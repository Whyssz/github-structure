import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
const Cart = lazy(() => import(/*webpackChunkName: "Cart"
*/'../pages/Cart'));
const EmptyCart = lazy(() => import(/*webpackChunkName: "EmptyCart" 
*/'../pages/EmptyCart'));
const PageNotFound = lazy(() => import(/*webpackChunkName: "NotFound"
*/'../pages/PageNotFound'));
const SinglePizza = lazy(() => import(/*webpackChunkName: "SinglePage"
*/'../pages/SinglePizza'));

export const AppRouter = () => {
  return (
    <Routes>
      < Route path='/' element={
        <Suspense fallback={<div>Loading</div>}>
          <Home />
        </Suspense>
      } />
      < Route path='/cart' element={
        <Suspense fallback={<div>Loading</div>}>
          <Cart />
        </Suspense>
      } />
      < Route path='/pizza/:id' element={
        <Suspense fallback={<div>Loading</div>}>
          <SinglePizza />
        </Suspense>
      } />
      < Route path='/cart-empty' element={
        <Suspense fallback={<div>Loading</div>}>
          <EmptyCart />
        </Suspense>
      } />

      < Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

/*ex lib react-loadable (serv loading)
  import Loadable from 'react-loadable''

  const Cart = Loadable({
    loader: () => import('../page/Cart);
    loading: () => <div>Loading</div>
  })
*/