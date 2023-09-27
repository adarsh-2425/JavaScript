//Promise 1
function one() {
  return new Promise((resolve) => {
    resolve('Im first promise')
  })
}

//Promise 2
function two() {
  return new Promise((resolve) => {
    resolve('Im second promise')
  })
}

//Promise 3
function three() {
  return new Promise((resolve) => {
    resolve('Im third promise')
  })
}

// Promise chaining
one()
  .then(res => {
    console.log(res);
    return two();
  })
.then(res => {
  console.log(res);
  return three();
})
.then(res => {
  console.log(res);
})

// Promise all
const promises = [one(), two(), three()];

Promise.all(promises)
  .then(res => console.log(res))
  .catch(err => console.error(err))
