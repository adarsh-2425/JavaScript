// Coding challenge #23: Reverse a string
function reverseString(str) {
  let str2 = "";

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    str2 += char;
  }

  return str2;
}

const string = "Hello World";

const result = reverseString(string);

console.log(result)
