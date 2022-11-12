import { Card } from '../card/Card';
import { Pagination } from '../pagination/Pagination';
import { Skeleton } from '../skeleton';

export const BlockCards = ({ list, loading, setCurrentPage }) => {
  const renderList = (list) => {
    return list.map(({ id, title, price, imageUrl, sizes, types }) => (
      <Card
        key={id}
        title={title}
        price={price}
        image={imageUrl}
        sizes={sizes}
        types={types}
      />
    ));
  };

  // const cardsList = renderList(bd);
  const cardsList = renderList(list);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : cardsList}
      </div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </div>
  );
};
