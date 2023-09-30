// Example 3: In this example the method some() checks for 2 and 87 in the array. Since only 2 is available therefore the method returns true for the first query while it returns false for the second query.


function isAvailable(num) {
  return num === 87;
}

const numbers = [1, 2, 3, 4, 87];

const result = numbers.some(isAvailable);

console.log(result)
