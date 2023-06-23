const { handleSuccess, handleFailure, stringToUpper } = require('./stringToUpper');

const strings = ['foo', 'bar', 'baz'];

const  promises = strings.map(string => stringToUpper(string));

Promise.all(promises)
  .then(handleSuccess)
  .catch(handleFailure);
