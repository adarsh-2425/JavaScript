//Write a function that takes an array of numbers and returns a Promise that resolves with the sum of the numbers.

const sum = nums => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(nums.length > 0) {
                let total = nums.reduce((a, b) => a + b, 0);
                resolve(total);
            } else {
                reject("Enter any numbers")
            }
        }, 3000);
    })
}

const nums = [1, 1, 2, 4];

sum(nums)
    .then((resolvedValue) => console.log(resolvedValue))
    .catch((rejectedValue) => onsole.error(rejectedValue));
