import { Route, Routes } from 'react-router-dom';
import { routers } from '../pages';

export const AppRouter = () => {

  const routs = routers.map(route => (
    < Route key={route.path} path={route.path} element={route.element} />
  ));

  return (
    <Routes>
      {routs}
      {/* < Route path='/' element={<Home />} /> */}
    </Routes>
  );
};