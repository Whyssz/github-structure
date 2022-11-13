import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../../redux/reducers/filterSlice';

const categories = [
  { id: 0, name: 'Все' },
  { id: 1, name: 'Мясные' },
  { id: 2, name: 'Вегетарианская' },
  { id: 3, name: 'Гриль' },
  { id: 4, name: 'Острые' },
  { id: 5, name: 'Закрытые' },
];

export const Categories = () => {
  const { categoryId } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const sortList = (list) => {
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
};
