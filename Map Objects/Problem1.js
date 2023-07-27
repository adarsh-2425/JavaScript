//Given an array of integers, write a function that finds the number of occurrences of each integer in the array and returns the result as a Map object.

function countOccurences(arr) {
    const counts = new Map();
    
    for (let num of arr) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1)
        } else {
            counts.set(num, 1)
        }
    }
    return counts;
}

const numbers = [1, 1, 1, 2, 3, 3, 4];

const result = countOccurences(numbers);
console.log(result);
