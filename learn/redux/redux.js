/*
  Redux - инструмент управляющий состоянием данных (state с большим количеством сущностей)

  Schem:
    action - func-action 
      ex: export const inc = () => ({ type: 'INC' });
    reducer - store
    ex: const reducer = (state = initialValue, action) =>..

  _________bindActionCreators

  EX:
    const bindActionCreator = (creator, dispatch) => (...args) => {
        dispatch(creator(...args))
      }
      cosnt incDispatch = bindActionCreator(inc, dispatch)

      const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
        incDispatch: inc,
        decDispatch: dec,
        rndDispatch: rnd,
      }, dispatch);

    const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

  _____store enchancers - modify request dispatch ()
		ex: const enhancher =
					(createStore) =>
					(...args) => {
						const store = createStore(...args);

						const oldDispatch = store.dispatch;
						store.dispatch = (action) => {
							if (typeof action === 'string') {
								return oldDispatch({
									type: action,
								});
							} else {
								return oldDispatch(action);
							}
						};
						return store;
				};
  _____compose (merge func)
		ex: 
			const store = createStore(
				combineReducers(
					{ heroes, filters }),
				compose(
					enhancher,
					window.__REDUX_DEVTOOLS_EXTENSION__ &&
						window.__REDUX_DEVTOOLS_EXTENSION__()
				)
			);
	_____middleware (add functional or modify this func)
		const stringMiddleware = (***) => (next) => (action) => {
			if (typeof action === 'string') {
				return next({
					type: action,
				});
			}
			return next(action);
		};
		*** - it's store = { dispatch, getStore}
		
		const store = createStore(
			combineReducers({ heroes, filters }),
			compose(
				applyMiddleware(stringMiddleware),
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
			)
		);

	
*/