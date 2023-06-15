/*ES6: Write a function that takes two arguments, a string and a number, and returns a new string that repeats the input string the number 
of times specified by the number argument, using the ES6 string repeat method.*/

const repeatString = (str, num) => {
  return str.repeat(num) ;
};

console.log(repeatString('John Doe', 4));
