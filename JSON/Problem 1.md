## Student Object to json and back

 Write a function called averageGrade that takes an array of student objects as an argument and returns the average grade across all students.   
 To do this, you'll need to convert the array of student objects to a JSON string, and then back to a JavaScript object using JSON.parse().   
 Once you have the array of student objects in JavaScript form, you can calculate the average grade and return it.  

 ```
const students = [
  { name: 'Alice', age: 22, grades: [80, 85, 90] },
  { name: 'Bob', age: 24, grades: [75, 70, 85] },
  { name: 'Charlie', age: 21, grades: [90, 85, 95] }
];

//calculate average
const averageGrade = students => {
    //convert to json
    const json = JSON.stringify(students);

    //parse from json
    const parsed = JSON.parse(json);
    
    let sum = 0;
    let count = 0;
    
    for (let student of parsed) {
        for (let grade of student.grades) {
            sum += grade;
            count++;
        }
    }
    
    const average = sum / count;
    return average;
}

console.log(averageGrade(students))
```
