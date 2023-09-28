// Coding challenge #31a. Create a function that will return the number of words in a text

function returnNumberOfWords(str) {
  const words = str.split(' ');
  return words.length;
}

const string = "Hello World";

const result = returnNumberOfWords(string);

console.log(result);
