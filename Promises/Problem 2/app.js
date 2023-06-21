//importing functions
const { addNumbers, handleSuccess, handleFailure }  = require('./calculator');

/handling promises
addNumbers(10, 20)
  .then(handleSuccess)
  .catch(handleFailure);
