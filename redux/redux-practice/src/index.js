import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';

const initialValue = { value: 0 };

const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        value: state.value + 1,
      };
    case 'DEC':
      return {
        ...state,
        value: state.value - 1,
      };
    case 'RANDOM':
      return {
        ...state,
        value: state.value * action.payload
      }
    default:
      return state;
  }
};

const store = createStore(reducer);

const update = () => {
  document.getElementById('counter').textContent = store.getState().value;
};

store.subscribe(update);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = (value) => ({ type: 'RANDOM', payload: value });

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});

document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch(rnd(value));
});

createRoot(document.getElementById('root')).render(<Fragment></Fragment>);
