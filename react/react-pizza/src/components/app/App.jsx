import { BrowserRouter as Router } from 'react-router-dom';

import { SearchContext } from '../../contex/searchContext';
import { AppRouter } from '../../router';

import '../../scss/app.scss';

export const App = () => {
  return (
    <SearchContext>
      <Router>
        <div className="wrapper">
          <div className="content">
            <AppRouter />
          </div>
        </div>
      </Router>
    </SearchContext>
  );
};
