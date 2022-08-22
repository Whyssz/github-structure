import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './action';

const store = createStore(reducer);
const { getState, subscribe, dispatch } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
};

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args))
// }
// cosnt incDispatch = bindActionCreator(inc, dispatch)

// const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
//   incDispatch: inc,
//   decDispatch: dec,
//   rndDispatch: rnd,
// }, dispatch);

const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

createRoot(document.getElementById('root')).render(<Fragment></Fragment>);
