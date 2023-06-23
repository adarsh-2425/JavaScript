const { countWords, handleSuccess, handleFailure } = require('./calculation');

const sentence = 'the quick brown fox jumps over the lazy dog';

countWords(sentence)
  .then(handleSuccess)
  .catch(handleFailure);
