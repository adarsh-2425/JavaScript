// Coding challenge #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.

function addAndReturnAsString(str1, str2) {
  const num1 = BigInt(str1);
  const num2 = BigInt(str2);

  const sum = num1 + num2;

  const resultAsString = sum.toString();

  return resultAsString;
}

const str1 = "5";
const str2 = "5";

const result = addAndReturnAsString(str1, str2);
console.log(result);
