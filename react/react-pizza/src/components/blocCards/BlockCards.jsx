import { Card } from '../card/Card';

import bd from '../../assets/bd.json';

export const BlockCards = () => {
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

  const cardsList = renderList(bd);

  return <div className="content__items">{cardsList}</div>;
};
