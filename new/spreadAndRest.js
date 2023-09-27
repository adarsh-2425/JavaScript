const numbers = [1, 2, 3, 4];

// Spread operator
function sum(a, b, c, d) {
  console.log(a + b + c + d);
}
sum(...numbers)

// Rest operator
function print(...numbers) {
  for (let num of numbers) {
    console.log(num)
  }
}
print(...numbers)
