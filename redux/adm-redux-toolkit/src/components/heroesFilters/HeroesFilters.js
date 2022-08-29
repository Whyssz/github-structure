import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changedActiveFilter, fetchFilters } from '../heroesList/filtersSlice';
import classNames from 'classnames';

const HeroesFilters = () => {
  const { filters, activeFilter } = useSelector((state) => state.filters);
  // cosnt filters = selectorAll(store.getState())
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  const listBtns = (list) => {
    return list.map(({ name, clases, label }) => {
      const currClass = classNames('btn', clases, {
        active: name === activeFilter,
      });
      return (
        <button
          key={name}
          className={currClass}
          onClick={() => dispatch(changedActiveFilter(name))}
        >
          {label}
        </button>
      );
    });
  };

  const btns = listBtns(filters);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">{btns}</div>
      </div>
    </div>
  );
};

export default HeroesFilters;
