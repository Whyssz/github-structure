import Slider from './modules/slider';
import VideoPlay from './modules/playVideo';

window.addEventListener('DOMContentLoaded',() => {
  'use strict';

  const slider = new Slider('.page', '.next');
  slider.render();

  const player = new VideoPlay('.showup .play', '.overlay');
  player.init();
});