import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

// I am well aware that there are warnings, but so far I do not plan to fix them, I just practice and do not want to get into the work boostrap, then I plan to work without it, and waste time on this now can not

window.addEventListener('DOMContentLoaded', () => {

  modals();
  tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'slick-current');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

});
