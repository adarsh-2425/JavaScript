// Coding challenge #34. Create a function that will return an array with words inside a text
function wordsFromText(str) {

  const words = str.match(/\b\w+\b/g)

  return words || [];
}

const text = "Hello World";

const result = wordsFromText(text);

console.log(result);
