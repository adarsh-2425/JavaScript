// Coding challenge #20: Rotate an array to the left 1 position

function rotateLeft(numbers) {
  const lastNumber = numbers.pop();
  numbers.unshift(lastNumber);
  return numbers;
}

const numbers = [1, 2, 3];

const result = rotateLeft(numbers);
console.log(result)
