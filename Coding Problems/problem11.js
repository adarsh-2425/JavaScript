// Coding challenge #32. Create a function that will capitalize the first letter of each word in a text

function capitalizeFirstWord(str) {
  const words = str.split(' ');

  const capitalizedWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })

  const capitalizedString = capitalizedWords.join(' ');

  return capitalizedString;
}

const string = "hello world";

const result = capitalizeFirstWord(string);

console.log(result);
