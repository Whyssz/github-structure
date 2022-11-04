import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from '../../components/header/Header';
import { AppRouter } from '../router';

import '../../scss/app.scss';

export const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </Router>
  );
};
