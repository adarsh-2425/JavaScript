//Given an array of numbers, write a JavaScript function that returns the sum of all even numbers in the array using a combination of the `filter()` and `reduce()` methods.

// For example, if the input array is [1, 2, 3, 4, 5, 6], the function should return 12 (which is the sum of 2, 4, and 6).

// Write the function using method chaining.
const arr = [1, 2, 3, 4, 5, 6];

const evenSum = arr.filter(num => num % 2 === 0)
                    .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(evenSum);
