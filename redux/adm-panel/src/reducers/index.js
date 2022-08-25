const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filtersLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };
    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
      };
    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };
    case 'HERO_DELETED':
			const newHeroesList = state.heroes.filter(item => item.id !== action.payload)
			return {
				...state,
				heroes: newHeroesList,
			}
    case 'HERO_CREATED':
      const createNewList = [...state.heroes, action.payload]
      return {
        ...state,
        heroes: createNewList
      }
		case 'FILTERS_FETCHING':
			return {
				...state,
				filtersLoadingStatus: 'loading'
			}
		case 'FILTERS_FETCHED':
			return {
				...state,
				filters: action.payload,
				filtersLoadingStatus: 'idle'
			}
		case 'FILTERS_FETCHING_ERROR':
			return {
				...state,
				filtersLoadingStatus: 'error'
			}



    default:
      return state;
  }
};

export default reducer;
