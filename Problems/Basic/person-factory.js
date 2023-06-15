/*Create a factory function called "createPerson" that takes in three parameters: "name", "age", and "email". 
The function should return an object with the following properties and methods:

"name" (string): the person's name
"age" (number): the person's age
"email" (string): the person's email address
"getInfo" (function): a method that returns a string containing the person's name, age, and email address
"setAge" (function): a method that takes in a number and sets the person's age to that number
"getEmailDomain" (function): a method that returns the domain of the person's email address using the built-in "split" and "pop" methods */

/factory function
const createPerson = (name, age, email) => {
 return {
   _name: name,
  _age: age,
  _email: email,

  get getInfo() {
    return `${this._name} ${this._age} ${this._email}`;
  },

  set setAge(num) {
    if (num < 0) {
      throw new Error ('Age should be a positive number in this universe.')
    } else {
      this._age = num;
    }
  },

  get getEmailDomain() {
    return this._email.split('@').pop();
    }
  }
}

//person object 1
let person1 = createPerson('John Doe', 18, 'johndoe@gmail.com');

person1.setAge = 20;
console.log(person1.getInfo);
console.log(person1.getEmailDomain);
