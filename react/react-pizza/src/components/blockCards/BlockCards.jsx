import { useMemo } from 'react';
import { Card } from '../card/Card';
import { Pagination } from '../pagination/Pagination';
import { Skeleton } from '../skeleton';

export const BlockCards = ({ list, loading }) => {
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

  const cardsList = useMemo(() => {
    return renderList(list);
  }, [list]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : cardsList}
      </div>
      <Pagination />
    </div>
  );
};
