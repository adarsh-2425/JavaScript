//Write a function that takes an array of numbers as input and returns a new array with the last two elements.

function lastTwo(nums) {
  const result =  nums.slice(-2);
  console.log(result);
}

const nums = [1, 2, 3, 4, 5];
lastTwo(nums);
