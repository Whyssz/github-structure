import { BlockCards } from '../blocCards/BlockCards';
import { Categories } from '../categories/Categories';
import { Sort } from '../sort/Sort';

export const ContentTop = ({
  list,
  loading,
  categoryId,
  sortType,
  setCategoryId,
  setSortType
}) => {
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(category) => setCategoryId(category)}
        />
        <Sort value={sortType} onChangeSort={(type) => setSortType(type)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <BlockCards list={list} loading={loading} />
    </>
  );
};
