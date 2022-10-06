interface User {
  readonly name: string;
  age?: number;
  [propNmae: string]: any;
}

// interface ClassUser {
//   getStr(): string;
// }

interface Upgrade extends User {
  getStr(): string;
}

const user: User = {
  name: 'Dima',
  age: 24,
  nick: 'dima24'
};

// class Dima implements User, ClassUser {
class Dima implements Upgrade {
  name: string;
  test: string = 'hi';

  getStr() {
    return `${this.name} - ${this.test}`;
  }
}
