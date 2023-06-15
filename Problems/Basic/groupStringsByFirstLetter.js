/*Array Methods: Write a function that takes an array of strings as input and returns an object with keys representing the first letter of each string, and values representing an array of all strings that start with that letter.*/
const groupStringsByFirstLetter = strings => {
  return strings.reduce((result, string) => {
    const firstLetter = string[0];
    if (!result[firstLetter]) {
      result[firstLetter] = [];
    }
    result[firstLetter].push(string);
    return result;
  }, {})
};

const myStrings = ['apple', 'banana', 'cherry', 'date', 'orange', 'peach', 'pear', 'plum'];
console.log(groupStringsByFirstLetter(myStrings));
