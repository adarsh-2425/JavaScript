//Write a function that takes an array of numbers as input and returns a new array with the first three elements.

function firstThree(nums) {
  const result =  nums.slice(0, 3);
  console.log(result);
}

const nums = [1, 2, 3, 4, 5];
firstThree(nums);
