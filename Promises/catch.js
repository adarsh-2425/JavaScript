/*The .catch() function takes only one argument, onRejected. In the case of a rejected promise, 
this failure handler will be invoked with the reason for rejection. 
Using .catch() accomplishes the same thing as using a .then() with only a failure handler.*/

const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure)
