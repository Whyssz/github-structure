/* REG

  exec - поиск с возвратом массива данных 
  test - тест, ответ true/false
  match - поиск совпадений, ответ массив данных
  search - поиск с ответом index or -1 (false)
  replace - поиск совпадений и замена

	BASE
		^ - начало строки
		$ - конец строки
		 . - любой одиночный символ
		[] - диапазон
		() - группировка (* | #)
		\ - экранирование
		\d - любая цифра
		\D - всё кроме цифр
		\s - пробел
		\S - всё кроме пробела
		\w - буква
		\W - всё кроме букв
		\b - граница слова
		\B - нет границ
		___________________________________
		n{4} - искать n подряд 4 раза
		n{1,3} - искать n от 1 до 3
		* - от нуля и выше
		+ - от 1 и выше
		? - ноль или 1 раз

all{
  https://github.com/jquense/yup
}
many{
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)

  /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,


}
password{
 /^[0-9a-zA-Z]{4,}$/
}

Example:
  const regExpDic = {
    email: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,
    password: /^[0-9a-zA-Z]{4,}$/,
  };
*/

/* MASK:
  function createMask(event) {
    
      let matrix = '+7 (___) ___ __ __',
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

    let inputs = document.querySelectorAll(selector); 

    inputs.forEach(input => {
      input.addEventListener('input', createMask);
      input.addEventListener('focus', createMask);
      input.addEventListener('blur', createMask);
    });
*/


