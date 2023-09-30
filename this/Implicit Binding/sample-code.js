// Implicit Binding
const person = {
  name: "John",
  greet: function(){
    console.log(`Hi, ${this.name}`)
  }
}

person.greet()
