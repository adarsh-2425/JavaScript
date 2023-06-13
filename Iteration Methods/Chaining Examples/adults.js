// Given an array of objects representing people with `name` and `age` properties, write a JavaScript function that returns the names of all the people in the array who are over 18 years old, sorted alphabetically.

// For example, if the input array is [{name: "Alice", age: 25}, {name: "Bob", age: 17}, {name: "Charlie", age: 20}], the function should return ["Alice", "Charlie"].

// Write the function using method chaining.
const people = [{name: "Alice", age: 25}, {name: "Bob", age: 17}, {name: "Charlie", age: 20}];

const adult = people.filter(people => people.age > 18)
  .map(people => people.name)
  .sort();

console.log(adult);
