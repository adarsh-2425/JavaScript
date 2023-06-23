const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionValue) => {
  console.log(rejectionValue);
}

const stringToUpper = (string) => {
  return new Promise((resolve, reject) => {
    if (typeof string !== 'string') {
      reject('Not a String')
    } else {
      resolve(string.toUpperCase())
    }
  })
}

module.exports = { handleSuccess, handleFailure, stringToUpper };
