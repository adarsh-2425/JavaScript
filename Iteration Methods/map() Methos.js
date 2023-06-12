/*Use .map() to create a new array that contains the first character of each string in the animals array. 
Save the new array to a const variable named secretMessage.*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(firstLetter => firstLetter[0]);

console.log(secretMessage.join(''));

