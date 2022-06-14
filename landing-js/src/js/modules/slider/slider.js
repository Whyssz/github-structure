export default class Slider {
  constructor({container = null, btns = null, prev = null, next = null, activeClass = '', autoPlay, animate} = {}) {
    this.container = document.querySelector(container);
    try {this.slides = this.container.children;} catch (e){}
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoPlay = autoPlay;
    this.slideIndex = 1; 
    this.sortList;
    this.timer;
    try {
      this.additionalNext = document.querySelectorAll('.nextmodule');
      this.additionalPrev = document.querySelectorAll('.prevmodule');
    } catch (e) {}
  }
}