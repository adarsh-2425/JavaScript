// Coding challenge #21: Rotate an array to the right 1 position

function rotateRight(numbers) {
  const rotatedArray = [...numbers]; // create a copy of original array
  const lastNumber = rotatedArray.pop();
  rotatedArray.unshift(lastNumber);
  return rotatedArray;
}

const numbers = [1, 2, 3, 4]

const result = rotateRight(numbers);
console.log(result) // [ 4, 1, 2, 3 ]
