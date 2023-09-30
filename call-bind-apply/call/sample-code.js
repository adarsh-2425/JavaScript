let nameObj = {
  name: "John"
}

let printName = {
  name: "Steve",
  sayHi: function(age) {
    console.log(`${this.name} age is ${age}`)
  }
}

printName.sayHi.call(nameObj, 45) // John age is 45
