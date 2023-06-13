//Chain two iteration methods on the same array.
const arr = [1, 2, 3, 4, 5];

arr.filter(element => element % 2 === 0)
  .forEach(element => console.log(element));
