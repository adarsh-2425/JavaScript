//importing Person class
const { Person } = require('./person.js');

//creating peoples array
const peoples = [
  new Person('Alice', 25, 'alice@example.com'),
  new Person('Bob', 17, 'bob@example.com'),
  new Person('Charlie', 30, 'charlie@example.com'),
  new Person('Dave', 16, 'dave@example.com')
];

//getAdults is a anonymous function expression
const getAdults = peoples => {
  const adults = peoples.filter(people => people._age >= 18)
  return adults;
};

//exporting peoples array and getAdults function using destructured approach
module.exports = { peoples, getAdults };
