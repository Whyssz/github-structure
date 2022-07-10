/*
ES5____ (переиспользование методов/свойств *отличающийхся от вашего*)
  Ненаследоваемое (если в прототипе нет функции, а она присваевается через прототип, то нужно наследовать прото отдельно)

  Customer.prototype = Object.create(User.prototype);
  (fixed following bugs) Customer.prototype.constructor = Customer;


  const protoObj = {
  sayHello(){
    return `Hello`;
  }
  };

  const helObj = Object.create(protoObj, {
    firstname: { value: 'Dima'}
  });
  console.log(helObj);

ES6_____

  class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class Customer extends User {
    constructor(firstName, lastName, membership) {
      super(firstName, lastName);
      this.membership = membership;
    }

    getFullNameCustomer() {
      const perentResp = super.getFullName();
      return `${perentResp} - ${this.membership}`;
    }
  }

  const newUser = new Customer('Dima', 'Shilov', 'developer');

  console.log(newUser.getFullNameCustomer());

*/