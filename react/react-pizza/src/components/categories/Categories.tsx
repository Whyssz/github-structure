import classNames from 'classnames';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/reducers/filterSlice';

interface CategoriesType {
  id: number;
  name: string;
};

const categories: CategoriesType[] = [
  { id: 0, name: 'Все' },
  { id: 1, name: 'Мясные' },
  { id: 2, name: 'Вегетарианская' },
  { id: 3, name: 'Гриль' },
  { id: 4, name: 'Острые' },
  { id: 5, name: 'Закрытые' },
];

interface CatergoriesId {
  categoryId: number;
}

export const Categories: React.FC<CatergoriesId> = memo(({ categoryId }) => {
  const dispatch = useDispatch();

  const sortList = (list: CategoriesType[]) => {
    const generate = list.map(({ id, name }) => {
      const classes = classNames({
        active: id === categoryId,
      });
      return (
        <li
          onClick={() => dispatch(setCategoryId(id))}
          key={id}
          className={classes}
        >
          {name}
        </li>
      );
    });
    return <ul>{generate}</ul>;
  };

  const list = sortList(categories);

  return <div className="categories">{list}</div>;
});
