// Given an array of strings, write a JavaScript function that returns a new array of all the words in the array that are longer than 5 characters, sorted alphabetically. 

// For example, if the input array is ["apple", "banana", "cherry", "date", "elderberry"], the function should return ["banana", "cherry", "elderberry"].

// Write the function using method chaining.
const array = ["apple", "banana", "cherry", "date", "elderberry"];

const longerThanFive =  array.filter(element => element.length > 5)
.sort();

console.log(longerThanFive);
