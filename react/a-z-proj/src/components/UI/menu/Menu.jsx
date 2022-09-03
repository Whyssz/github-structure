import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Menu = () => {
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <nav className="navbar">
      <div className="navbar_links">
        <Link to="/posts">Posts</Link>
        <Link to="/about">About</Link>
      </div>
      <MyButton onClick={logout}>Sign out</MyButton>
    </nav>
  );
};

export default Menu;
