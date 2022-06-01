import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTstInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let calcState = {}; 

  modal();
  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');
  forms(calcState);
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc(calcState);
});