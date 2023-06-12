const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/*1. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' 
and save the returned value to a const variable named foundAnimal.*/
const foundAnimal = animals.findIndex(animal => animal === 'elephant');

/*Call .findIndex() on the animals array and return the index of the first element that starts with 's'. 
Assign the returned value to a const variable named startsWithS.*/
const startsWithS = animals.findIndex(animal => animal[0] === 's');

