// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { filtersFetched } from '../../actions';

const HeroesFilters = () => {
  const { filters } = useSelector((state) => state);
  const { request } = useHttp();
  const dispatch = useDispatch();

  useEffect(() => {
    request('http://localhost:3001/filters')
      .then((data) => dispatch(filtersFetched(data)))
      .catch((err) => console.log(err));
  }, []);

  const renderFiltersBtn = () => {
    const btnList = filters.map(({ value, label, clases }) => {
      return <button key={value} className={clases}>{label}</button>;
    });
		console.log(btnList)
    return <>{btnList}</>;
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {renderFiltersBtn()}
          {/* <button className="btn btn-outline-dark active">Все</button>
          <button className="btn btn-danger">Огонь</button>
          <button className="btn btn-primary">Вода</button>
          <button className="btn btn-success">Ветер</button>
          <button className="btn btn-secondary">Земля</button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
