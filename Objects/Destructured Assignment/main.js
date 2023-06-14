//vampire object
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

//conventional extraction
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

//using destructured assignment
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

//can also be used on nested properties
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
