import MainSlider from './modules/slider/slider-main';
import VideoPlay from './modules/playVideo';

window.addEventListener('DOMContentLoaded',() => {
  'use strict';
 
  const slider = new MainSlider({btns: '.next', page: '.page'});
  slider.render();

  const player = new VideoPlay('.showup .play', '.overlay');
  player.init();
});