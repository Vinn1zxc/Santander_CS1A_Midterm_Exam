// studentEnrollment.js

// Create two arrays for subjects
let DSA = [];
let WebDev = [];

while (true) {
    let subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) WebDev\n(C) Exit").toUpperCase();

    if (subjectChoice === "C") {
        console.log("Enrolled Students:");
        console.log("DSA:", DSA.length > 0 ? DSA : "No students enrolled");
        console.log("WebDev:", WebDev.length > 0 ? WebDev : "No students enrolled");
        console.log("Program exited.");
        break;
    }

    let selectedSubject = subjectChoice === "A" ? DSA : subjectChoice === "B" ? WebDev : null;

    if (!selectedSubject) {
        console.log("Invalid choice. Try again.");
        continue;
    }

    while (true) {
        let operation = prompt("Choose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

        if (operation === "A") {
            let studentName = prompt("Enter student name to enroll:");
            selectedSubject.push(studentName);
            console.log(`${studentName} has been enrolled in ${subjectChoice === "A" ? "DSA" : "WebDev"}.`);
        } 
        
        else if (operation === "B") {
            if (selectedSubject.length === 0) {
                console.log("No students enrolled in this subject.");
                continue;
            }
            console.log("Currently enrolled students:", selectedSubject);
            let studentName = prompt("Enter student name to unenroll:");
            let index = selectedSubject.indexOf(studentName);
            if (index !== -1) {
                selectedSubject.splice(index, 1);
                console.log(`${studentName} has been removed from ${subjectChoice === "A" ? "DSA" : "WebDev"}.`);
            } else {
                console.log("Student not found.");
            }
        } 
        
        else if (operation === "C") {
            break; // Return to subject selection
        } 
        
        else if (operation === "D") {
            console.log("Enrolled Students:");
            console.log("DSA:", DSA.length > 0 ? DSA : "No students enrolled");
            console.log("WebDev:", WebDev.length > 0 ? WebDev : "No students enrolled");
            console.log("Program exited.");
            return; // Exit the program
        } 
        
        else {
            console.log("Invalid operation. Try again.");
        }
    }
}