const slider = (slides, dir, prev, next) => {
  let slideIndex = 1,
      paused = false;

  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.style.display = 'none';
      item.classList.add('animated');
    });

    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function pluseSlide(n){
    showSlides(slideIndex += n);
  }

  try {
    const prevArrow = document.querySelector(prev),
    nextArrow = document.querySelector(next);

    prevArrow.addEventListener('click', () => {
      pluseSlide(-1);
      items[slideIndex - 1].classList.remove('fadeInLeft');
      items[slideIndex - 1].classList.add('fadeInRight');
    });

    nextArrow.addEventListener('click', () => {
      pluseSlide(1);
      items[slideIndex - 1].classList.remove('fadeInRight');
      items[slideIndex - 1].classList.add('fadeInLeft');
    });
  } catch (e) {}

  
  function activeAnimation() {
    document.querySelector('.main-slider').style.overflow = 'hidden';

    if (dir === 'vertical') {
      paused = setInterval(function() {
        pluseSlide(1);
        items[slideIndex - 1].classList.add('fadeInUp');
      }, 5000);
    } else {
      paused = setInterval(function() {
        pluseSlide(1);
        items[slideIndex - 1].classList.remove('fadeInLeft');
        items[slideIndex - 1].classList.add('fadeInRight');
      }, 7000);
    }
  }

  activeAnimation();

  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  
  items[0].parentNode.addEventListener('mouseleave', () => {
    activeAnimation();
  });
};

export default slider;