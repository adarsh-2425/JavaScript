/*Let's say you have an array of strings, and you want to find the unique words in the array and count how many times each word appears. You could use a 
Set to find the unique words and a Map to keep track of the word counts, like so:*/

const words = ['apple', 'banana', 'cherry', 'apple', 'cherry', 'date', 'elderberry'];

const uniqueWords = new Set(words);

const wordCounts = new Map();

for (const word of words) {
    if (wordCounts.has(word)) {
        wordCounts.set(word, wordCounts.get(word) + 1)
    } else {
        wordCounts.set(word, 1)
    }
}

console.log(uniqueWords); // Output: Set(4) { 'apple', 'banana', 'cherry', 'date', 'elderberry' }

console.log(wordCounts); // Output: Map(5) { 'apple' => 2, 'banana' => 1, 'cherry' => 2, 'date' => 1, 'elderberry' => 1 }
