//Array Methods: Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6];

const evenSum = numbers.filter(num => num % 2 === 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(evenSum);
