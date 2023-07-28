/*It's generally recommended to use regular functions in object methods, rather than arrow functions, to ensure that the
this context is correctly bound to the object calling the method.*/

//Person Object
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//adding method via prototype
Person.prototype.greet = function() {
    console.log(`Hello, ${this.name}`)
}

//instance of object
const person1 = new Person('Alice', 18);

//call greet
person1.greet();
