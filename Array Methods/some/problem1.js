// Some Array Method
function greaterThan5(num){
  return num > 5;
}

const numbers = [1, 2, 6, 7];

const result = numbers.some(greaterThan5);
 
console.log(result) 
