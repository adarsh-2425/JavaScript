const words = ["hello", "world", "javascript", "programming", "language"];

//word length greater than 6 using filter
const wordLength = words.filter((word => word.length >= 6));
console.log(wordLength);

//convert to uppercase using map
const upper = words.map((word => word.toUpperCase()));
console.log(upper);

//foreach gice a index
const index = words.forEach((word => {
    console.log(word);
}));

const pushh= words.push('testing lol');
console.log(words);
