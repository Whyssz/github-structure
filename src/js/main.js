import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

/*
I know about the warnings associated with boostrap, but I will not eliminate them at this time, 
this project is used to practice and do not intend to use it in the future, which at this time, 
it would be a waste of time
*/

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-current');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  forms();
});
