// favNumber.js

// Declare a favorite number
const favNumber = 18; // You can change this to any number you like
let guess;

// Loop until the user guesses the correct number
while (true) {
    guess = parseInt(prompt("Guess my favorite number:"));

    if (guess === favNumber) {
        console.log("Congratulations! You guessed the correct number.");
        break; // Exit the loop
    } else if (guess < favNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}