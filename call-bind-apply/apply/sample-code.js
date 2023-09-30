let nameObj = {
  name: "John"
}

let printName = {
  name: "Steve",
  sayHi: function(...mark) {
    const marks = [...mark]
    console.log(`${this.name} marks are ${marks}`)
  }
}

printName.sayHi.apply(nameObj, [1, 2]) // John marks are 1,2
