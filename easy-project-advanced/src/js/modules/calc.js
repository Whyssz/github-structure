
const calc = (state) => {

  const sizePaint = document.querySelector('#size'),
    materialPaint = document.querySelector('#material'),
    optionsPaint = document.querySelector('#options'),
    promocode = document.querySelector('.promocode'),
    result = document.querySelector('.calc-price');
  let sum = 0;

  function calcFunc(selector, event, prop, res = 'price') {
    selector.addEventListener(event, (item) => {
      sum = Math.round((+sizePaint.value) * (+materialPaint.value) + (+optionsPaint.value)); 

      switch(item.target.nodeName) {
        case 'INPUT':
          if (promocode.value == 'IWANTPOPART') {
            state[prop] = true;
          }
          break;
        case 'SELECT':
          state[prop] = item.target.value;
          break;
      }

      if (sizePaint.value == '' || materialPaint.value == '') {
        result.textContent = 'Пожалуйсат, выберите размер и материал картины';
      } 
      else {
        if (state.promo) {
          result.textContent = Math.round(sum * 0.7);
          state[res] = sum * 0.7; 
        } else {
          result.textContent = sum;
          state[res] = sum; 
        }
      }
      // console.log(item.target.nodeName);
      console.log(state);
    });
  }

  calcFunc(sizePaint, 'change', 'size');
  calcFunc(materialPaint, 'change', 'material');
  calcFunc(optionsPaint, 'change', 'options');
  calcFunc(promocode, 'input', 'promo');

  /*
    function calcFunc() {
        sum = Math.round((+sizePaint.value) * (+materialPaint.value) + (+optionsPaint.value)); 

        if (sizePaint.value == '' || materialPaint.value == '') {
          result.textContent = 'Пожалуйсат, выберите размер и материал картины';
        } else if (promocode.value == 'IWANTPOPART') {
          result.textContent = Math.round(sum * 0.7);
        } else {
          result.textContent = sum;
        }
      }

      sizePaint.addEventListener('change', calcFunc);
      materialPaint.addEventListener('change', calcFunc);
      optionsPaint.addEventListener('change', calcFunc);
      promocode.addEventListener('input', calcFunc);
      calcFunc();
  */
};

export default calc;