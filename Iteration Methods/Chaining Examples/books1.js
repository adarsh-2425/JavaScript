// Given an array of objects representing books with `title`, `author`, and `year` properties, 
//write a JavaScript function that returns the titles of all the books in the array that were published before the year 2000, sorted alphabetically by author.

// For example, if the input array is [{title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951}, 
//{title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960}, {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925}], the function should return ["The Great Gatsby"].

// Write the function using method chaining.
const books = [{title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951}, {title: "To Kill a Mockingbird", 
             author: "Harper Lee", year: 1960}, {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925}];

const titles = books
  .filter(book => book.year < 2000)
  .sort((a, b) => a.author.localeCompare(b.author))
  .map(book => book.title);

console.log(titles);

//The localeCompare() method is a built-in JavaScript method that compares two strings based on their Unicode values. 
//It returns a negative value if the first string should come before the second string, a positive value if the first string 
//should come after the second string, or zero if the two strings are equal.
