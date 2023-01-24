import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlay from './modules/playVideo';
import Difference from './modules/difference';
import Forms from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded',() => {
  'use strict';
 
  const slider = new MainSlider({btns: '.next', container: '.page'});
  slider.render();

  const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
  modulePageSlider.render();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider', 
    next: '.showup__next',
    prev: '.showup__prev',
    activeClass: 'card-active',
    animate: true
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    next: '.modules__info-btns .slick-next',
    prev: '.modules__info-btns .slick-prev',
    activeClass: 'card-active',
    animate: true,
    autoPlay: true
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    next: '.feed__slider .slick-next',
    prev: '.feed__slider .slick-prev',
    activeClass: 'feed__item-active'
  });
  feedSlider.init();

  new VideoPlay('.showup .play', '.overlay').init();
  new VideoPlay('.module__video-item .play', '.overlay').init();

  new Difference('.officerold', '.officernew', '.officer__card-item').init();
  new Forms('form', 'assets/question.php').init();

  new ShowInfo('.module__info-show').init();

  new Download('.download').init();
});