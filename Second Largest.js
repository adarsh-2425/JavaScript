function secondL(arr) {
    let largest = arr[0];
    let secondLargest = arr[0];
    
    for(let n of arr) {
        if(n > largest) {
            secondLargest = largest;
            largest = n;
        }
        else if(n > secondLargest && n!= largest)
            secondLargest = n;
    }
    return secondLargest;
}

const nums = [1,2,3,4,5,5];
console.log(secondL(nums));
