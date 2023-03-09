function slider({container, slide, next, prev, totalCounter, currentCounter, wrapper, field}) {
  const mainSlider = document.querySelector(slide),
  slids = mainSlider.querySelectorAll(container),
  prevArrow = mainSlider.querySelector(prev),
  nextArrow = mainSlider.querySelector(next),
  slideCurrrent = mainSlider.querySelector(currentCounter),
  slideTotal = mainSlider.querySelector(totalCounter),
  slidesWripper = mainSlider.querySelector(wrapper),
  slidesField = mainSlider.querySelector(field),
  width = window.getComputedStyle(slidesWripper).width;

  let slideIndex = 1;
  let offset = 0;

  if (slids.length < 10) {
    slideTotal.textContent = `0${slids.length}`;
    slideCurrrent.textContent = `0${slideIndex}`;
  } else {
    slideTotal.textContent = slids.length;
    slideCurrrent.textContent = slideIndex;
  }

  slidesField.style.cssText = "display: flex; transition: 0.5s all;";
  slidesWripper.style.overflow = "hidden";
  slidesField.style.width = 100 * slids.length + "%";

  slids.forEach((slide) => {
    slide.style.width = width;
  });

  mainSlider.style.position = "relative";

  const indicators = document.createElement("ol"),
    dots = [];

  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center; 
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  mainSlider.append(indicators);

  for (let i = 0; i < slids.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    if (i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }

  nextArrow.addEventListener("click", () => {
    if (offset == searchNum(width) * (slids.length - 1)) {
      offset = 0;
    } else {
      offset += searchNum(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slids.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    actionCurrent(slideIndex, slideCurrrent);
    dotsOpacity(dots);
  });

  prevArrow.addEventListener("click", () => {
    if (offset == 0) {
      offset = searchNum(width) * (slids.length - 1);
    } else {
      offset -= searchNum(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slids.length;
    } else {
      slideIndex--;
    }

    actionCurrent(slideIndex, slideCurrrent);
    dotsOpacity(dots);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;
      offset = searchNum(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slids.length < 10) {
        slideCurrrent.textContent = `0${slideIndex}`;
      } else {
        slideCurrrent.textContent = slideIndex;
      }

      dotsOpacity(dots);
    });
  });

  function actionCurrent(index, cur) {
    if (slids.length < 10) {
      cur.textContent = `0${index}`;
    } else {
      cur.textContent = index;
    }
  }

  function dotsOpacity(count) {
    count.forEach((dot) => (dot.style.opacity = ".5"));
    count[slideIndex - 1].style.opacity = 1;
  }

  function searchNum(str) {
    return +str.replace(/\D/g, "");
  }
}

export default slider;
// module.exports = slider;