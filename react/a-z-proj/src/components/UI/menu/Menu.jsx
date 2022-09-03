import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="navbar_links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </nav>
  );
};

export default Menu;
