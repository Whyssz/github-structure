import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { DataProvider } from './DataContext';

createRoot(document.getElementById('root')).render(
  <Fragment>
    <DataProvider>
      <App />
    </DataProvider>
  </Fragment>
);
