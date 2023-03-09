import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import Erorr from '../../pages/Erorr';
import { privateRoutes, publicRoutes } from '../../router';
import Loader from '../UI/loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {isAuth ? (
        <Routes>
          {privateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/*" element={<Navigate to="/posts" replace />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
          <Route path="/*" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
