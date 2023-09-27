// callbacks
function sum(a, b, callback) {
  const result = a + b;

  callback(result);
}

function display(result) {
  console.log(result);
}

sum(1, 2, display)
