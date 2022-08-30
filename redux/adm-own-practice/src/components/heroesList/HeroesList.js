import { useCallback } from 'react';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../../styles/index.scss';
// import { createSelector } from '@reduxjs/toolkit';

const HeroesList = () => {
  // const filteredHeroesSelector = createSelector(
  //   (state) => state.heroes.heroes,
  //   (state) => state.filters.activeFilter,
  //   (heroes, filter) => {
  //     if (filter === 'all') {

  //     }
  //   }
  // );

  const onDelete = useCallback((id) => {}, []);

  // if (heroesLoadingStatus === 'loading') {
  //   return <Spinner />;
  // } else if (heroesLoadingStatus === 'error') {
  //   return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  // }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      <CSSTransition classNames="hero" key="epmty-list" timeout={500}>
        return <h5 className="text-center mt-5">Героев пока нет</h5>;
      </CSSTransition>;
    }

    return arr.map(({ id, ...props }) => {
      return (
        <CSSTransition classNames="item" key={id} timeout={500}>
          <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
        </CSSTransition>
      );
    });
  };

  // const elements = renderHeroesList(filteredHeroes);

  return (
    <TransitionGroup component="ul" className="list-items">
      {/* {elements} */}
    </TransitionGroup>
  );
};

export default HeroesList;
