import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import Erorr from '../../pages/Erorr';
import Home from '../../pages/Home';
import Posts from '../../pages/Posts';
import SinglePost from '../../pages/SinglePost';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<Navigate to='/about' replace/>} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
        <Route path="*" element={<Erorr />} />
      </Routes>
    </>
  );
};

export default AppRouter;
