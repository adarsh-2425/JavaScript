const { countWords } = require('./countWords')

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionValue) => {
  console.log(rejectionValue);
}

const strings = ['The quick brown fox', 'jumps over', 'the lazy dog'];

const promises = strings.map(countWords);

Promise.all(promises)
  .then(handleSuccess)
  .catch(handleFailure);
