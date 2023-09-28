/* Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or 
second array but not in both */

function notInBoth(arr1, arr2) {
  let uniqueArray = [];

  for (let el of arr1) {
    if (!arr2.includes(el)) {
      uniqueArray.push(el);
    }
  }

  for (let el of arr2) {
    if (!arr1.includes(el)) {
      uniqueArray.push(el);
    }
  }

  return uniqueArray;
  
}

const array1 = [1, 2, 3, 4];
const array2 = [4, 5, 6, 7];

const result = notInBoth(array1, array2);
console.log(result);
