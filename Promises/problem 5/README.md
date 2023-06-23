## Count Words using Promise.all
Suppose you have an array of strings, and you want to count the number of words in each string. You want to do this asynchronously,    
since counting the words can be a time-consuming task, and you want to do it in parallel for all the strings in the array.   
You can use Promise.all() to wait for all the word-counting promises to resolve, and then do something with the results.  

```
const strings = ['The quick brown fox', 'jumps over', 'the lazy dog'];
logs => // [4, 2, 3]
```
