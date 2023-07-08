//Write a function that takes an array of strings as input and returns a new array with the first two characters of each string.

function getTwoCharacters(strings) {
  return strings.map(str => str.slice(0, 2));
} 

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

console.log(getTwoCharacters(strings)); //[ 'ap', 'ba', 'ch', 'da', 'el' ]
