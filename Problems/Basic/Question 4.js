/*Create a factory function that generates objects representing video games with the following properties: title, developer, platform, and releaseYear. 
Then, using an array method, create a new array that contains only the games that were released on the PS4. 
Finally, use the reduce() method to calculate the total number of games in the array.*/

//factory function for video games
const gameFactory = (title, developer, platform, releaseYear) => {
  return {title, developer, platform, releaseYear};
};

const games = [
  gameFactory('The Last of Us Part II', 'Naughty Dog', 'PS4', 2020),
  gameFactory('Horizon Zero Dawn', 'Guerrilla Games', 'PS4', 2017),
  gameFactory('Red Dead Redemption 2', 'Rockstar Games', 'Xbox One', 2018),
  gameFactory('The Witcher 3: Wild Hunt', 'CD Projekt Red', 'PC', 2015),
  gameFactory('God of War', 'Santa Monica Studio', 'PS4', 2018)
];

const ps4Games = games.filter(game => game.platform === 'PS4');
const totalps4Games = ps4Games.reduce((accumulator, currentValue) => accumulator + 1, 0);

console.log(totalps4Games);
