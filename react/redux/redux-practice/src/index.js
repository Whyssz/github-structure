import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import reducer from './reducer';
import App from './components/App';
import { Provider } from 'react-redux';


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

createRoot(document.getElementById('root')).render(
  <Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
);

// Classic no-hook
// const { getState, subscribe, dispatch } = store;
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

// <Counter
//   counter={getState().value}
//   inc={inc}
//   dec={dec}
// rnd={() => {
//     const value = Math.floor(Math.random() * 10);
//     rnd(value);
//   }}
// />;

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }
// cosnt incDispatch = bindActionCreator(inc, dispatch)

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd,
// }, dispatch);
