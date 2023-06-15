/*Write a function that takes an object as input and returns an array of all the values in the object. Use the Object.values() method to solve this problem.*/

//factory function
const student = (name, age, course) => {
  return {
    name,
    age,
    course
  }
};

//student object 1
const student1 = student('John Doe', 29, 'Geology');

const values = Object.values(student1);
console.log(values);
