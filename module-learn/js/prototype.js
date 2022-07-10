/*
****
  Prototype (__proto__) - свойство всех объектов, которое содержит свойства и методы своих родителей 
  Экземплярам передаётся общий доступ к их методам и свойствам (доступ через прототип)
****

  function Product(brand, price, discount) {
    this.brand = brand;
    this.price = price;
    this.discount = discount;
  }

  Product.prototype.getPriceWithDiscound = function() {
    return (this.price * (100 - this.discount) / 100);
  };

  const apple = new Product('Apple', 100, 5);
  const samsung = new Product('Samsung', 100, 15);
*/