/*Write a JavaScript function findEvenSum that takes an array of numbers as input and returns the sum of all even numbers in the array. 
If the array is empty or doesn't contain any even numbers, the function should return 0.*/

function findEvenSum(nums) {
    // checking for even number
    const evenNumbers = nums.filter(num => num % 2 === 0);
    
    if (evenNumbers.length === 0) {
        return 0;
    }
    
    return evenNumbers.reduce((a, b) => a + b, 0);
}

const nums = [1, 2, 3, 4, 5, 6];

console.log(findEvenSum(nums))
