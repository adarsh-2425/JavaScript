//Write a function countProperties that takes an object as a parameter and returns the number of properties in the object.
function countProperties(obj) {
    return Object.keys(obj).length;
}
const student = {
    name: "Alice",
    age: 8,
    place: "Wonderland",
    gender: "female"
}

const count = countProperties(student);
console.log(count)
