/*
Given an array of integers and an integer target sum, find a continuous subarray (containing at least one number) where the sum of the subarray's elements is equal to the target sum. Return the indices of the subarray's starting and ending positions.

If no such subarray is found, return null.

Write a JavaScript function findSubarraySum that takes an array of integers and a target sum as input and returns an array of two indices representing the starting and ending positions of the subarray.
*/
function findSubarraySum(nums, targetSum) {
    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            
            if (sum === targetSum) {
                return [start, end];
            }
        }
    }
    
    return null;
}

console.log(findSubarraySum([1, 2, 3, 4, 5], 9)); // Output: [2, 4]
console.log(findSubarraySum([10, 5, 2, 7, 1, 9], 15)); // Output: [1, 3]
console.log(findSubarraySum([1, 2, 3], 10)); // Output: null
