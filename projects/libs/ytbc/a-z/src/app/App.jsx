import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../components/AppRouter/AppRouter';
import Menu from '../components/UI/menu/Menu';
import { AuthContext } from '../context';

import '../styles/styles.scss';

const App = () => {
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(true);
    }
    setLoading(false)
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        isLoading,
      }}
    >
      <Router>
        <Menu />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
