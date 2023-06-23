const countWords = (string) => {
  return new Promise((resolve, reject) => {
    const words = string.split(' ');
    resolve(words.length);
  })
}

module.exports = { countWords };
