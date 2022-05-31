import modal from './modules/modal';
import slider from './modules/slider';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTstInputs';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modal();
  slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  slider('.main-slider-item', 'vertical');
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
});