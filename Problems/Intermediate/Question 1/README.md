# Create a Person class that has the following properties:

`firstName`: A string representing the person's first name   
`lastName`: A string representing the person's last name    
`age`: A number representing the person's age    

The Person class should also have a method called getFullName that returns the person's full name as a string     
(firstName and lastName concatenated with a space between them).    

### Create a Student class that inherits from the Person class and has the following additional properties:

`studentId`: A string representing the student's ID number    
`courses`: An array representing the courses the student is enrolled in (initially empty)

The Student class should have a method called addCourse that takes a string representing a course name and adds it to the courses array.

### Finally, create a Teacher class that also inherits from the Person class and has the following additional properties:

`teacherId`: A string representing the teacher's ID number   
`department`: A string representing the department the teacher works in    

The Teacher class should have a static method called getDepartment that takes an array of Teacher objects and a department name as 
arguments, and returns an array of teacher objects who work in that department.    
