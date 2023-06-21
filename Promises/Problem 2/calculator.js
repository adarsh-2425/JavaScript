const { addition } = require('./math');

//calling addNumbers function
const addNumbers = (num1, num2) => {
  return new Promise((resolve, reject) => {
    const result = addition(num1, num2);
    if (isNaN(num1) || isNaN(num2)) {
      reject(`Invalid numbers entered : num1 = ${num1}, num2 = ${num2}`);
    } else {
      const result = addition(num1, num2);
      resolve(result);
    }
  })
}

//success handler
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

//failure handler
const handleFailure = (rejectionValue) => {
  console.log(rejectionValue);
}

//exporting functions
module.exports = {addNumbers, handleSuccess, handleFailure};
