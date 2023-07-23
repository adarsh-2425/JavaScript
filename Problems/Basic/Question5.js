//Write a program to find the largest element in an array using a callback function

const findLargest = (arr, callback) => {
    let largest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (callback(arr[i]), largest) {
             largest = arr[i]
        }
    }
    return largest;
}

const arr = [1, 2, 3, 4 ,5];
const largest = findLargest(arr, (a, b) => a > b);
console.log(largest);
