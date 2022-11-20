const filterForPerson = {
  name: 'dima',
  age: 25,
  work: 'no',
};

const personN = {
  name: 'dima',
  age: 25,
  work: 'developer',
  gradueade: false,
  hire: 'yes',
};

const personFilter = (filter, person) => {
  const newObj = Object.keys(filter).reduce((acc, value) => {
    acc[value] = person[value];
    return acc;
  }, {});
  return newObj;
};

const test = [['one'], ['two'], ['tree']];
console.log(personFilter(filterForPerson, personN));
