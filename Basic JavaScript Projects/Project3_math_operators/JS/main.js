// Addition function
function addition() {
    var add = 1 + 2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; // Print the result in HTML
}

// Subtraction function
function subtraction() {
    var sub = 9 - 7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub; // Print the result in HTML
}

// Multiplication function
function multiplication() {
    var mult = 12 * 5;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult; // Print the result in HTML
}

// Division function
function division() {
    var divide = 39 / 3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide; // Print the result in HTML
}

// Random function - Math.random() gives a random number, times 10
function random() {
    document.getElementById("Ran").innerHTML = Math.random() * 10; // Print the result in HTML
}

// Modulus operator function - gives the remainder
function modulus_operator() {
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML = "When you divide 38 by 4 you have a remainder of: " + modulus; // Print the result in HTML
}

// Increment function - adds one to the value
function Increment() {
    var value = document.getElementById("IncrementText").innerHTML; // Save the text of the element
    value++; // Add one to the value
    document.getElementById("IncrementText").innerHTML = value; // Print the result in HTML
}

// Decrement function - subtracts one from the value
function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML; // Save the text of the element
    value--; // Subtract one from the value
    document.getElementById("DecrementText").innerHTML = value; // Print the result in HTML
}
