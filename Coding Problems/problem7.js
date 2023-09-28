// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function firstArray(arr1, arr2) {
  return arr1.filter(num => !arr2.includes(num))
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result = firstArray(array1, array2);

console.log(result)
