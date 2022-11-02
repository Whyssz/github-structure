import { Content } from './components/content/Content';
import { Header } from './components/header/Header';

import './scss/app.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
    </div>
  );
};
