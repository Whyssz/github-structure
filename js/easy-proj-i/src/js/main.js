import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState'; 
import timer from './modules/timer';
import images from './modules/images';

/*
I know about the warnings associated with boostrap, but I will not eliminate them at this time, 
this project is used to practice and do not intend to use it in the future, which at this time, 
it would be a waste of time
*/

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let modaleState = {};
  let deadline = '2022-09-28';
  
  changeModalState(modaleState);
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-current');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img','do_image_more', 'inline-block');
  forms(modaleState);
  timer('.container1', deadline);
  images();
});
