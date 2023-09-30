// Arrow Function Binding
const person = {
  name: "John",
  greet: () => {
    console.log(`Hi, ${this.name}`)
  }
}

person.greet()
