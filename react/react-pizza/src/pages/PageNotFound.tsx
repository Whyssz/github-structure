import { Header } from '../components/header';
import { NotFoundMessage } from '../components/notFoundMessage';

const PageNotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <NotFoundMessage />
      </div>
    </>
  );
};

export default PageNotFound;