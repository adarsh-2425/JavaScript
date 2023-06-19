const sumEvenNumbers = numbers => {
  const sum = numbers.filter(num => num % 2 === 0)
    .reduce((accumulator, currentValue) => 
           accumulator + currentValue);
  return sum;  
}

module.exports = {sumEvenNumbers};
