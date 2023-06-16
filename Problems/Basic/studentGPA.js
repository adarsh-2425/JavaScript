/*Create an object that represents a student with the following properties: name, age, gender, major, GPA, and enrollmentDate, which should be a Date object representing the date the student enrolled in school. Use a getter method to calculate and return the number of years the student has been enrolled in school based on the current date. Use a setter method to update the student's GPA.*/

//student object
const student = {
  name: 'John Doe',
  age: 20,
  gender: 'male',
  major: 'computer science',
  GPA: 3.5,
  enrollmentDate: new Date('2020-08-31'),

  get totalYearsEnrolled() {
    const currentDate = new Date();
    const yearsEnrolled = currentDate.getFullYear() - this.enrollmentDate.getFullYear();
    return yearsEnrolled;
  },

  set setGPA(gpa) {
    if (gpa < 0) {
      throw new Error ('GPA should be greater than 0');
    } else {
      this.GPA = gpa;
    }
  } 
};

console.log(student);
