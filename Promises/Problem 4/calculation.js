const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}

const handleFailure = (rejectionValue) => {
  console.log(rejectionValue);
}

const countWords = (str) => {
  return new Promise((resolve, reject) => {
    if (typeof str !== 'string') {
      reject('Argument must be string');
    } else {
      resolve(str.split(' '));
    }
  })
  .then((words) => {
    const counts = {};
    words.forEach((word) => {
      if (counts[word]) {
        counts[word]++;
      } else {
        counts[word] = 1;
      }
    })
    return counts;
  })
}

module.exports = { handleSuccess, handleFailure, countWords };
