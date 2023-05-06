const numbers = [1, -1, 2, 3];

//a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
//etc
const sum = numbers.reduce((accumulator, currentValue) => {
   return accumulator + currentValue; 
}, 0);

console.log(sum);
