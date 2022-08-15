import {React, Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import BootstrapTest from './BootstrapTest'
// import App from './App';
// import AppToo from './Ref';
import Memo from './Memo';
// import Slider from './Slider';


import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    {/* <Slider/> */}
    <Memo/>
    {/* <AppToo/> */}
    {/* <App /> */}
  </Fragment>
);
