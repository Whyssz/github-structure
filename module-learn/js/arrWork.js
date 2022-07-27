/* 
  length

  split - строу в массив
  join - массив в строку
  slice - комирует часть массива/строки
  includes - содержит ли массив/строка элемент
  find - возврат первого значения (true)
  splice(index, count, elem1....) - удаляет count элементов с index  и подставляет elems
  indexof - ищет по переданному selector
  findIndes - ищет индекс по переданному селектору через func (elem => elem.id === id)

  shift - удаляет с конца элемент и возвращает его
  unshif - добавляет в начало массива элемента 
  pop - удаляет последний элемент и возвращает его
  push - доавляет в конец массива
  revers - переворачивает строку/массив

  arr.concat(item) - копирует массив и подставляет в коней item
  arr.fill(value, start, end) - заполняет массив value (end not in)
  flat - поднимает вложенность массива 
    var arr2 = [1, 2, [3, 4, [5, 6]]];
    arr2.flat();
    [1, 2, 3, 4, [5, 6]]

    
  ITERATORS
  keys - получить ключи массива
    var arr = ['a', , 'c'];
    var sparseKeys = Object.keys(arr);
    var denseKeys = [...arr.keys()];
    console.log(sparseKeys); // [0, 2]
    console.log(denseKeys);  // [0, 1, 2]
  values - получает значения массива
    var arr = ['w', 'y', 'k', 'o', 'p'];
    var eArr = arr.values();
    console.log(eArr.next().value); // w
*/