// colorPreferences.js

// Create an array to store favorite colors
let favoriteColors = [];

// Loop to collect three favorite colors
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color #${i + 1}:`);
    favoriteColors.push(color); // Add the color to the array
    console.log("Updated favorite colors:", favoriteColors);
}