/*Write a function that takes an array of numbers as input and returns a Promise that
resolves with an object containing the sum, average, maximum, and minimum of the input numbers.*/

const calculator = nums => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(nums)) {
            reject(new Error("Input is not an array"))
        } else if (nums.length === 0) {
            reject(new Error("Input is empty"))
        } else {
            const sum = nums.reduce((a, b) => a + b, 0);
            const avg = sum / nums.length;
            const max = Math.max(...nums);
            const min = Math.min(...nums);
            resolve({sum, avg, max, min})
        }
    })
}

const nums = [1, 2, 3, 4, 5];

calculator(nums)
    .then((resolvedValue) => console.log(resolvedValue))
    .catch(err => console.error(err))
