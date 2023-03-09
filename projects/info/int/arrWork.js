/* 
  split('') - str in arr '' => [1,2,3]
  join(',') - arr in str [] => '1,2,3'
  slice - copy part of str
  splice(index, count, elem1....) - удаляет count элементов с index  и подставляет els
  includes - содержит ли массив/строка элемент
  find - возврат первого значения (true)
  indexOf - ищет по переданному selector
  lastIndexOf - поиск с конца
  findIndex - ищет индекс по переданному селектору через func (elem => elem.id === id)

  shift - удаляет с конца элемент и возвращает его
  unshift - добавляет в начало массива элемента 
  pop - удаляет последний элемент и возвращает его
  push - добавляет в конец массива
  revers - переворачивает строку/массив

  arr.concat(item) - копирует массив и подставляет в коней item
  arr.fill(value, start, end) - заполняет массив value (end not in)
  flat - поднимает вложенность массива 
  let arr2 = [1, 2, [3, 4, [5, 6]]];
  arr2.flat(); //flat(Infinity)
  [1, 2, 3, 4, [5, 6]]

*/
