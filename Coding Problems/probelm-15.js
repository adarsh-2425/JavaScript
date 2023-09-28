// Coding challenge #36. Create a function that converts a string to an array of characters

function stringToCharacters(str) {
  const characters = [];

  for(let char of str) {
    characters.push(char);
  }
  
  return characters;
}

const string = "Hello"

const result = stringToCharacters(string);

console.log(result)
