// Coding challenge #22: Reverse an array

function reverseArray(numbers) {
  let reversedArray = [];

  for (let i = numbers.length; i > 0; i--) {
    reversedArray.push(numbers[i - 1])
  }

  return reversedArray;
}

const numbers = [1, 2, 3, 4];

const result =reverseArray(numbers);
console.log(result)
