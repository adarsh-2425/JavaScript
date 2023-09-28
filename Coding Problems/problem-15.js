// Coding challenge #37. Create a function that will convert a string in an array containing the ASCII codes of each character

function asciiCodeOfCharacters(str) {
  const asciiArray = [];

  for (let char of str) {
    const asciiValue = char.charCodeAt(0);
    asciiArray.push(asciiValue)
  }

  return asciiArray;
}

const string = "Hello World";

const result = asciiCodeOfCharacters(string);

console.log(result);
