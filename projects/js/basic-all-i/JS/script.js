import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener("DOMContentLoaded", () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  calc();
  cards();
  forms("asform", modalTimerId);
  modal("[data-modal]", ".modal", modalTimerId);
  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");
  timer(".timer", "2022-09-30");
  slider({
    container: ".offer__slide",
    slide: ".offer__slider",
    next: ".offer__slider-next",
    prev: ".offer__slider-prev",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapper: ".offer__slider-wrapper", 
    field: ".offer__slider-inner"
  });
});

/*


*/