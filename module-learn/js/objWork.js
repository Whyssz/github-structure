/*
defineProperty - определить значения, просмотреть взаимодействие
  Object.defineProperty(window, 'globalVar', {
      set: function(value) {
        console.log(value);
        debugger;
      }
    }); 
hasOwnProperty - проверяет содержание свойства
isPrototypeOf - проверяет прототип (цепоочку вхождения)
toString - текстовое значение объекта [object Object]
*valueOf - [object Object] [object Object] => normal data view
*propertyIsEnumerable - перечисляемое свойство

Apply - вызов функции с указанным контекстом (this) с передачем аргументов в массиве
Call - вызов функции с указанным контекстом (this) с одним аргументом
Bind - привязать контекст (без вызова)
*/