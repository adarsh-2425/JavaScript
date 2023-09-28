// Coding challenge #27: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinctElement(arr1, arr2){
  const uniqueElements = new Set([...arr1, ...arr2]);
  return uniqueElements;
}

const array1 = [1, 1, 2];
const array2 = [2, 3, 3, 5];

const result = distinctElement(array1, array2);

console.log(result)
