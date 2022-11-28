import { Cart } from './Cart';
import { EmptyCart } from './EmptyCart';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { SinglePizza } from './SinglePizza';

export const routers = [
  { path: '/', element: <Home /> },
  { path: '/pizza/:id', element: <SinglePizza /> },
  { path: '/cart', element: <Cart /> },
  { path: '/empty-cart', element: <EmptyCart /> },

  { path: '*', element: <PageNotFound /> },
];
