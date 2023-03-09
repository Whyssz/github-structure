/* OBJECT
_
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
   
    EXAMPLE: ENTRIES___
    const obj = {
      a: 1, 
      b: 2
    };

    Object.entries(obj).forEach(([key, value]) => {
      console.log(key, value);
    });

*/
/* GET VALUES FROM THE TWO OBJECT

    function userRendering(users, tableValues) {
      const valueBody = document. createDocumentFragment();

      users.forEach((user, i) => {
        user.index = i + 1;
        const upUser = getNeedValues(user, tableValues);
        const sortKeyUser = JSON.parse(JSON.stringify(upUser, ['index','name', 'email', 'balance']));
        const createEl = generateCell(sortKeyUser);
        valueBody.appendChild(createEl);
      });

      return valueBody; 
    } 

    function getNeedValues(user, values) {
      const newValue = Object.keys(user).reduce((acc, key) => {
        if (key in values) {
          acc[key] = user[key];
        }
        return acc;
    }, {});
    */ 
/* DESCRIPTOR___ set / get
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
/* DEC / REST (...)______________________
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

/* CLOSURE___________________

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