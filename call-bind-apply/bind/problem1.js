/* Problem:

You have a Person object with a name property. You want to create a function called greet that, when called, prints a greeting message using the name property of the Person object. However, you want to use the bind method to 
create a new function that always greets this person, no matter where or how the greet function is called.

Write a function greet that uses the bind method to achieve this behavior. */

let person = {
  name: 'John'
}

function greet() {
  console.log(`Hello, ${this.name}!`)
}

const bindGreet = greet.bind(person);
bindGreet();
