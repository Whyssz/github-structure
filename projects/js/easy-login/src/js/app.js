import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './view/form';
import { login } from './services/auth.service';
import { notify } from './view/notification';
import { getNews } from './services/news.service';


window.addEventListener('DOMContentLoaded',() => {
  'use strict'; 

  const { form, inputEmail, inputPassword } = UI;
  const inputs = [inputEmail, inputPassword];


  //Events
  form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
  });

  console.log(this);

  inputs.forEach(item => item.addEventListener('focus', () => removeInputError(item)));

  //Handlers
  async function onSubmit() {
    const isValidForm = inputs.every(el => {
      const isValidInput = validate(el);
      if (!isValidInput) showInputError(el);
      return isValidInput;
    });

    if (!isValidForm) return;

    try {
      await login(inputEmail.value, inputPassword.value);
      await getNews();
      form.reset();
      notify({ msg: 'Login success', className: 'aletr-success'});
    } catch (err) {
      notify({ msg: 'Login faild', className: 'alert-danger'});
      console.log(err);
    }
  }

});


