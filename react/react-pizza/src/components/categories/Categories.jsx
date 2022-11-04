import classNames from 'classnames';
import { useState } from 'react';

export const Categories = () => {
  const [currentCategories, setCurrentCategories] = useState(0);

  const categories = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ];

  const onChangeCategories = (index) => {
    setCurrentCategories(index);
  };

  const sortList = (list) => {
    const generate = list.map(({ id, name }) => {
      const classes = classNames({
        active: id === currentCategories,
      });
      return (
        <li onClick={() => onChangeCategories(id)} key={id} className={classes}>
          {name}
        </li>
      );
    });
    return <ul>{generate}</ul>;
  };

  const list = sortList(categories);

  return <div className="categories">{list}</div>;
};
