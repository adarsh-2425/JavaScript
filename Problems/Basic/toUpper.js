/*Write a function that takes an array of strings as input and returns a new array with all the strings 
in uppercase letters. Use the map() method to solve this problem..*/
const arr = ['Hello', 'World', 'John', 'Earth'];

const toUpper = arr => {
  return arr.map(string => string.toUpperCase());
}

console.log(toUpper(arr));
