import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from '../components/AppRouter/AppRouter';
import Menu from '../components/UI/menu/Menu';

import '../styles/styles.scss';

const App = () => {
  return (
    <Router>
      <Menu />
      <AppRouter />
    </Router>
  );
};

export default App;
