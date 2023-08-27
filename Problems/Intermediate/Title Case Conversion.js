/*Write a JavaScript function titleCase that takes a sentence (a string of words) as input and returns the sentence in title case format. In title case, the first letter of each word is capitalized, and the rest of the letters are in lowercase. */

// Helper function to capitalize first letter
function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

function titleCase(sentence) {
    const words = sentence.split(' ');
    const titleCasedWords = words.map(capitalizeWord);
    return titleCasedWords.join(' ');
}

const sentence = 'hello wOrld';

console.log(titleCase(sentence)); // Output: "Hello World"
