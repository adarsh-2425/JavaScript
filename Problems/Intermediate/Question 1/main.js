class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
}

get fullName() {
  return `${this._firstName} ${this._lastName}`;
}
}

//student class from person class
class Student extends Person {
  constructor(firstName, lastName, age, studentID, courses) {
    super(firstName, lastName, age);
    this._studentID = studentID;
    this._courses = courses;
  }
}

//teacher class from person class
class Teacher extends Person {
  constructor(firstName, lastName, age, teacherID, department) {
    super(firstName, lastName, age);
    this._teacherID = teacherID;
    this._department = department;
  }

  static getDepartment(teachersArray, departmentName) {
      return teachersArray.filter(teacher => teacher.department === departmentName);
  }
}

const student = new Student('Jane', 'Smith', 20, '123456', ['Math', 'English']);
console.log(student.fullName); // Output: "Jane Smith"
console.log(student._courses); // Output: ["Math", "English"]

const teacher1 = new Teacher('Bob', 'Jones', 40, 'T123', 'Science');
const teacher2 = new Teacher('Sally', 'Brown', 50, 'T456', 'Math');
const teachers = [teacher1, teacher2];
const mathTeachers = Teacher.getDepartment(teachers, 'Math');
console.log(mathTeachers); // Output: [teacher2]
