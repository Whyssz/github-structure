import Slider from './slider';

export default class MiniSlider extends Slider {
  constructor (container, prev, next, activeClass, animate, autoPlay, timer) {
    super(container, prev, next, activeClass, animate, autoPlay, timer);
  }

  decorizeSlides () {
    this.slides.forEach(slide => {
      slide.classList.remove(this.activeClass);
      if (this.animate) {
        slide.querySelector('.card__title').style.opacity = '0.4';
        slide.querySelector('.card__controls-arrow').style.opacity = '0';
      }

      if (slide.tagName == 'BUTTON') {
        let indexBtn = this.slides[this.slides.length - 4];
        this.container.insertBefore(indexBtn, slide);
      }
    });


    this.slides[0].classList.add(this.activeClass);

    if (this.animate) {
      this.slides[0].querySelector('.card__title').style.opacity = '1';
      this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
    }
  }

  nextSlide() {
    this.container.appendChild(this.slides[0]);
    this.decorizeSlides(); 
  }

  bindSLides () {
    this.next.addEventListener('click', () => this.nextSlide());

    this.prev.addEventListener('click', () => {
      let active = this.slides[this.slides.length - 1];
      this.container.insertBefore(active, this.slides[0]);
      this.decorizeSlides();  
    });
  }

  actionAutoplay (area, event) {
  if (event == 'mouseenter') {
      area.addEventListener(event, () => {
        clearInterval(this.timer);
      });
    } else {
      area.addEventListener(event, () => {
        this.timer = setInterval(() => this.nextSlide(), 2000);
      });
    }
  }

  init () {
    this.container.style.cssText = `
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      align-items: flex-start;
    `;

    this.bindSLides();
    this.decorizeSlides();
    
    if (this.autoPlay) {
      const parentBtn = this.next.parentNode || this.prev.parentNode;
      
      this.timer = setInterval(() => this.nextSlide(), 2000);
    
      this.actionAutoplay(this.container, 'mouseenter');
      this.actionAutoplay(parentBtn, 'mouseenter');
      this.actionAutoplay(this.container, 'mouseleave');
      this.actionAutoplay(parentBtn, 'mouseleave');
    }
  }
}