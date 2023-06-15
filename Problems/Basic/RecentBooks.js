/*Objects: Write a function that takes an array of objects representing books, each with a title, author, and publication year, 
and returns an array of the titles of all books published in the last 5 years.*/

const getRecentBooks = books => {
  const currentYear = new Date().getFullYear();
  const recentBooks = books.filter(book => currentYear - book.publicationYear <= 5);
  return recentBooks.map(book => book.title);
};

const myBooks = [
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925},
  {title: 'To Kill a Mockingbird', author: 'Harper Lee', publicationYear: 1960},
  {title: '1984', author: 'George Orwell', publicationYear: 1949},
  {title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951},
  {title: 'Pride and Prejudice', author: 'Jane Austen', publicationYear: 1813},
  {title: 'Happy Place', author: 'Emily Henry', publicationYear: 2023},
];

console.log(getRecentBooks(myBooks));
