/*Create a factory function that generates objects representing movies with the following properties: title, director, year, and rating. 
Then, using an array method in ES6, create a new array that contains only the movies with a rating of 8 or higher. Finally, 
use the map() method to create a new array that contains only the titles of the highly-rated movies, and then use the join() 
method to concatenate those titles into a single comma-separated string.*/

//factory function
const movieFactory = (title, director, year, rating) => {
  return {title, director, year, rating}
};

const movies = [
  movieFactory('The Godfather', 'Francis Ford Coppola', 1972, 9.2),
  movieFactory('The Shawshank Redemption', 'Frank Darabont', 1994, 9.3),
  movieFactory('The Dark Knight', 'Christopher Nolan', 2008, 9.0),
  movieFactory('The Godfather: Part II', 'Francis Ford Coppola', 1974, 9.0),
  movieFactory('12 Angry Men', 'Sidney Lumet', 1957, 8.9),
  movieFactory('Schindler\'s List', 'Steven Spielberg', 1993, 8.9),
  movieFactory('The Lord of the Rings: The Return of the King', 'Peter Jackson', 2003, 8.9),
];

const highRatedMovies = movies.filter(movie => movie.rating >= 8);

const titleOfHighRatedMovies =  highRatedMovies.map(movie => movie.title).join(',');

console.log(titleOfHighRatedMovies);
