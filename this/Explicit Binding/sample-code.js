// Explicit Binding
const person = {
  name: "John"
}

function greet() {
  console.log(`Hi, ${this.name}`)
}

const greetMe = greet.bind(person);
greetMe();
