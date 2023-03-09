// import checkNumInputs from './checkNumInputs';
import { postData } from "../services/requests";

const forms = (state) => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        select = document.querySelectorAll('select'),
        upload = document.querySelectorAll('[name= "upload"]');

  // checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: 'Спасибо, всё прошло хорошо!',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  const path = {
    designer: 'assets/server.php',
    question: 'assets/question.php'
  };


  const clearInputs = () => {
    input.forEach(item => {
      item.value = '';
    });
    upload.forEach(item => {
      item.previousElementSibling.textContent = 'Файл не выбран';
    });
    select.forEach(item => {
      // if (item.value == 0 || '') {
      //   console.dir(item[0]);
      // }
      item.value = item[0].value;
    });
    document.querySelector('.calc-price').textContent = "Для расчета нужно выбрать размер картины и материал картины";
  };
  

  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files[0]);
      
      let formImg = 'image',
        dot,
        arr = item.files[0].name.split('.');
    
      arr[0].length > 5 ? dot = '...' : dot = '.';
      const name = arr[0].substring(0, 5) + dot + arr[1];
      item.previousElementSibling.textContent = name;
      state[formImg] = item.files[0]; 
    });
  });

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.parentNode.appendChild(statusMessage);

      item.classList.add('animated', 'fadeOutUp');

      setTimeout(() => {  
        item.style.display = 'none';
      }, 400);

      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
 
      const formData = new FormData(item);
      
      let api;
      item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question; 
      // console.log(api);
      if (item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }
    

      
      postData(api, formData)
        .then(res => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          statusImg.setAttribute('src', message.fail);
          textMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            item.style.display = 'block';
            item.classList.remove('fadeOutUp');
            item.classList.add('fadeInUp');

            document.querySelectorAll('[data-modal]').forEach(item => item.style.display = 'none');
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
          }, 3000);
        });

    });
  });
};

export default forms;
