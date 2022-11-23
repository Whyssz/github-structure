import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from '../../router';

import '../../scss/app.scss';

export const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </Router>
  );
};
