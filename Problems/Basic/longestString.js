/*Write a function that takes an array of strings as input and returns the longest string in the array. Use the reduce() method to solve this problem.*/

const strings = ['Hello World', 'lol', 'hmm','oops'];

const longest = string => {
  return string.reduce((accumulator, currentValue) => {
    if (currentValue.length > accumulator.length) {
      accumulator = currentValue;
    }
  return accumulator;
  }, '');
};

console.log(longest(strings));
