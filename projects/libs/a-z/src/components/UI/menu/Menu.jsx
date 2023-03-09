import classNames from 'classnames';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Menu = () => {
  const { isAuth, setAuth } = useContext(AuthContext);

  const logout = () => {
    setAuth(false);
    localStorage.removeItem('auth');
  };
  const { pathname } = useLocation();

  const listLinks = [
    { to: '/posts', title: 'Posts' },
    { to: '/about', title: 'About' },
  ];

  const links = listLinks.map(({ to, title }) => {
    const classes = classNames('nav_links', {
      active: to === pathname,
    });
    return (
      <Link className={classes} key={title} to={to}>
        {title}
      </Link>
    );
  });

  return (
    <nav className="navbar">
      <div className="navbar_links">{links}</div>
      {isAuth ? <MyButton onClick={logout}>Sign out</MyButton> : null}
    </nav>
  );
};

export default Menu;
