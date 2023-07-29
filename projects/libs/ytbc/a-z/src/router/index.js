import About from '../pages/About';
import Login from '../pages/Login';
import Posts from '../pages/Posts';
import SinglePost from '../pages/SinglePost';

export const privateRoutes = [
  { path: '/posts', element: <Posts /> },
  { path: '/posts/:id', element: <SinglePost /> },
  { path: '/about', element: <About /> },
];

export const publicRoutes = [{ path: '/login', element: <Login /> }];
