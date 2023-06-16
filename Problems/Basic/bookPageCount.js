/*Create a factory function that generates objects representing books with the following properties: title, author, and year. 
Then, using an array method in ES6, create a new array that contains only the books that were published in or after the year 2000.
Finally, use the reduce() method to calculate the total number of pages in all of the books in the filtered array.*/

const bookFactory = (title, author, year, pageCount) => {
  return {title, author, year, pageCount}
};

const books = [
  bookFactory('The Catcher in the Rye', 'J.D. Salinger', 1951, 277),
  bookFactory('To Kill a Mockingbird', 'Harper Lee', 1960, 281),
  bookFactory('Harry Potter and the Philosopher\'s Stone', 'J.K. Rowling', 1997, 223),
  bookFactory('The Da Vinci Code', 'Dan Brown', 2003, 689),
  bookFactory('The Girl with the Dragon Tattoo', 'Stieg Larsson', 2005, 672),
  bookFactory('The Hunger Games', 'Suzanne Collins', 2008, 374),
];

const booksAfter2000 = books.filter(book => book.year >= 2000)
  .reduce((total, book) => total + book.pageCount, 0);

console.log(booksAfter2000);
