/*Create an array of objects representing books with the following properties: title, author, year, and genre. 
Use the ES6 spread operator to create a copy of the array, and then use the sort() method to sort the books in descending order of year. 
Finally, use the map() method to create a new array that contains only the titles of the sorted books.*/

//factory function
const factoryOfBooks = (title, author, year, genre) => {
  return {title, author, year, genre};
}
//array of object of books
const books = [
  factoryOfBooks('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'),
  factoryOfBooks('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Fiction'),
  factoryOfBooks('One Hundred Years of Solitude', 'Gabriel Garcia Marquez', 1967, 'Magical Realism'),
  factoryOfBooks('Pride and Prejudice', 'Jane Austen', 1813, 'Romance'),
  factoryOfBooks('1984', 'George Orwell', 1949, 'Dystopian Fiction'),
  factoryOfBooks('The Catcher in the Rye', 'J.D. Salinger', 1951, 'Coming-of-Age Fiction'),
  factoryOfBooks('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy'),
  factoryOfBooks('The Lord of the Rings', 'J.R.R. Tolkien', 1954, 'Fantasy'),
];
//copy of books using ES6 spread operator
const copyOfBooks = [...books];

//sort based on year
const sortByYear = copyOfBooks.sort((a, b) => b.year - a.year);
//array based on title
const sortByTitle = sortByYear.map(book => book.title);

console.log(sortByTitle);
