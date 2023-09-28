// Coding challenge #20: Rotate an array to the left 1 position

function rotateLeft(numbers) {
  const rotatedArray = [...numbers];
  const firstNumber = rotatedArray.shift();
  rotatedArray.push(firstNumber);
  return rotatedArray;
}

const numbers = [1, 2, 3];

const result = rotateLeft(numbers);
console.log(result)
