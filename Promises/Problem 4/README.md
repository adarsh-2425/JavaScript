# Count Words
Write a function called countWords that takes a string as input and returns a promise.   
The promise should resolve to an object containing the count of each word in the input string.  

```
countWords('the quick brown fox jumps over the lazy dog').then(wordCount => {
  console.log(wordCount); // logs { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }
});
```
