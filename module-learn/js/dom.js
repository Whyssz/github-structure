
/* 
  DOM___________________________________

  const elms = document.querySelectorALl(div);
  Array.from(elms).map...
    OR___
  const [...elms] = documens.querySelectorAll(div);

  const list = document.querySelector('ul + span'); <-- first next element

  const list = document.querySelector('ul ~ a'); <-- первый из таких тегов после элемента

  SORT + REWRITE value 
  
  let elements = [e.currentTarget];
  let currentElement = e.currentTarget;

  while (currentElement){
    elements = [...elements, ...currentElement.children];
    currentElement = currentElement.children[currentElement.children.length - 1];
  }

  ___
    .firstElementChild
    .nextElementSibling
    .prevoousElementSibling
    .parentElement
    .closest('ul')
    .contains('class')
    .toggle
    .setAttribute / hasAttribute / removeAttribute
    .getAttribute / dataset 

    CONTROL___
    .innerHTML =
    .textContent =
    .appendChild / .append
    .insertAdjacentHTML('where', 'html'); вставка HTML
    .insertAdjacentElement('where', 'el'); вставка элемента
    .createDocumentFragment(); <-- vanish block
    .remove / (removceChild*)

*/

/*
    Browsers____________________________

    const box = document.getElementById('box');

    box.style.cssText = 'background-color: green; width: 300px';

    const myElm = document.createElement('div');

    myElm.classList.add('black');

    document.body.append(myElm);

    myElm.innerHTML = 'Text'; //textContent

    elem1.replaceWidth(elem2);

  */