// classSubjects.js

// Collecting class subject details using prompt()
let subjectTitle = prompt("Enter the subject title:");
let classSchedule = prompt("Enter the class schedule (Time, Days):");
let classroom = prompt("Enter the classroom:");
let classInstructor = prompt("Enter the class instructor:");
let studentName = prompt("Enter your name:");

// Logging the formatted information
console.log(`${studentName} is currently enrolled in ${subjectTitle} with a class schedule of ${classSchedule} at room ${classroom}. The instructor for the subject is ${classInstructor}.`);