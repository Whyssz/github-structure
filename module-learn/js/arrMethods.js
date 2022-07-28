/*
  Methods______

  for if (of)
  forEach
  map
  filter
  reduce
  every/some
  sort
  find
  

  function getTextFromUl(item) {
    const el = document.querySelector(item);
    const [...links] = el.querySelectorAll('a');
    return links.map(link => link.textContent);
  }
  console.log(getTextFromUl('ul'));

    const product = str.split(' ').sort().join(', ');
    const product = str.split('').reverse().join('');

    const newArr = oldArr.slice();

    const newWW = {...ww};

    Filter__________________________

    const arr = ['Dima', 'Novik', 'Lev', 'Alex', 'Arturio'];

    const shortName = arr.filter(function(name) {
      return name.length < 5;
    });

    EX-practice: 
      const newList = list.filter(item => name.indexOf(currTerm) > -1) // ret item (no index, rule > -1)

    Map_____________________________
    const arr = ['Dima', 'Novik', 'Lev', 'Alex', 'Arturio'];

    const modify = arr.map(item => item.toLowerCase()); 
    
    console.log(modify);

    Every/some______________________
    const arr = ['Dima', 'Novik', 'Lev', 'Alex', 'Arturio'];

    console.log(arr.some(item => typeof(item) === 'number')); //false
    console.log(arr.every(item => typeof(item) === 'string')); //true

    Reduce__________________________
    // const arr = ['Dima', 'Novik', 'Lev', 'Alex', 'Arturio'];
    const arr = [1, 4, 5, 8];

    const reduceArr = arr.reduce((all, current) => `${all}, ${current}`,);

    console.log(reduceArr);

    REDUCE practic 

    // const objUsers = users.reduce((acc, user) => {
    //   acc[user._id] = user;
    //   return acc; 
    // }, {}); <-- create obj end push of acc


    FIND______________

    const findUser = users.find(user => user.name === 'Valencia Carrillo');


    SORT__________________

    const arrSort = ['Dima', 'Alex', 'Oleg', 'Bivec'];
    arrSort.sort();

    const numSort = [1,10,3,2,50,40];
    numSort.sort((prev, next) => prev - next);
    
    SORT REVERS TO NAME
    if (nameA < nameB) -1 if (nameA > nameB) reverse 1
    const sortList = elements.sort((prev, next) => {
    return prev.textContent > next.textContent ? -1 : 1; 
  });

*/