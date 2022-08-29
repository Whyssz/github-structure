/*
_____toolkit - tool for your comfort usage
		configureStore - control scheme
		getDefaultMiddleware - arr all middleware
		Immutability Middleware - check mutability (rule)
		Serializability Middleware - check (rule) for symbol
		createListenerMiddleware - eventListener for additional locig
	
	_____toolkitAction 
    1. configureStore - simple scheme for createStore
		2. createAction - simplification of repetitive actions
		3. createReducer - simplification of repetitive reducers
    4. createSlice - merge action and reducer to consolidation
    5. extraReducer - consolidation with Slice
    6. createAsyncThunk + extraReduce
    7. createEntityAdapter.getInitialState ...

    EX:  
      1. {
          const store = configureStore({
          reducer: { heroes, filters },
          middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
          devTools: process.env.NODE_ENV !== 'production',
        }
      2. {
        export const heroesFetching = createAction('HEROES_FETCHING');
      }
      3.{
          const heroes = createReducer(initialState, (builder) => {
          builder
            .addCase(heroesFetching, (state) => {
              state.heroesLoadingStatus = 'loading';
            })
      }
      4. {
          import { createSlice } from '@reduxjs/toolkit';

          const initialState = {
            heroes: [],
            heroesLoadingStatus: 'idle',
          };

          const heroesSlice = createSlice({
            name: 'heroes',
            initialState,
            reducers: {
              heroesFetching: (state) => {
                state.heroesLoadingStatus = 'loading';
              },
              heroesFetched: (state, action) => {
                state.heroesLoadingStatus = 'idle';
                state.heroes = action.payload;
              },
              heroesFetchingError: (state) => {
                state.heroesLoadingStatus = 'error';
              },
              heroCreated: (state, action) => {
                state.heroes.push(action.payload);
              },
              heroDeleted: (state, action) => {
                state.heroes = state.heroes.filter((item) => item.id !== action.payload);
              },
            },
          });

          const { actions, reducer } = heroesSlice;

          export default reducer;
          export const {
            heroesFetching,
            heroesFetched,
            heroesFetchingError,
            heroCreated,
            heroDeleted,
          } = actions;
      }
      5. {

      }
      6. {

      }
*/