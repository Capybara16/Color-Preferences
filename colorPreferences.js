// Create an array to store three initial colors
let favoriteColors = ["black", "grey", "green"]; 

// Log the initial array to the console
console.log("Initial color preferences:", favoriteColors);

// Use prompt to allow the user to input a new color
let newColor = prompt("Enter a color you like:");

// Add the new color to the array using push() and print the updated array
if (newColor) {  // Check if the user entered a color
    favoriteColors.push(newColor);
    console.log("Updated color preferences:", favoriteColors);
} else {
    console.log("No color was entered.");
}
