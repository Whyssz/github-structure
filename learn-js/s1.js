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
    addEneventListener_____________

    this. || a.currentTarget
    mouseover/mouseout - работают с всплытием
    mouseenter/mouseleave- без всплытия

    check menu___

    const itemAcc = document.querySelectorAll('.dropdown-item');
    let menuOpened = null;

    itemAcc.forEach(item => {
      item.addEventListener('click', function() {
        const dropMenu = this.querySelector('.dropdown-menu');
        const newMenu = dropMenu.classList.toggle('d-none');
        if (menuOpened && menuOpened !== dropMenu) {
          menuOpened.classList.add('d-none');
        }
        if (!newMenu) {
          menuOpened = dropMenu;
        }
      });
    });

  */

  /* 
    ________________________________
    import $ from 'jquery';

    $(document).ready(function(){
      $('.list-item:first').hover(function(){
        $(this).toggleClass('active');
      });

      $('.list-item:eq(2)').on('click', function(){
        $('.image:even').fadeToggle('slow');
      });

      $('.list-item:eq(4)').on('click', function(){
        $('image:odd').animate({
          opacity: 'toggle',
          height: 'toggle'
        }, 2000);
      });
    });
  */

  /* __________________________
      Call / Apply / Bind
        
      const proj = {
        name: 'AAA',
        price: 100,
        getPrice
      };
      const proj2 = {
        name: 'BBB',
        price: 200,
        getPrice
      };

      function getPrice(currency ='$') {
        return `${currency}${this.price}`;
      }

      // console.log(proj.getPrice()); <-- proj.getPrice.call(proj2); ***
      // console.log(getPrice.call(proj2, '+')); // Return(call function)
      // console.log(getPrice.apply(proj2, ['-'])); // Return(call function) much args
      // const getPriceBind = proj2.getPrice.bind(proj2, '3'); //bind this
      BIND
      let element = {
      height: 25,
      getHeight: function () {
        return this.height;
      }
    };

    let getElementHeight = element.getHeight; <-- element.getHeight.bind(element);
    getElementHeught();
  */


  /*
    EXPORT-IMPORT______________________
    'use strict';

    function sayHi(){
      console.log('Hello #2');
    }

    export default function  sumNum(a,b) {
      return console.log(a + b);
    }

    export {sayHi};

    import {sayHi as hello} from './main';
    import sumNum from './main';


    hello();
    sumNum(10, 5);

  */

  /*
    //INCAPSILATION

    class User {
      constructor (name, age) {
        this.name = name;
        this._age = age;
      }
    
      #surname = 'Shilov'; 

      say() {
        console.log(`Name: ${this.name} ${this.#surname}, age: ${this._age}`);
      }

      get surName() {
        return this.#surname;
      }

      set surName(str){
        this.#surname = str;
      }

    }

    const dima = new User('Dima', 24);
    // dima.say();

    // console.log(dima.set(''));
    // dima.set('any');
    // dima.age = 25;
    // dima.surName = 'Kupcov';
    // console.log(dima.surName);
    dima.say();

    // dima.say();

    Old style
    function User(name, age){
        this.name = name;
        this.age = age;
    
        function say(){
    
        }
    }

    Intermediate style

    class User{
            constructor(name, age) {
            this.name = name;
            this._age = age;
        }
        
      say(){
    
        }
    }

    New style

    class User{
            constructor(name, age) {
            this.name = name;
            this._age = age;
        }
    
        let name;
        let age;
    
        const say = () => {
    
        }
    }
  */

  /*
    CLOSURE___________________

    // function checkCred(){
    //   const login = 'admin';
    //   const password = 'pass';

    //   return {
    //     checkLogin(value){
    //       return login == value;
    //     },
    //     checkPass(value) {
    //       return password == value;
    //     }
    //   };
    // }

    // const check = checkCred();
    // console.log(check.checkLogin('admin'));
    // console.log(check.checkPass('pass'));
  */


  /* 
    REGULAR EXPRESSION________________

    str.match(regexp) ищет совпадения
    str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
    regexp.test(str) true or false if these is even one much


  */

  /*
    ARRY_____________________________

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

  /*

    PROMISE____________________________________

    console.log('Данные подготавливаются...');

    const req = new Promise(function(ressolve, reject){
      setTimeout(() => {
        console.log('Подготовка данных...');
      
        const obj = { 
          name: 'Product',
          price: 100
        };
      
        ressolve(obj);
      }, 2000);
    });

    req.then((data) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          data.status = 'order';  
          resolve(data);
          // reject();
        }, 2000);
      });
    }).then(data => {
      data.modify = true;
    }).then(data => {
      console.log(data);
    }).catch(() => {
      return console.error('Произошла ошибка');
    }).finnally(() => {
      console.log('Finnaly');
    });

    const test = time => {
    test(1000).then(() => console.log('1000'));
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
      });
    };

    // test(1000).then(() => console.log('1000'));
    // test(2000).then(() => console.log('2000'));

    Promise.all([test(1000), test(2000)]).then(() => {
      console.log('All');
    });

  */

  /*

    OBJECT_____________________________________

    __
    newOnbj instanceof oldObj <-- принадлежит ли

    const {border, bg} = options.color;
    console.log(border, bg)

    function copy(ourObj) {
      let newObj = {}

      for (let key in ourObj){
        newObj[key] = ourObj[key];
      }
      return newObj;
    }
    const clone = Object.assign({}, obj, ..) +easy copy 
    const player = Object.create(general);

    Object.setPrototypeOf(player, general);

    COPY JSON ++hard copy++

    const old = JSON.stringify(obj);
    const new = JSON.parse(old);


    const obj = {
      name: 'Dima',
      age: 24
    };

    let key = Object.keys(obj);
    console.log(key); //['name', 'age'];

    let values = Object.values(obj);
    console.log(values);// ['Dima', 24]

    let entries = Object.entries(obj);
    console.log(entries); // [['name', 'Dima'], ['age', 24]];
    let fromEnties = Object.fromEntries([['name', 'Dima'], ['age', 24]]);
    console.log(fromEnties); // {name: 'Dima', age: 24};
   

    DESCRIPTOR__________________ set / get

    const car = {
      brand: 'audi',
      year: 2019,
      get age() {
        return `Машина выпущена в ${this.year}`;
      },
      set: function() {
        this.year = 2021;
      }
    };

    Object.defineProperty(car, 'year', {
      // configurable: false,
      // enumerable: false,
      // writable: false
    });

    Object.defineProperty(window, 'globalVar', {
      set: function(value) {
        console.log(value);
        debugger;
      }
    });
    function foo() {
      globalVar = 10;
    }
    foo();

  */

  /*
  DEC / REST (...)______________________
    let user = {
      "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",
      "isActive": false,
      "balance": "$2,474.46",
      "age": 30,
      "eyeColor": "blue",
      "name": "Tameka Maxwell",
      "gender": "female",
      "company": "ENOMEN",
      "email": "tamekamaxwell@enomen.com",
      "phone": "+1 (902) 557-3898",
      "tags": [
        "aliquip",
        "anim",
        "exercitation",
        "non",
      ],
      "friends": [
        {
          "id": 0,
          "name": "Barber Hicks"
        },
        {
          "id": 1,
          "name": "Santana Cruz"
        },
        {
          "id": 2,
          "name": "Leola Cabrera"
        }
      ],
    };

    const { name = '', balance = '' , email = '' } = user;
    console.log(name, balance, email);

    const { 
      tags: [...tags] = []
    } = user;
    console.log(tags[0], tags[tags.length - 1]);

    const { 
      friends: [{ name: friendName = ""}] = []
    } = user;
    console.log(friendName);

    const {
      tags: [...tags] = [], friends: [...friends] = []
    } = user;
    console.log(tags, friends)

    const newArr = [...user.tags, user.friends];
    console.log(newArr);
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

  /*

    Recursion_____________________________

    function getTotalProgressByIteration(data) {
      let total = 0;
      let students = 0;

      for (let course of Object.values(data)){
          if (Array.isArray(course)){
            students += course.length;
            for (let i = 0; i < course.length; i++){
              total += course[i].progres;
            }
          } else {
            for (let subCourse of Object.values(course)){
              students += subCourse.length;
              for (let i = 0; i < subCourse.length; i++){
                total += subCourse[i].progres;
              }
            }
          }
      } 
      return total / students;
    }
    console.log(getTotalProgressByIteration(students));

    function getTotalProgressByRecursion(data) {
      if (Array.isArray(data)){
        let total = 0;

        for (let i = 0; i < data.length; i++){
          total += data[i].progres;
        }
        return [total, data.length];
      } else {
        let total = [0, 0];

        for (let subData of Object.values(data)){
          const subArray = getTotalProgressByRecursion(subData);
          total[0] += subArray[0];
          total[1] += subArray[1];
        }

        return total;
      }
    }
    const result = getTotalProgressByRecursion(students);
    console.log(result[0]/result[1]);

  */

  /*

    USE IN WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    Length object
    console.log(Object.keys(options).length)


    INTERVIEW ____________________________

    let x = 5;
    console.log(x);
    //5

    console.log(String([""] + false));
    console.log([] + false - null + true);
    NaN

    let y = 1;
    let x = y = 2;

    console.log(x);
    console.log(y);
    y1 x2

    console.log([] + 1 + 2);
    [] == [''] to string "12"

    console.log("1"[0]);
    ('1'[0]) == ([1][0])

    console.log(2 && 1 && null && 0 && undefined);
    console.log(2 || 1 || null || 0 || undefined);

    end first false
    or first true

    console.log(!!(1 && 2) == (1 && 2));
    !! == boolean

    console.log(null || 2 && 3 || 4);
    3

    const a = [1, 2, 3];
    const b = [1, 2, 3];
    console.log(a == b);
    console.log(a[0] == b[0]);
    a != b

    console.log(+'Infinity');

    console.log('Egor' > 'Ivan');
    const ego = 'Egor';
    const char = 'Ivan';
    console.log(ego < char);
    console.log(char.charCodeAt());
    unicode 1 > A > a

    console.log(0 || "" || 2 || undefined || true || false);
    end first false
    or first true


    let perem = NaN;

    if (!!perem && perem != ' ') {
      console.log('its true');
    }else if (perem == ' ') {
      console.log('its space');
    }else {
      console.log('its false');
    }

  */

