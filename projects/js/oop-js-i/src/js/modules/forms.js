export default class Forms {
  constructor (forms, url) {
    this.forms = document.querySelectorAll(forms);
    this.path = url;
    this.message = {
      loading: "Загрузка...",
      success: 'Спасибо, всё прошло хорошо!',
      failure: 'Что-то пошло не так...',
    };
    this.inputs = document.querySelectorAll('input');
    this.select = document.querySelectorAll('select');
  }

  clearInputs() {
    this.inputs.forEach(item => {
      item.value = '';
    });
    this.select.forEach(item => {
      // item.value = item[0].value;
      item.value = item[0].label;
    });
  }

  initNumberMask () {
    let setCursorPosition = (pos, elem) => {
      elem.focus();
  
      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        // Check for old browsers
        let range = elem.createTextRange(); 
  
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    };
  
    function createMask(event) {
      let matrix = '+1 (___) ___-____',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');
        
      if (def.length >= val.length) {
        val = def;
      }
     
      this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
  
      if (event.type === 'blur') {
        if (this.value.length == 2) {
          this.value = '';
        }
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
  
    let inputs = document.querySelectorAll('[name="phone"]'); 
  
    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');
  
    mailInputs.forEach(input => {
      input.addEventListener('keypress', function(e){
        if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
          e.preventDefault();
        }
      });
    });
  }

  async postData (url, data) {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  }

  init () {
    this.checkMailInputs();
    this.initNumberMask();

    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
          color: #000;
          font-size: 30px;
          font-weight: 700;
        `; 
        statusMessage.textContent = this.message.loading;
        form.appendChild(statusMessage);

        const formData = new FormData(form);

        this.postData(this.path, formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 3000);
          });
      });
    });
  }
}