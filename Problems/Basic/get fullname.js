/*Create an object called person with properties firstName and lastName, and a getter
method fullName that returns the full name of the person as a string. The full name should be formatted as "firstName lastName".*/

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }
};

console.log(person.fullName);
