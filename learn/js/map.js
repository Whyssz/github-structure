const shops = [{ one: 500 }, { two: 5100 }, { tree: 1500 }];

const price = {
  one: 2000,
  two: 5100,
  tree: 1000,
};

// const map = new Map();
const map = new Map([[{ test: 300 }, 10000]]);

const setup = shops.forEach((shop, i) => {
  map.set(shops[i], price[Object.keys(shop)]);
});

// console.log(map);
// map.get(shops[0])
// map.has(shops[5]);
// map.delete(shops[2])
// map.clear()
// map.size;

/* Practice EX
  const user = {
    name: 'Dima',
    surmane: 'SMTH',
    age: 24,
    showMyPublicData: function () {
      console.log(`${this.name} - ${this.surname}`);
    },
  };

  const userMap = new Map(Object.entries(user));
  console.log(userMap);
  userMap.set({ value: 100 }, 1000);
  console.log(userMap);
  const reconvertUserMap = Object.fromEntries(userMap);
  console.log(reconvertUserMap);
*/

/* Enumiration map
  for (let shop of map.keys()){
  console.log(shop)
}

const goods = [];

for (let shop of map.keys()) { //values
  goods.push(Object.keys(shop)[0]);}
console.log(goods);

let total = 0;
for (let [_, price] of map.entries()) {
  total += price;
}
console.log(total);

*/
