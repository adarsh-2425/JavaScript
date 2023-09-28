// Coding challenge #33. Calculate the sum of numbers received in a comma delimited string

function sumOfNumbers(numbers) {
  const nums = numbers.split(',').map(num => parseFloat(num));
  const sum = nums.reduce((a, b) => a + b);
  return sum;
}

const numbers = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";

const result = sumOfNumbers(numbers);

console.log(result);
