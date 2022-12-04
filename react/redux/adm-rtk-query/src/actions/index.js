
//Save to refresh memory

// export const fetchHeroes = (request) => (dispatch) => {
//   dispatch(heroesFetching());
//   request('http://localhost:3001/heroes')
//     .then((data) => dispatch(heroesFetched(data)))
//     .catch(() => dispatch(heroesFetchingError()));
// };

// export const fetchFilters = (request) => (dispatch) => {
//   dispatch(filtersFetching());
//   request('http://localhost:3001/filters')
//     .then((data) => dispatch(filtersFetched(data)))
//     .catch(() => dispatch(filtersFetchingError()));
// };

// export const changedActiveFilter = (filter) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: 'CHANGED_ACTIVE_FILTER',
//       payload: filter,
//     });
//   }, 100);
// };
// case 'CHANGED_ACTIVE_FILTER':
//     return {
//       ...state,
//       activeFilter: action.payload,
//     };

// export const heroesFetched = (heroes) => {
//   return {
//     type: 'HEROES_FETCHED',
//     payload: heroes,
//   };
// };
// export const heroesFetching = createAction('HEROES_FETCHING');
// export const heroesFetched = createAction('HEROES_FETCHED');
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// export const heroDeleted = createAction('HERO_DELETED');
// export const heroCreated = createAction('HERO_CREATED');
