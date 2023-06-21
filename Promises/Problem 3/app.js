const { filterPrimes, handleSuccess, handleFailure } = require('./calculation');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

filterPrimes(numbers)
  .then(handleSuccess)
  .catch(handleFailure)
