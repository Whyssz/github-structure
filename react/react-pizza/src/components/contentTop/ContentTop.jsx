import { BlockCards } from '../blocCards/BlockCards';
import { Categories } from '../categories/Categories';
import { Sort } from '../sort/Sort';

export const ContentTop = ({ list, loading }) => {
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <BlockCards list={list} loading={loading} />
    </>
  );
};
