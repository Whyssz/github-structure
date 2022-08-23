/*
ES5_______

  function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscound = function() {
      return (this.price * (100 - this.discount) / 100);
    };
  }

  const apple = new Product('Apple', 100, 5);
  const samsung = new Product('Samsung', 100, 15);

  console.log(apple.getPriceWithDiscound());
  console.log(samsung.getPriceWithDiscound());

ES6______ auto inheriting
  const controlName = 'variableName';
  class Products {
    constructor (brand, price, discount) {
      this.price = price;
      this.brand = brand;
      this.discount = discount;
    }

    getCalc() {
      return this.price * (100 - this.discount) / 100;
    }

    [controlName](newPrice){
      this.price = newPrice;
    }

    //static - это такие методы, которые могут быть вызваны без создания экземпляра класса.
    static constructorOnly(str){
      return str;
    }
  }

  const newProduct = new Products('MI', 70, 10);


  console.log(newProduct);
*/