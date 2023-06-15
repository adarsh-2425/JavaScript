/*ES6: Write a function that takes an array of numbers and returns the largest number in the array using the ES6 spread operator and the Math.max function.*/
const numbers = [1, 2, 3, 4, 5, 6];

const large = numbers => {
  return Math.max(...numbers)
};

console.log(large(numbers));
