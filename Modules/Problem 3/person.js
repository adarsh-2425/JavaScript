//class Person
class Person {
  constructor(name, age, email) {
    this._name = name;
    this._age = age;
    this._email = email;
  }
}

//exporting Person class using destructured approach
module.exports = { Person };
