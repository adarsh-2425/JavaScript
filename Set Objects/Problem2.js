/*Let's say you have two arrays of numbers, and you want to find the numbers that are present in both arrays. 
You could use a Set object to accomplish this task, like so:*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const set1 = new Set(array1);

const intersection = new Set(array2.filter(num => set1.has(num)));

console.log(intersection);
