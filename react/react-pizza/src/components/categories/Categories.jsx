import classNames from 'classnames';

export const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    { id: 0, name: 'Все' },
    { id: 1, name: 'Мясные' },
    { id: 2, name: 'Вегетарианская' },
    { id: 3, name: 'Гриль' },
    { id: 4, name: 'Острые' },
    { id: 5, name: 'Закрытые' },
  ];

  const sortList = (list) => {
    const generate = list.map(({ id, name }) => {
      const classes = classNames({
        active: id === value,
      });
      return (
        <li onClick={() => onChangeCategory(id)} key={id} className={classes}>
          {name}
        </li>
      );
    });
    return <ul>{generate}</ul>;
  };

  const list = sortList(categories);

  return <div className="categories">{list}</div>;
};
