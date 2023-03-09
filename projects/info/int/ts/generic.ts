// Позволяет работать с несколькими типами, а не ограничиваться одним

// const getter = <T>(data: T): T => data;

// getter(10).length;      // Property 'length' does not exist on type '10'
// getter('test').length;  // 4

// interface Transform {
//   age: number;
// }

// class User<T, K extends Transform> {
//   constructor(public name: T, public age: K) {
//   }

//   public getName(): string {
//     return `${this.name}`;
//   }

//   public getNum(): number {
//     return this.age ** 2;
//   }
// }

// const user = new User('Dima', 24);
