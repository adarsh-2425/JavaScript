/*Write a function that takes an array of numbers as input and returns a new array with all 
the numbers that are greater than or equal to 5. Use the filter() method to solve this problem.*/

const numbers = [1, 2, 3, 4, 5, 8, 55, 33];

const greaterThanFive = number => {
  return number.filter(num => num >=5)
};

console.log(greaterThanFive(numbers));
