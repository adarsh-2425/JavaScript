// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array

function mergeArrays(arr1, arr2) {
  const mergedArrays = [...arr1, ...arr2];
  return mergedArrays;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const result = mergeArrays(array1, array2);

console.log(result);
