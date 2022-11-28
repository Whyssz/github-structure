import { AppRouter } from '../../router';

import '../../scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <AppRouter />
      </div>
    </div>
  );
};
