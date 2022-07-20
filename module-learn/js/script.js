/*

*/

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  function setColor(el) {
    const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.background = color;
  }

  function setBg() {
    let elements = [this];
    let elDropDown = this;

    while (elDropDown) {
      elements = [...elements, ...elDropDown.children];
      elDropDown = elDropDown.children[elDropDown.children.length - 1];
    }

    elements.forEach((el, i) => {  
     setTimeout(setColor, 200 * (i + 1), el);
    });
  }

  function resetColor() {
    this.style.backgroundColor = '';
  }

  document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseenter', setBg);
    item.addEventListener('mouseleave', resetColor);
  });

  let b = 19;
  console.log(b++);
});
