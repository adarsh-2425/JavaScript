const { isPrime } = require('./prime');

//calling prime numbers function
const filterPrimes = arr => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      reject('Argument must be an array');
    } else {
      const primes = arr.filter(num => isPrime(num));
      resolve(primes);
    }
  })
};

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionValue) => {
  console.log(rejectionValue);
}

module.exports = { filterPrimes, handleSuccess, handleFailure };
