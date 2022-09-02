import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import Posts from '../../pages/Posts';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<h1>Sorry, broken url - 404</h1>} />
      </Routes>
    </>
  );
};

export default AppRouter;
